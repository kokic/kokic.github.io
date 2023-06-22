"use strict";

/// Various parameters.
Object.assign(CONSTANTS, {
    /// The current quiver version.
    VERSION: "1.2.1",
    /// When the `quiver.sty` package was last modified.
    PACKAGE_VERSION: "2021/01/11",
    /// We currently only support 0-cells, 1-cells, 2-cells, and 3-cells. This is due to
    /// a restriction with tikz-cd, which does not support n-cells greater than n = 2 (though it has
    /// issues even then), and also for usability: a user is unlikely to want to draw a higher cell.
    /// This restriction is not technical: it can be lifted in the editor without issue.
    MAXIMUM_CELL_LEVEL: 3,
    /// The width of the dashed grid lines.
    GRID_BORDER_WIDTH: 0,
    /// The padding of the content area of a vertex.
    CONTENT_PADDING: 8,
    /// How much (horizontal and vertical) space (in pixels) in the SVG to give around the arrow
    /// (to account for artefacts around the drawing).
    SVG_PADDING: 6,
    /// How much space (in pixels) to leave between adjacent parallel arrows.
    EDGE_OFFSET_DISTANCE: 8,
    /// How many pixels each unit of curve height corresponds to.
    CURVE_HEIGHT: 24,
    /// How many pixels of padding to place around labels on edges.
    EDGE_LABEL_PADDING: 8,
    /// How much padding to try to keep around the focus point when moving it via the keyboard
    /// (in pixels).
    VIEW_PADDING: 128,
    /// How long the user has to hold down on a touchscreen to trigger panning.
    LONG_PRESS_DURATION: 800,
    /// How much to shorten edges connected to edges by (in %), by default.
    EDGE_EDGE_PADDING: 20,
    /// Default dimensions (in pixels) of an HTML embedded diagram, which may be overridden by the
    /// user.
    DEFAULT_EMBED_SIZE: {
        WIDTH: 400,
        HEIGHT: 400,
    },
    /// How many pixels to leave around the border of an embedded diagram.
    EMBED_PADDING: 2, // 4-px for 3-curve
});

/// Various states for the UI (e.g. whether cells are being rearranged, or connected, etc.).
class UIMode {
    constructor() {
        // Used for the CSS class associated with the mode. `null` means no class.
        this.name = null;
    }

    /// A placeholder method to clean up any state when a mode is left.
    release() {}
}

/// The default mode, representing no special action.
UIMode.Default = class extends UIMode {
    constructor() {
        super();

        this.name = "default";
    }
};
UIMode.default = new UIMode.Default();

UIMode.Modal = class extends UIMode {
    constructor() {
        super();

        this.name = "modal";
    }
}

/// Two k-cells are being connected by an (k + 1)-cell.
UIMode.Connect = class extends UIMode {
    constructor(ui, source, forged_vertex, reconnect = null) {
        super();

        this.name = "connect";

        // The source of a connection between two cells.
        this.source = source;

        // The target of a connection between two cells.
        this.target = null;

        // Whether the source of this connection was created with the start
        // of the connection itself (i.e. a vertex was created after dragging
        // from an empty grid cell).
        this.forged_vertex = forged_vertex;

        // If `reconnect` is not null, then we're reconnecting an existing edge.
        // In that case, rather than drawing a phantom arrow, we'll actually
        // reposition the existing edge.
        // `reconnect` is of the form `{ edge, end }` where `end` is either
        // `"source"` or `"target"`.
        this.reconnect = reconnect;
    }

    release(ui) {}

    /// Update the overlay with a new cursor position.
    update(ui, offset) {}

    /// Returns whether the `source` is compatible with the specified `target`.
    /// This first checks that the source is valid at all.
    static valid_connection(ui, source, target, reconnect = null) {}

    /// Creates a new edge.
    static create_edge(ui, source, target) {}

    /// Connects the source and target. Note that this does *not* check whether the source and
    /// target are compatible with each other.
    connect(ui, event) {}
};

/// Cells are being moved to a different position, via the pointer.
UIMode.PointerMove = class extends UIMode {
    constructor(ui, origin, selection) {
        super();

        this.name = "pointer-move";

        /// The location from which the move was initiated.
        this.origin = origin;

        /// The location relative to which positions were last updated.
        this.previous = this.origin;

        /// The group of cells that should be moved.
        this.selection = selection;

        // Cells that are being moved are not considered part of the grid of cells
        // and therefore do not interact with one another.
        for (const cell of selection) {
            ui.positions.delete(`${cell.position}`);
        }
    }

    release(ui) {}
};

/// Cells are being moved to a different position, via the keyboard.
UIMode.KeyMove = class extends UIMode {
    constructor(ui) {
        super();
        this.name = "key-move";
    }

    release(ui) {}
};

/// The UI view is being panned.
UIMode.Pan = class extends UIMode {
    constructor(key) {
        super();

        this.name = "pan";

        /// The location from which the pan was initiated (used to update the view relative to the
        /// origin).
        this.origin = null;

        /// The key with which the pan was initiated. Multiple keys (Option and Control) can be used
        /// for panning, so we need to make sure that we're consistent about the key we listen for
        /// when panning.
        this.key = key;
    }
};

/// The user is jumping to a cell.
UIMode.Command = class extends UIMode {
    constructor(ui, mode) {
        super();

        this.name = "command";

        ui.panel.label_input.element.value = "";
        this.switch_mode(ui, mode);
        ui.panel.label_input.parent.class_list.remove("hidden");
        ui.panel.label_input.remove_attributes("disabled");
        ui.panel.label_input.element.focus();
    }

    release(ui) {}

    switch_mode(ui, mode) {}
};

// We are viewing a diagram embedded in another webpage.
UIMode.Embedded = class extends UIMode {
    constructor(ui) {
        super();

        this.name = "embedded";
    }
}

/// The object responsible for controlling all aspects of the user interface.
class UI {
    constructor(element) {
        // The quiver identified with the UI.
        this.quiver = new Quiver();

        // The UI mode (e.g. whether cells are being rearranged, or connected, etc.).
        this.mode = null;

        // The width and height of each grid cell. Defaults to `default_cell_size`.
        this.cell_width = new Map();
        this.cell_height = new Map();
        // The default (minimum) size of each column and row, if a width or height has not been
        // specified.
        this.default_cell_size = 128;
        // The constraints on the width and height of each cell: we use the maximum constaint for
        // final width/height. We store these separately from `cell_width` and `cell_height` to
        // avoid recomputing the sizes every time, as we access them frequently.
        this.cell_width_constraints = new Map();
        this.cell_height_constraints = new Map();

        // All currently selected cells;
        this.selection = new Set();

        // The element in which to place the interface elements.
        this.element = element;

        // A map from `x,y` positions to vertices. Note that this
        // implies that only one vertex may occupy each position.
        this.positions = new Map();

        // A set of unique idenitifiers for various objects (used for generating HTML `id`s).
        this.ids = new Map();

        // The element containing all the cells themselves.
        this.canvas = null;

        // The grid background.
        this.grid = null;

        // Whether to prevent relayout for individual cell changes so as to batch it instead.
        this.buffer_updates = false;

        // The offset of the view (i.e. the centre of the view).
        this.view = Offset.zero();

        // The scale of the view, as a log of 2. E.g. `scale = 0` is normal, `scale = 1` is 2x
        // zoom, `scale = -1` is 0.5x and so on.
        this.scale = 0;

        // The size of the view (i.e. the document body dimensions).
        this.dimensions = new Dimensions(document.body.offsetWidth, document.body.offsetHeight);

        // Undo/redo for actions.
        this.history = new History();

        // Keyboard shortcuts.
        this.shortcuts = new Shortcuts(this);

        // A map from cell codes (i.e. IDs) to cells.
        this.codes = new Map();

        // The panel for viewing and editing cell data.
        this.panel = new Panel();

        // The colour picker.
        this.colour_picker = new ColourPicker();

        // The toolbar.
        this.toolbar = new Toolbar();

        // LaTeX macro definitions.
        this.macros = new Map();

        // LaTeX colour definitions.
        this.colours = new Map();

        // The URL from which the macros have been fetched (if at all).
        this.macro_url = null;

        // The user settings, which are stored persistently across sessions in `localStorage`.
        this.settings = new Settings();
    }

    /// Reset most of the UI. We don't bother resetting current zoom, etc.: just enough to make
    /// changing the URL history work properly.
    reset() {
        // Reset the mode.
        // this.switch_mode(UIMode.default);

        // Clear the existing quiver.
        for (const cell of this.quiver.all_cells()) {
            cell.element.remove();
        }
        this.quiver = new Quiver();

        // Reset data regarding existing vertices.
        this.cell_width = new Map();
        this.cell_height = new Map();
        this.cell_width_constraints = new Map();
        this.cell_height_constraints = new Map();
        
        this.positions = new Map();
        this.update_grid();

        // Clear the undo/redo history.
        this.history = new History();

        // Update UI elements.
        // this.panel.update(this);
        // this.toolbar.update(this);
        // While the following does work without a delay, it currently experiences some stutters.
        // Using a delay makes the transition much smoother.
        delay(() => {
            this.panel.hide(this);
            this.panel.label_input.parent.class_list.add("hidden");
            this.colour_picker.close();
        });
    }

    /// Returns definitions of macros and colours that are recognised by LaTeX.
    definitions() {
        const { macros, colours } = this;
        return { macros, colours };
    }

    /// Returns options that are not saved persistently in `settings`, but are used to modify
    /// export output.
    options() {
        const { macro_url } = this;
        return {
            macro_url,
            dimensions: this.diagram_size(),
        };
    }

    initialise() {
        this.element.class_list.add("ui");
        // this.switch_mode(UIMode.default);
        // top black

        // Set the grid background.
        this.initialise_grid(this.element);
        // necessary

        // Set up the element containing all the cells.
        this.container = new DOM.Div({ class: "container" }).add_to(this.element);
        this.canvas = new DOM.Div({ class: "canvas" }).add_to(this.container);

        // Set up the panel for viewing and editing cell data.
        this.panel.initialise(this);
        // this.element.add(this.panel.element);
        this.colour_picker.initialise(this);
        // this.element.add(this.colour_picker.element);
        this.panel.update_position();
        // this.element.add(this.panel.global);

        // Set up the keyboard shortcuts, and about, panes.
        const panes = [];

        // The version of quiver last used by the user. If they have not used quiver before, this
        // will be `null`. If it's `null`, we display the welcome pane. If it's non-null, but
        // doesn't match the current version of quiver, we may display the new features of the
        // current version of quiver. Otherwise, we do nothing.
        const version_previous_use = window.localStorage.getItem("version-previous-use");

        if (version_previous_use) {
            // If the user has used quiver before, update the previous use version.
            // Otherwise, we display a welcome message below, and only update it once the user has
            // acknowledged it.
            window.localStorage.setItem("version-previous-use", CONSTANTS.VERSION);
        }        // Add the focus point for new nodes.
        
        this.focus_point = new DOM.Div({ class: "focus-point focused smooth" })
        
            // .add_to(this.canvas);
        // this.update_focus_tooltip();
        // this.toolbar.update(this);
        
       
        // Add a move to the history.
        
        // We don't want long presses to trigger the context menu on touchscreens. However, we
        // can't distinguish between context menus triggered by touchscreens versus, say,
        // right-clicking. So we manually keep track of whether there are any touch events, and in
        // this case, disable the context menu.
        let is_touching = false;
        // We use long presses to trigger panning mode. We have to detect these manually (in
        // some implementations, long press is equivalent to `contextmenu`, but not all).
        let long_press_timer = null;

        
        // The touch events don't function like pointer events by default, so we manually trigger
        // pointer events from the touch events.

        // The element that is currently being touched.
        let touched_element = null;
        // We have to track touch enter and touch leave events manually, since this is not directly
        // available. One might imagine that the `touchmove` event would be ideal for this, but
        // this appears not to trigger for small movements, whereas `pointermove` does.
       

        // this.reposition_focus_point(Position.zero());
    }

    /// Returns whether the UI is in a particular mode.
    in_mode(...modes) {
        
    }

    /// Transitions to a `UIMode`.
    switch_mode(mode) {
        
    }

    /// Get the width or height of a particular grid cell. You should use this instead of directly
    /// accessing `cell_width` or `cell_height` to ensure it defaults to `default_cell_size`.
    cell_size(sizes, index) {
        return sizes.get(index) || this.default_cell_size;
    }

    /// Get a column or row number corresponding to an offset (in pixels), as well as the partial
    /// offset from the absolute position of that column and row origin.
    cell_from_offset(sizes, offset) {
        // We explore the grid in both directions, starting from the origin.
        let index = 0;
        const original_offset = offset;
        if (offset === 0) {
            return [index, 0];
        }
        // The following two loops have been kept separate to increase readability.
        // Explore to the right or bottom...
        while (offset >= 0) {
            const size = this.cell_size(sizes, index);
            if (offset < size) {
                return [index, original_offset - offset];
            }
            offset -= size;
            ++index;
        }
        // Explore to the left or top...
        while (offset <= 0) {
            --index;
            const size = this.cell_size(sizes, index);
            if (Math.abs(offset) < size) {
                return [index, original_offset - (offset + size)];
            }
            offset += size;
        }
    }

    /// Get a column and row number corresponding to an offset, as well as the partial offsets from
    /// the absolute positions of the column and row. See `cell_from_offset` for details.
    col_row_offset_from_offset(offset) {
        return [
            this.cell_from_offset(this.cell_width, offset.x),
            this.cell_from_offset(this.cell_height, offset.y),
        ];
    }

    /// Get a column and row number corresponding to an offset.
    col_row_from_offset(offset) {
        // return this.col_row_offset_from_offset(offset).map(([index, _]) => index);
    }

    /// Convert an `Offset` (pixels) to a `Position` (cell indices).
    /// The inverse function is `offset_from_position`.
    position_from_offset(offset) {
        
    }

    /// A helper method for getting a position from an event.
    position_from_event(event) {
        // return this.position_from_offset(this.offset_from_event(event));
    }

    /// A helper method for getting an offset from an event.
    offset_from_event(event) {
        
    }

    /// Returns half the size of the cell at the given `position`.
    cell_centre_at_position(position) {
        return new Offset(
            this.cell_size(this.cell_width, position.x) / 2,
            this.cell_size(this.cell_height, position.y) / 2,
        );
    }

    /// Computes the offset to the centre of the cell at `position`.
    centre_offset_from_position(position) {
        const offset = this.offset_from_position(position);
        const centre = this.cell_centre_at_position(position);
        return offset.add(centre);
    }

    /// Convert a `Position` (cell indices) to an `Offset` (pixels).
    /// The inverse function is `position_from_offset`.
    offset_from_position(position) {
        const offset = Offset.zero();

        // We attempt to explore in each of the four directions in turn.
        // These four loops could be simplified, but have been left as-is to aid readability.

        if (position.x > 0) {
            for (let col = 0; col < Math.floor(position.x); ++col) {
                offset.x += this.cell_size(this.cell_width, col);
            }
            offset.x += this.cell_size(this.cell_width, Math.floor(position.x)) * (position.x % 1);
        }
        if (position.x < 0) {
            for (let col = -1; col >= position.x; --col) {
                offset.x -= this.cell_size(this.cell_width, col);
            }
            offset.x += this.cell_size(this.cell_width, Math.floor(position.x)) * (position.x % 1);
        }

        if (position.y > 0) {
            for (let row = 0; row < Math.floor(position.y); ++row) {
                offset.y += this.cell_size(this.cell_height, row);
            }
            offset.y += this.cell_size(this.cell_height, Math.floor(position.y)) * (position.y % 1);
        }
        if (position.y < 0) {
            for (let row = -1; row >= position.y; --row) {
                offset.y -= this.cell_size(this.cell_height, row);
            }
            offset.y += this.cell_size(this.cell_height, Math.floor(position.y)) * (position.y % 1);
        }

        return offset;
    }

    /// Update the width of the grid columns and the heights of the grid rows at each of the given
    /// positions.
    /// The maximum width/height of each cell in a column/row will be used to determine the width/
    /// height of each column/row.
    ///
    /// Returns whether the entire quiver was rerendered (in which case the caller may be able to
    /// avoid rerendering).
    update_col_row_size(...positions) {
       
    }

    /// Updates the size of the content of a cell. If the size is larger than the maximum of all
    /// other cells in that column or row, we resize the column or row to fit the content in.
    /// This means we do not have to resize the text inside a cell, for instance, to make things
    /// fit.
    update_cell_size(cell, width, height) {
        
    }

    /// Move the focus point to a given position. This will also resize the focus point
    /// appropriately, so this isn't necessarily an idempotent operation.
    reposition_focus_point(position, update_focus_position = true) {
        
    };

    /// Returns the cell under the focus point, if the focus point is active and such a cell exists.
    /// Otherwise, returns `null`.
    cell_under_focus_point() {
        
        return null;
    }

    /// Updates the tooltip associated to the focus point.
    update_focus_tooltip() {}

    /// Computes the size of the diagram.
    diagram_size() {
        let [width, height] = [0, 0];
        // Compute the extrema of the diagram.
        const bounding_rect = this.quiver.bounding_rect();
        if (bounding_rect === null) {
            return Dimensions.zero();
        }
        const [[x_min, y_min], [x_max, y_max]] = bounding_rect;
        // Sum to compute width and height.
        for (let x = x_min; x <= x_max; ++x) {
            width += this.cell_size(this.cell_width, x);
        }
        for (let y = y_min; y <= y_max; ++y) {
            height += this.cell_size(this.cell_height, y);
        }
        return new Dimensions(width, height);
    }

    /// Scales the diagram so that it fills the available window size.
    scale_to_fit() {
        // Get the available dimensions to work with within the window.
        const window_width = Math.max(0, document.body.clientWidth - 2 * CONSTANTS.EMBED_PADDING);
        const window_height = Math.max(0, document.body.clientHeight - 2 * CONSTANTS.EMBED_PADDING);

        // Compute the size of the diagram.
        const diagram_size = this.diagram_size();
        const scale = window_width > 0 && window_height > 0 ?
            Math.log2(Math.min(
                window_width / diagram_size.width,
                window_height / diagram_size.height
            )) : 0;
        this.pan_view(Offset.zero(), scale);
    }

    // -------------------
    /// Adds a cell to the canvas.
    add_cell(cell) {
        this.canvas.add(cell.element);
        if (cell.is_vertex()) {
            this.positions.set(`${cell.position}`, cell);
            cell.recalculate_size(this);
        }
        this.colour_picker.update_diagram_colours(this);
    }

    /// Removes a cell.
    remove_cell(cell, when) {}

    /// Cancel the creation of a new vertex or edge via clicking or dragging.
    cancel_creation() {}

    /// Repositions the view by an absolute offset.
    pan_to(offset, zoom = this.scale) {
        this.view.x = offset.x;
        this.view.y = offset.y;
        this.scale = zoom;
        const view = this.view.mul(2 ** this.scale);
        this.canvas.set_style({
            transform: `translate(${-view.x}px, ${-view.y}px) scale(${2 ** this.scale})`,
        });
        this.update_grid();
    }

    /// Repositions the view by a relative offset.
    /// If `offset` is positive, then everything will appear to move towards the top left.
    /// If `zoom` is positive, then everything will grow larger.
    pan_view(offset, zoom = 0) {
        this.pan_to(this.view.add(offset), this.scale + zoom);
    }

    /// Centre the view with respect to the selection, or the entire quiver if no cells are
    /// selected.
    centre_view() {
        let cells;
        if (this.selection.size > 0) {
            cells = this.selection;
        } else if (this.quiver.cells.length > 0 && this.quiver.cells[0].size > 0) {
            cells = this.quiver.cells[0];
        } else {
            return;
        }

        // We want to centre the view on the cells, so we take the range of all cell offsets.
        let min_offset = new Offset(Infinity, Infinity);
        let max_offset = new Offset(-Infinity, -Infinity);
        this.view = Offset.zero();

        for (const cell of cells) {
            if (cell.is_vertex()) {
                // For vertices, we want to include the entire cell they occupy.
                const offset = this.centre_offset_from_position(cell.position);
                const centre = this.cell_centre_at_position(cell.position);
                min_offset = min_offset.min(offset.sub(centre));
                max_offset = max_offset.max(offset.add(centre));
            } else {
                // For edges, we want to include the centre point (for curved edges) and endpoints.
                const offsets = [
                    cell.shape.origin,
                    cell.source.shape.origin,
                    cell.target.shape.origin
                ];
                for (const offset of offsets) {
                    min_offset = min_offset.min(offset);
                    max_offset = max_offset.max(offset);
                }
            }
        }

        this.pan_view(min_offset.add(max_offset).div(2));
    }

    /// Returns a unique identifier for an object.
    unique_id(object) {
        if (!this.ids.has(object)) {
            this.ids.set(object, this.ids.size);
        }
        return this.ids.get(object);
    }

    /// Returns the active element if it is a text input field. (If it is, certain
    /// actions (primarily keyboard shortcuts) will be disabled.)
    input_is_active() {
        // This may not be the label input, e.g. it may be the macros input.
        return document.activeElement.matches('input[type="text"]') && document.activeElement;
    }

    /// Resizes a label to fit within a cell.
    resize_label(cell, label) {
        // How wide, relative to the cell, a label can be. This needs to be smaller than
        // 1.0 to leave room for arrows between cells, as cells are immediately adjacent.
        const MAX_LABEL_WIDTH = 0.8;
        // The text scaling decrement size. Must be strictly between 0 and 1.
        const LABEL_SCALE_STEP = 0.9;

        let max_width;
        if (cell.is_vertex()) {
            max_width = this.cell_size(this.cell_width, cell.position.x) * MAX_LABEL_WIDTH;
        } else {
            const offset_for = (endpoint) => {
                if (endpoint.is_vertex()) {
                    return this.centre_offset_from_position(endpoint.position);
                } else {
                    return endpoint.offset;
                }
            };
            // Calculate the distance between the endpoints.
            const length = offset_for(cell.target).sub(offset_for(cell.source)).length();
            max_width = length * MAX_LABEL_WIDTH;
        }

        // If vertices are too large (or too small), we resize the grid to fit them.
        if (cell.is_vertex()) {
            this.update_cell_size(
                cell,
                label.offsetWidth,
                label.offsetHeight,
            );
        }

        // Reset the label font size for edges, to reduce overlap.
        if (cell.is_edge()) {
            label.style.fontSize = "";
            // Ensure that the label fits within the cell by dynamically resizing it.
            while (label.offsetWidth > max_width) {
                const new_size = parseFloat(
                    window.getComputedStyle(label).fontSize,
                ) * LABEL_SCALE_STEP;
                label.style.fontSize = `${new_size}px`;
            }
        }

        return [label.offsetWidth, label.offsetHeight];
    }

    /// Returns the declared macros in a format amenable to passing to KaTeX.
    latex_macros() {
        const macros = {};
        for (const [name, { definition }] of this.macros) {
            // Arities are implicit in KaTeX.
            macros[name] = definition;
        }
        return macros;
    }

    // A helper method for displaying error banners.
    // `type` can be used to selectively dismiss such errors (using the `type` argument on
    // `dismiss_error`).
    static display_error(message, type = null) {
        const body = new DOM.Element(document.body);
        // If there's already an error, it's not unlikely that subsequent errors will be triggered.
        // Thus, we don't display an error banner if one is already displayed.
        if (body.query_selector(".error-banner:not(.hidden)") === null) {
            const error = new DOM.Div({ class: "error-banner hidden" })
                .add(message)
                .add(
                    new DOM.Element("button", { class: "close" })
                        .listen("click", () => UI.dismiss_error())
                );
            if (type !== null) {
                error.set_attributes({ "data-type": type });
            }
            body.add(error);
            // Animate the banner's entry.
            delay(() => error.class_list.remove("hidden"));
        }
    }

    /// A helper method for dismissing error banners.
    /// Returns whether there was any banner to dismiss.
    /// If `type` is non-null, `dismiss_error` will only dismiss errors whose type matches.
    static dismiss_error(type = null) {
        const error = new DOM.Element(document.body).query_selector(`.error-banner${
            type !== null ? `[data-type="${type}"]` : ""
        }`);
        if (error) {
            const SECOND = 1000;
            error.class_list.add("hidden");
            setTimeout(() => error.remove(), 0.2 * SECOND);
            return true;
        } else {
            return false;
        }
    }

    /// Create the canvas upon which the grid will be drawn.
    initialise_grid(element) {
        const [width, height] = [document.body.offsetWidth, document.body.offsetHeight];
        this.grid = new DOM.Canvas(null, width, height, { class: "grid" });
        // element.add(this.grid);
        // this.update_grid();
    }

    /// Update the grid with respect to the view and size of the window.
    update_grid() {
        // Constants for parameters of the grid pattern.
        // The (average) length of the dashes making up the cell border lines.
        const DASH_LENGTH = this.default_cell_size / 16;
        // The border colour.
        const BORDER_COLOUR = "lightgrey";

        const [width, height] = [document.body.offsetWidth, document.body.offsetHeight];
        const canvas = this.grid;
        canvas.resize(width, height);

        const scale = 2 ** this.scale;

        const context = canvas.context;
        
        context.strokeStyle = BORDER_COLOUR;
        context.lineWidth = Math.max(1, CONSTANTS.GRID_BORDER_WIDTH * scale);
        context.setLineDash([DASH_LENGTH * scale]);
        
        // -------------------
        // necessary
        // We want to centre the horizontal and vertical dashes, so we get little crosses in the
        // corner of each grid cell. This is best effort: it is perfect when each column and row
        // is the default size, but otherwise may be imperfect.
        const dash_offset = -DASH_LENGTH * scale / 2;

        const offset = this.view;
        
        const [[left_col, left_offset], [top_row, top_offset]] = this.col_row_offset_from_offset(
            offset.sub(new Offset(width / scale / 2, height / scale / 2))
        );
        const [[right_col,], [bottom_row,]] = this.col_row_offset_from_offset(
            offset.add(new Offset(width / scale / 2, height / scale / 2))
        );
        
        // Draw the vertical lines.
        context.beginPath();
        for (let col = left_col, x = left_offset - offset.x;
                col <= right_col; x += this.cell_size(this.cell_width, col++)) {
            context.moveTo(x * scale + width / 2, 0);
            context.lineTo(x * scale + width / 2, height);
        }
        context.lineDashOffset
            = offset.y * scale - dash_offset - height % this.default_cell_size / 2;
        context.stroke();

        // Draw the horizontal lines.
        context.beginPath();
        for (let row = top_row, y = top_offset - offset.y;
                row <= bottom_row; y += this.cell_size(this.cell_height, row++)) {
            context.moveTo(0, y * scale + height / 2);
            context.lineTo(width, y * scale + height / 2);
        }
        context.lineDashOffset
            = offset.x * scale - dash_offset - width % this.default_cell_size / 2;
        context.stroke();
    }

    /// Get an `ArrowStyle` from the `options` associated to an edge.
    /// `ArrowStyle` is used simply for styling: we don't use it as an internal data representation
    /// for quivers. This helps keep a separation between structure and drawing, which makes it
    /// easiser to maintain backwards-compatibility.
    static arrow_style_for_options(arrow, options) {
        // By default, `ArrowStyle` have minimal styling.
        const style = new ArrowStyle();

        // All arrow styles support labels, shifting, and colour.
        style.label_position = options.label_position / 100;
        style.shift = options.offset * CONSTANTS.EDGE_OFFSET_DISTANCE;
        style.colour = options.colour.css();
        
        // ----------------------
        switch (options.style.name) {
            case "arrow":
                style.level = options.level;
                style.curve = options.curve * CONSTANTS.CURVE_HEIGHT * 2;
                // `shorten` is interpreted with respect to the arc length of the arrow.
                const bezier = arrow.bezier();
                try {
                    const [start, end] = arrow.find_endpoints();
                    const arc_length = bezier.arc_length(end.t) - bezier.arc_length(start.t);
                    style.shorten.tail = arc_length * options.shorten.source / 100;
                    style.shorten.head = arc_length * options.shorten.target / 100;
                } catch (_) {
                    // If we can't find the endpoints, the arrow isn't being drawn, so we don't
                    // need to bother trying to shorten it.
                }

                // Body style.
                switch (options.style.body.name) {
                    case "squiggly":
                        style.body_style = CONSTANTS.ARROW_BODY_STYLE.SQUIGGLY;
                        break;
                    case "barred":
                        style.body_style = CONSTANTS.ARROW_BODY_STYLE.PROARROW;
                        break;
                    case "dashed":
                        style.dash_style = CONSTANTS.ARROW_DASH_STYLE.DASHED;
                        break;
                    case "dotted":
                        style.dash_style = CONSTANTS.ARROW_DASH_STYLE.DOTTED;
                        break;
                    case "none":
                        style.body_style = CONSTANTS.ARROW_BODY_STYLE.NONE;
                        break;
                }

                // Tail style.
                switch (options.style.tail.name) {
                    case "none":
                        style.tails = CONSTANTS.ARROW_HEAD_STYLE.NONE;
                        break;
                    case "maps to":
                        style.tails = CONSTANTS.ARROW_HEAD_STYLE.MAPS_TO;
                        break;
                    case "mono":
                        style.tails = CONSTANTS.ARROW_HEAD_STYLE.MONO;
                        break;
                    case "hook":
                        style.tails = CONSTANTS.ARROW_HEAD_STYLE[{
                            "top": "HOOK_TOP",
                            "bottom": "HOOK_BOTTOM",
                        }[options.style.tail.side]];
                        break;
                    case "arrowhead":
                        style.tails = CONSTANTS.ARROW_HEAD_STYLE.NORMAL;
                        break;
                }

                // Head style.
                switch (options.style.head.name) {
                    case "arrowhead":
                        style.heads = CONSTANTS.ARROW_HEAD_STYLE.NORMAL;
                        break;
                    case "none":
                        style.heads = CONSTANTS.ARROW_HEAD_STYLE.NONE;
                        break;
                    case "epi":
                        style.heads = CONSTANTS.ARROW_HEAD_STYLE.EPI;
                        break;
                    case "harpoon":
                        style.heads = CONSTANTS.ARROW_HEAD_STYLE[{
                            "top": "HARPOON_TOP",
                            "bottom": "HARPOON_BOTTOM",
                        }[options.style.head.side]];
                        break;
                }
                break;

            // Adjunction (⊣).
            case "adjunction":
                style.body_style = CONSTANTS.ARROW_BODY_STYLE.ADJUNCTION;
                style.heads = CONSTANTS.ARROW_HEAD_STYLE.NONE;
                break;

            // Pullback/pushout corner.
            case "corner":
                style.body_style = CONSTANTS.ARROW_BODY_STYLE.NONE;
                style.heads = CONSTANTS.ARROW_HEAD_STYLE.NONE;
                style.tails = CONSTANTS.ARROW_HEAD_STYLE.CORNER;
                break;

            // Pullback/pushout corner.
            case "corner-inverse":
                style.body_style = CONSTANTS.ARROW_BODY_STYLE.NONE;
                style.heads = CONSTANTS.ARROW_HEAD_STYLE.NONE;
                style.tails = CONSTANTS.ARROW_HEAD_STYLE.CORNER_INVERSE;
                break;
        }

        return style;
    }

    /// Update the `ArrowStyle` associated to an arrow, as well as label formatting, etc.
    /// This is necessary before redrawing.
    static update_style(arrow, options) {
        // Update the arrow style.
        arrow.style = UI.arrow_style_for_options(arrow, options);
        // Update the label style.
        if (arrow.label !== null) {
            arrow.label.alignment = {
                left: CONSTANTS.LABEL_ALIGNMENT.LEFT,
                right: CONSTANTS.LABEL_ALIGNMENT.RIGHT,
                centre: CONSTANTS.LABEL_ALIGNMENT.CENTRE,
                over: CONSTANTS.LABEL_ALIGNMENT.OVER,
            }[options.label_alignment];
        }
    }

    /// Load macros and colours from a string. Macros will be expanded in any LaTeX label, whilst
    /// colours appear as a palette group in the colour panel.
    load_macros(definitions) {
        // Here, we ignore `{` and `}` around the command name, but later we check that
        // the brackets at least match.
        const newcommand = /^\\newcommand\{?\\([a-zA-Z]+)\}?(?:\[(\d)\])?\{(.*)\}$/;
        // It's not clear exactly what the rules for colour names is, so we accept a sensible
        // subset. We don't accept `cymk` for now. We don't validate values in the regex.
        const definecolor = /^\\definecolor\{([a-zA-Z0-9\-]+)\}\{(rgb|RGB|gray)\}\{((?:\d+(?:\.\d+)?)(?:,(?:\d+(?:\.\d+)?))*)\}$/;

        const macros = new Map();
        const colours = new Map();

        for (let line of definitions.split("\n")) {
            line = line.trim();
            if (line === "" || line.startsWith("%")) {
                // Skip empty lines and comments.
                continue;
            }

            let match = line.match(newcommand);
            // Check we either have ``{\commandname}` or `\commandname`, but not mismatched
            // brackets.
            if (match !== null && /^\\newcommand(\{\\[a-zA-Z]+\}|\\[a-zA-Z]+[^\}])/.test(line)) {
                const [, command, arity = 0, definition] = match;
                macros.set(`\\${command}`, {
                    definition,
                    arity,
                });
                continue;
            }

            match = line.replace(/\s/g, "").match(definecolor);
            if (match !== null) {
                const [, name, model] = match;
                const values = match[3].split(",").map((x) => parseFloat(x));
                let colour = null;
                switch (model) {
                    case "rgb":
                        if (values.length === 3 && values.every((x) => x <= 1)) {
                            colour = Colour.from_rgba(...values.map((x) => Math.round(x * 255)));
                        }
                        break;
                    case "RGB":
                        if (values.length === 3 && values.every((x) => {
                            return x <= 255 && Number.isInteger(x);
                        })) {
                            colour = Colour.from_rgba(...values);
                        }
                        break;
                    case "gray":
                        if (values.length === 1 && values[0] <= 1) {
                            colour = new Colour(0, 0, Math.round(values[0] * 100));
                        }
                        break;
                    default:
                        console.warn(`Encountered unrecognised colour model: \`${model}\``);
                        continue;
                }
                if (colour !== null) {
                    colour.name = name;
                    colours.set(name, colour);
                } else {
                    console.warn(`Ignoring invalid colour specification for \`${name}\``);
                }
                continue;
            }

            // We should have hit a `continue` by now, unless we couldn't parse the line.
            console.warn(`Ignoring unrecognised definition: \`${line}\``);
        }
        this.macros = macros;
        this.colours = colours;

        // Rerender all the existing labels with the new macro definitions.
        for (const cell of this.quiver.all_cells()) {
            this.panel.render_tex(this, cell);
        }

        // Update the LaTeX colour palette group.
        this.colour_picker.update_latex_colours(this);
    }

    /// Load macros from a URL.
    load_macros_from_url(url) {
        // Reset the stored macro URL. We don't want to store outdated URLs, but we also don't
        // want to store invalid URLs, so we'll set `this.macro_url` when we succeed in fetching the
        // definitions.
        this.macro_url = null;

        const macro_input = this.panel.global.query_selector("input");
        url = url.trim();
        macro_input.element.value = url;

        const success_indicator = macro_input.parent.query_selector(".success-indicator");
        success_indicator.class_list.remove("success", "failure");

        // Clear the error banner if it's an error caused by a previous failure of
        // `load_macros`.
        UI.dismiss_error("macro-load");

        if (url !== "") {
            success_indicator.class_list.add("unknown");
            // CORS is terribly frustrating. We simply want to fetch some text, but are often
            // unable to do so, because CORS is opt-in and most sites have not. To alleviate this
            // problem, we try to prefix URLs that failed to load with the following service
            // (which should surely not be necessary with `credentials: "omit"`). In doing so, we
            // are hoping that the service never becomes malicious.
            const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

            const attempt_to_fetch_macros = (url, prefix = "") => {
                fetch(`${prefix}${url}`, { credentials: "omit" })
                    .then((response) => response.text())
                    .then((text) => {
                        this.load_macros(text);
                        this.macro_url = url;
                        success_indicator.class_list.remove("unknown");
                        success_indicator.class_list.add("success");
                        macro_input.element.blur();
                    })
                    .catch(() => {
                        if (!url.startsWith(CORS_ANYWHERE)) {
                            // Attempt to fetch using cors-anywhere.
                            attempt_to_fetch_macros(url, CORS_ANYWHERE);
                            return;
                        }
                        UI.display_error(
                            "Macro definitions could not be loaded " +
                            "from the given URL.",
                            "macro-load",
                        );
                        success_indicator.class_list.remove("unknown");
                        success_indicator.class_list.add("failure");
                    });
            };
            attempt_to_fetch_macros(url);
        } else {
            // If the URL is empty, we simply reset all macro and colour definitions (as if the user
            // had never loaded any macros or colours).
            this.macros = new Map();
            this.colours = new Map();

            // Rerender all the existing labels without the new macro definitions.
            for (const cell of this.quiver.all_cells()) {
                this.panel.render_tex(this, cell);
            }

            // Update the LaTeX colour palette group.
            this.colour_picker.update_latex_colours(this);
        }
    }
}

/// The history system (i.e. undo and redo).
class History {
    constructor() {
        // A list of all actions taken by the user.
        // Each "action" actually comprises a list of atomic actions.
        this.actions = [];

        // The index after the last taken action (usually equal to `this.actions.length`).
        // `0` therefore signifies that no action has been taken (or we've reverted history
        // to that point).
        this.present = 0;

        // We keep track of the state of the editor at the various points in history, e.g. the
        // selection.
        this.states = [new History.State(new Set(), Position.zero())];

        // We allow history events to be collapsed if two consecutive events have the same
        // (elementwise) `collapse` array. This tracks the previous one.
        this.collapse = null;
    }

    /// Add a reversible event to the history. Its effect will not be invoked (i.e. one should
    /// effect the action separately) unless `invoke` is `true`, as actions added to the history
    /// are often composites of individual actions that should not be performed atomically in
    /// real-time.
    add(ui, actions, invoke = false, selection = ui.selection) {
        // Append a new history event.
        // If there are future actions, clear them. (Our history only forms a list, not a tree.)
        
    }

    /// Add a collapsible history event. This allows the last event to be modified later,
    /// replacing the history state.
    add_collapsible(ui, collapse, event, invoke = false) {
        
    }

    /// Get the previous array of actions, if `collapse` matches `this.collapse`.
    get_collapsible_actions(collapse) {
        
    }

    /// Adds a new history event, or collapses it into the previous event if the two match.
    add_or_modify_previous(ui, collapse, new_actions) {
        
    }

    /// Make the last action permanent, preventing it from being collapsed.
    permanentise() {
        
    }

    /// Pop the last event from the history. Assumes that `this.present === this.actions.length`.
    pop(ui) {
        
    }

    /// Trigger an action. Returns whether the panel should be updated after the action.
    effect(ui, actions, reverse) {
        
    }

    undo(ui) {
        
    }

    redo(ui) {
        
    }
}

/// The data tracked and restored by the history system.
History.State = class {
    constructor(selection, focus_position) {
        // We keep track of cell selection between events to conserve it as expected.
        this.selection = selection;

        // We also keep track of the position of the focus point for keyboard use.
        this.focus_position = focus_position;
    }
};

class Settings {
    constructor() {
        
    }

    /// Returns a saved user setting, or the default value if a setting has not been modified yet.
    get(setting) {
        return this.data[setting];
    }

    /// Saves a user setting.
    set(setting, value) {
        
    }
}

/// A panel for editing cell data.
class Panel {
    constructor() {
        // The panel element.
        this.element = null;

        // The label input element.
        this.label_input = null;

        // Buttons and options affecting the entire diagram (e.g. export, macros).
        this.global = null;

        // The displayed export format (`null` if not currently shown).
        this.export = null;

        // The various sliders. We store them in a variable, rather than finding them with
        // `query_selector` as we usually do, because we need access to the `DOM.Multislider`
        // objects, rather than the `DOM.Element`s.
        this.sliders = new Map();

        // The current label colour. This may be different to the colour in the colour picker
        // (likewise for `colour` below).
        this.label_colour = Colour.black();

        // The current edge colour selected in the panel.
        this.colour = Colour.black();
    }

    /// Set up the panel interface elements.
    initialise(ui) {
        this.element = new DOM.Div({ class: "side panel hidden" });

        // Prevent propagation of pointer events when interacting with the panel.
        this.element.listen(pointer_event("down"), (event) => {
            if (event.button === 0) {
                event.stopImmediatePropagation();
            }
        });

        // Prevent propagation of scrolling when the cursor is over the panel.
        // This allows the user to scroll the panel when not all the elements fit on it.
        this.element.listen("wheel", (event) => {
            event.stopImmediatePropagation();
        }, { passive: true });

        // Local options, such as vertex and edge actions.
        const wrapper = new DOM.Div({ class: "wrapper" }).add_to(this.element);

        // The label.
        this.label_input = new DOM.Element("input", {
            class: "label-input",
            type: "text",
            disabled: true,
        });

        // Prevent propagation of scrolling when the cursor is over the label input.
        // This allows the user to scroll the label input text when not all the content fits.
        this.label_input.listen("wheel", (event) => {
            event.stopImmediatePropagation();
        }, { passive: true });

        // Prevent propagation of pointer events when interacting with the label input.
        this.label_input.listen(pointer_event("down"), (event) => {
            if (event.button === 0) {
                event.stopImmediatePropagation();
            }
        });

        // Handle label interaction: update the labels of the selected cells when
        // the input field is modified.
        this.label_input.listen("input", () => {
            if (!ui.in_mode(UIMode.Command)) {
                const selection = Array.from(ui.selection).filter((cell) => {
                    return cell.label !== this.label_input.element.value;
                });
                if (selection.length === 0) {
                    // It can happen that we receive an event (e.g. `inputType` `historyUndo`)
                    // that has no effect on any label. It is unclear whether this is the
                    // correct behaviour, but we must account for it in any case. In this case,
                    // we do not want to add a history event, as it would be idempotent.
                    return;
                }
                this.unqueue_selected(ui);
                ui.history.add_or_modify_previous(
                    ui,
                    ["label", ui.selection],
                    [{
                        kind: "label",
                        value: this.label_input.element.value,
                        cells: selection.map((cell) => ({
                            cell,
                            from: cell.label,
                            to: this.label_input.element.value,
                        })),
                    }],
                );
            } else {
                // We are jumping to a cell with the entered ID.
                let replaced
                    = this.label_input.element.value
                        // We are going to remove any `|` symbols in the next step, so it's safe
                        // to convert them to any other symbol that will be removed. Then we can use
                        // `|` as a placeholder for the position of the caret, which conveniently
                        // allows us to preserve the position when typing, even after modifying the
                        // input.
                        .replace(/\|/g, " ");
                replaced = replaced.slice(0, this.label_input.element.selectionStart) + "|"
                    + replaced.slice(this.label_input.element.selectionStart);
                switch (ui.mode.mode) {
                    case "Select":
                    case "Toggle":
                    case "Create":
                        replaced = replaced.replace(/[^ASDFJKLGHEIRUCM |]/gi, "");
                        break;
                    case "Source":
                    case "Target":
                        replaced = replaced.replace(/[^ASDFJKLGHEIRUCM|]/gi, "");
                        break;
                }
                // We allow the pattern " | " to appear, just in case the user does decide to go
                // back and insert a code (for whatever reason).
                replaced = replaced
                    .replace(/\s{2,}/g, " ")
                    .replace(/^\s+/, "")
                    .replace(/^\|\s*/, "|")
                    .toUpperCase();

                // While selecting cells, we keep the caret indicator "|" in `replaced`. This allows
                // us to only partially-select codes when we know the user is still typing that code
                // (i.e. the caret is immediately after it).

                const focused_cells = ui.element.query_selector_all(
                    ".cell kbd.focused, .cell kbd.partially-focused"
                );
                for (const element of focused_cells) {
                    element.class_list.remove("focused", "partially-focused");
                    // Only partially-focused cells need clearing.
                    element.clear();
                }
                const highlighted = new Set();
                for (let code of replaced.split(" ")) {
                    const in_progress = code.endsWith("|");
                    code = code.replace(/\|$/, "");
                    if (!highlighted.has(code)) {
                        const element = ui.element.query_selector(`kbd[data-code="${code}"]`);
                        if (element !== null) {
                            // element.class_list.add("focused");
                            // highlighted.add(code);
                            continue;
                        }
                    }
                    // If the user is in the process of typing a code, partially-select all the
                    // codes that it matches so far.
                    /*
                    if (in_progress) {
                        const matches_prefix
                            = ui.element.query_selector_all(`kbd[data-code^="${code}"]`);
                        for (const element of matches_prefix) {
                            element.class_list.add("partially-focused");
                            element.clear()
                                .add(new DOM.Element("span", { class: "focused" }).add(code))
                                .add(element.get_attribute("data-code").slice(code.length));
                        }
                    }
                    */
                }

                const caret = replaced.indexOf("|");
                replaced = replaced.replace("|", "");
                this.label_input.element.value = replaced;
                this.label_input.element.setSelectionRange(caret, caret);
            }
        }).listen("focus", () => {
            // Close the colour picker.
            ui.colour_picker.close();
        }).listen("blur", () => {
            if (!ui.in_mode(UIMode.Command)) {
                // As soon as the input is blurred, treat the label modification as
                // a discrete event, so if we modify again, we'll need to undo both
                // modifications to completely undo the label change.
                ui.history.permanentise();
            } else {
                ui.switch_mode(UIMode.default);
            }
        });

        const add_button = (title, label, key, action) => {
            const button
                = Panel.create_button_with_shortcut(ui, title, label, { key }, (event) => {
                    this.unqueue_selected(ui);
                    return action(event);
                });
            button.set_attributes({ disabled: true });
            button.add_to(wrapper);
        };

        // The button to reverse an edge.
        add_button("Reverse arrows", "⇌ Reverse", "r", () => {
            ui.history.add(ui, [{
                kind: "reverse",
                cells: ui.selection,
            }], true);
        });

        // The button to flip an edge.
        add_button("Flip arrows", "⥮ Flip", "e", () => {
            ui.history.add(ui, [{
                kind: "flip",
                cells: ui.selection,
            }], true);
        });

        // The button to flip a label.
        add_button("Flip labels", "⥮ Flip labels", "f", () => {
            ui.history.add(ui, [{
                kind: "flip labels",
                cells: ui.selection,
            }], true);
        });

        // The label alignment options.
        this.create_option_list(
            ui,
            wrapper,
            [
                ["left", "Left align label", "left", "v"],
                ["centre", "Centre align label (clear)", "centre", "c"],
                ["over", "Centre align label (over)", "over", "x"],
                ["right", "Right align label", "right"]
            ],
            "label_alignment",
            [],
            false, // `disabled`
            (edges, value) => {
                ui.history.add(ui, [{
                    kind: "label_alignment",
                    alignments: Array.from(ui.selection)
                        .filter(cell => cell.is_edge())
                        .map((edge) => ({
                            edge,
                            from: edge.options.label_alignment,
                            to: value,
                        })),
                }]);
                edges.forEach(edge => edge.options.label_alignment = value);
            },
            (data) => {
                // The length of the arrow.
                const ARROW_LENGTH = 28;
                return {
                    length: ARROW_LENGTH,
                    options: Edge.default_options({ label_alignment: data }),
                    draw_label: true,
                };
            },
        );

        // We'd rather use `input[type="range"]`, but unfortunately these do not support multiple
        // thumbs, which are necessary for the length slider. Therefore, we roll our own. (We could
        // just use a custom slider for multi-thumb settings, but by using them for all settings, we
        // ensure consistency of behaviour and styling.)
        const create_option_slider = (name, property, key, range) => {
            const { min, max, step = 1, thumbs = 1, spacing = 0 } = range;
            const slider = new DOM.Multislider(name, min, max, step, thumbs, spacing, {
                class: "disabled",
                "data-name": property,
            });

            slider.listen("input", () => {
                const value = slider.values();
                // Enact the effect of the slider.
                this.unqueue_selected(ui);
                ui.history.add_or_modify_previous(
                    ui,
                    [property, ui.selection],
                    [{
                        kind: property,
                        value,
                        cells: Array.from(ui.selection)
                            .filter(cell => cell.is_edge())
                            .map((edge) => ({
                                edge,
                                from: property !== "length" ? edge.options[property]
                                    : [
                                        edge.options.shorten.source,
                                        100 - edge.options.shorten.target
                                    ],
                                to: value,
                            })),
                    }],
                );
            });

            this.sliders.set(property, slider);

            // Allow sliders to be focused via the keyboard.
            ui.shortcuts.add([{ key }], () => {
                if (
                    !this.element.class_list.contains("hidden")
                    && !slider.class_list.contains("disabled")
                ) {
                    if (slider.class_list.contains("focused")) {
                        // Step through each of the thumbs until the last.
                        const next_thumb = slider.query_selector(".thumb.focused + .thumb");
                        slider.query_selector(".thumb.focused").class_list.remove("focused");
                        if (next_thumb !== null) {
                            next_thumb.class_list.add("focused");
                        } else {
                            slider.class_list.remove("focused");
                        }
                    } else {
                        this.defocus_inputs();
                        slider.class_list.add("focused");
                        slider.query_selector(".thumb").class_list.add("focused");
                    }
                }
            });

            delay(() => {
                slider.label
                    .add(new DOM.Element("kbd", { class: "hint slider" }).add(key.toUpperCase()));
            });

            return slider.label.add_to(wrapper);
        };

        // The label position (along the edge) slider.
        create_option_slider("Position", "label_position", "i", { min: 0, max: 100, step: 10 });

        // The offset slider.
        create_option_slider("Offset", "offset", "o", { min: -5, max: 5 });

        // The curve slider.
        create_option_slider("Curve", "curve", "k", { min: -5, max: 5 })
            .class_list.add("arrow-style");

        // The length slider, which affects `shorten`.
        create_option_slider("Length", "length", "l", {
            min: 0,
            max: 100,
            step: 10,
            thumbs: 2,
            spacing: 20,
        }).class_list.add("arrow-style");

        // Allow edges to be shortened symmetrically by holding shift.
        ui.shortcuts.add([{ key: "Shift", context: Shortcuts.SHORTCUT_PRIORITY.Always }], () => {
            this.sliders.get("length").class_list.add("symmetric");
        }, null, () => {
            this.sliders.get("length").class_list.remove("symmetric");
        });

        // The level slider. We limit to 3 for now because there are issues with pixel perfection
        // (especially for squiggly arrows, e.g. with their interaction with hooked tails) after 4,
        // and 3 seems a more consistent setting number with the other settings.. Besides, it's
        // unlikely people will want to draw diagrams involving 4- or 5-cells.
        const level_slider
            = create_option_slider("Level", "level", "m", { min: 1, max: 3 });
        level_slider.class_list.add("arrow-style");

        // The list of tail styles.
        // The lengths of the arrows to draw in the centre style buttons.
        const ARROW_LENGTH = 72; // The body styles.
        const SHORTER_ARROW_LENGTH = 48; // The edge styles.

        // To make selecting the arrow style button work as expected, we automatically
        // trigger the `"change"` event for the arrow style buttons. This in turn will
        // trigger `record_edge_style_change`, creating many unintentional history
        // actions. To avoid this, we prevent `record_edge_style_change` from taking
        // effect when it's already in progress using the `recording` flag.
        let recording = false;

        // Compute the difference in styling effected by `modify` and record the change in the
        // history.
        const record_edge_style_change = (modify) => {
            if (recording) {
                return;
            }
            recording = true;

            const clone = (x) => JSON.parse(JSON.stringify(x));
            const styles = new Map();
            for (const cell of ui.selection) {
                if (cell.is_edge()) {
                    styles.set(cell, clone(cell.options.style));
                }
            }

            modify();

            ui.history.add(ui, [{
                kind: "style",
                styles: Array.from(ui.selection)
                    .filter((cell) => cell.is_edge())
                    .map((edge) => ({
                        edge,
                        from: styles.get(edge),
                        to: clone(edge.options.style),
                    })),
            }]);

            recording = false;
        };

        // Trigger an efect that changes an edge style, optionally recording the change in the
        // history.
        const effect_edge_style_change = (record, modify) => {
            if (record) {
                record_edge_style_change(modify);
            } else {
                modify();
            }
        };

        // To each style for each component (tail, body, head), we associated a number, so the user
        // can select it from the keyboard.
        let key_index = 1;

        // See below for definition. We declare this here so that it is in scope for the
        // events below.
        let progress_style_selection;

        const update_style = (option_list, name) => {
            return (edges, _, data, user_triggered, idempotent) => {
                if (!idempotent) {
                    effect_edge_style_change(user_triggered, () => {
                        edges.forEach((edge) => edge.options.style[name] = data);
                    });
                }
                if (option_list.class_list.contains("focused")) {
                    progress_style_selection();
                } else {
                    this.defocus_inputs();
                }
            };
        };

        // The list of tail styles.
        const tail_styles = this.create_option_list(
            ui,
            wrapper,
            [
                ["mono", "Mono", { name: "mono"}, `${key_index++}`],
                ["none", "No tail", { name: "none" }, `${key_index++}`],
                ["maps to", "Maps to", { name: "maps to" }, `${key_index++}`],
                ["top-hook", "Top hook",
                    { name: "hook", side: "top" }, `${key_index++}`, ["short"]],
                ["bottom-hook", "Bottom hook",
                    { name: "hook", side: "bottom" }, `${key_index++}`, ["short"]],
                ["arrowhead", "Arrowhead", { name: "arrowhead"}, `${key_index++}`],
            ],
            "tail-type",
            ["vertical", "short", "arrow-style", "kbd-requires-focus"],
            true, // `disabled`
            (edges, _, data, user_triggered, idempotent) =>
                update_style(tail_styles, "tail")(edges, _, data, user_triggered, idempotent),
            (data) => ({
                length: 0,
                options: Edge.default_options(null, {
                    tail: data,
                    body: { name: "none" },
                    head: { name: "none" },
                }),
            }),
        );

        // The list of body styles.
        key_index = 1;
        const body_styles = this.create_option_list(
            ui,
            wrapper,
            [
                ["solid", "Solid", { name: "cell" }, `${key_index++}`],
                ["none", "No body", { name: "none" }, `${key_index++}`],
                ["dashed", "Dashed", { name: "dashed" }, `${key_index++}`],
                ["dotted", "Dotted", { name: "dotted" }, `${key_index++}`],
                ["squiggly", "Squiggly", { name: "squiggly" }, `${key_index++}`],
                ["barred", "Barred", { name: "barred" }, `${key_index++}`],
            ],
            "body-type",
            ["vertical", "arrow-style", "kbd-requires-focus"],
            true, // `disabled`
            (edges, _, data, user_triggered, idempotent) =>
                update_style(body_styles, "body")(edges, _, data, user_triggered, idempotent),
            (data) => ({
                length: ARROW_LENGTH,
                options: Edge.default_options(null, {
                    body: data,
                    head: { name: "none" },
                }),
            }),
        );

        // The list of head styles.
        key_index = 1;
        const head_styles = this.create_option_list(
            ui,
            wrapper,
            [
                ["arrowhead", "Arrowhead", { name: "arrowhead" }, `${key_index++}`],
                ["none", "No arrowhead", { name: "none" }, `${key_index++}`],
                ["epi", "Epi", { name: "epi"}, `${key_index++}`],
                ["top-harpoon", "Top harpoon",
                    { name: "harpoon", side: "top" }, `${key_index++}`, ["short"]],
                ["bottom-harpoon", "Bottom harpoon",
                    { name: "harpoon", side: "bottom" }, `${key_index++}`, ["short"]],
            ],
            "head-type",
            ["vertical", "short", "arrow-style", "kbd-requires-focus"],
            true, // `disabled`
            (edges, _, data, user_triggered, idempotent) =>
                update_style(head_styles, "head")(edges, _, data, user_triggered, idempotent),
            (data) => ({
                length: 0,
                options: Edge.default_options(null, {
                    head: data,
                    body: { name: "none" },
                }),
            }),
        );

        // The list of (non-arrow) edge styles.
        const edge_styles = this.create_option_list(
            ui,
            wrapper,
            [
                ["arrow", "Arrow", Edge.default_options().style, "a"],
                ["adjunction", "Adjunction", { name: "adjunction" }, "j"],
                ["corner", "Pullback / pushout", { name: "corner" }, "p"],
                ["corner-inverse", "Pullback / pushout", { name: "corner-inverse" }, "p"],
            ],
            "edge-type",
            ["large"],
            true, // `disabled`
            (edges, _, data, user_triggered) => {
                effect_edge_style_change(user_triggered, () => {
                    for (const edge of edges) {
                        // We reset `curve`, `level` and `length` for non-arrow edges, because that
                        // data isn't relevant to them. Otherwise, we set them to whatever the
                        // sliders are currently set to. This will preserve them under switching
                        // between arrow styles, because we don't reset the sliders when switching.
                        if (data.name !== "arrow") {
                            edge.options.curve = 0;
                            edge.options.level = 1;
                            edge.options.shorten = { source: 0, target: 0 };
                        } else if (edge.options.style.name !== "arrow") {
                            for (const property of ["curve", "level"]) {
                                edge.options[property] = this.sliders.get(property).values();
                            }
                            const [source, target] = this.sliders.get("length").values();
                            edge.options.shorten = { source, target: 100 - target };
                        }
                        // Update the edge style.
                        if (data.name !== "arrow" || edge.options.style.name !== "arrow") {
                            // The arrow is a special case, because it contains suboptions that we
                            // don't necessarily want to override. For example, if we have multiple
                            // edges selected, one of which is a non-default arrow and another which
                            // has a different style, clicking on the arrow option should not reset
                            // the style of the existing arrow.
                            edge.options.style = data;
                        }
                    }

                    // Enable/disable the arrow style buttons.
                    ui.element.query_selector_all(".arrow-style input")
                        .forEach((input) => input.element.disabled = data.name !== "arrow");
                    // Enable/disable the the curve, length, and level sliders.
                    for (const slider of ui.element.query_selector_all(".arrow-style .slider")) {
                        slider.class_list.toggle("disabled", data.name !== "arrow");
                    }

                    // If we've selected the `"arrow"` style, then we need to trigger the
                    // currently-checked buttons and the curve, length, and level sliders so that
                    // we get the expected style, rather than the default style.
                    if (data.name === "arrow") {
                        ui.element.query_selector_all('.arrow-style input[type="radio"]:checked')
                            .forEach((input) => input.dispatch(new Event("change")))
                    } else {
                        this.defocus_inputs();
                    }
                });
            },
            (data) => ({
                length: SHORTER_ARROW_LENGTH,
                options: Edge.default_options(null, data),
            }),
        );

        const corner_button = this.element
            .query_selector(`input[name="edge-type"][value="corner"]`);
        const corner_inverse_button = this.element
            .query_selector(`input[name="edge-type"][value="corner-inverse"]`);
        corner_inverse_button.class_list.add("hidden");

        // When the user clicks on the corner button, it alternates between `corner` and
        // `corner-inverse`.
        const alternate_buttons = [corner_button, corner_inverse_button];
        for (let i = 0; i < alternate_buttons.length; ++i) {
            const button = alternate_buttons[i];
            const next_button = alternate_buttons[(i + 1) % alternate_buttons.length];
            button.listen(pointer_event("up"), () => {
                if (button.element.checked) {
                    button.element.disabled = true;
                    next_button.element.disabled = false;
                    next_button.element.checked = true;
                    const event = new Event("change");
                    // We're abusing `triggered_by_shortcut` a little here.
                    event.triggered_by_shortcut = true;
                    next_button.dispatch(event);
                    delay(() => button.element.disabled = false);
                }
            });
            // The `change` event just triggers when a radio button is checked.
            button.listen("change", () => {
                if (next_button.class_list.contains("hidden")) {
                    // Allow the next button to receive keyboard events if we've just selected this
                    // body style. When either corner style is selected, then neither button is
                    // disabled to allow us to toggle between them by pressing `P`.
                    next_button.element.disabled = false;
                }
                next_button.class_list.add("hidden");
                button.class_list.remove("hidden");
                // Save the user's preference.
                ui.settings.set("diagram.var_corner", button === corner_inverse_button);
            });
        }

        // When any non-corner edge type is selected, we disable the edge type that is hidden, so
        // that the correct corner style will receive the keyboard event. A similar thing happens
        // in `Panel.update`.
        for (const edge_type_button of this.element.query_selector_all('input[name="edge-type"]')) {
            if (!alternate_buttons.find((button) => button.element === edge_type_button.element)) {
                edge_type_button.listen("change", () => {
                    for (const corner_button of alternate_buttons) {
                        corner_button.element.disabled
                            = corner_button.class_list.contains("hidden");
                    }
                });
            }
        }

        progress_style_selection = () => {
            /*
            const elements = [head_styles, body_styles, tail_styles];
            while (elements.length > 0) {
                const first = elements.pop();
                if (first.class_list.contains("focused")) {
                    first.class_list.remove("focused");
                    if (elements.length > 0) {
                        const second = elements.pop();
                        second.class_list.remove("next-to-focus");
                        second.class_list.add("focused");
                        if (elements.length > 0) {
                            const third = elements.pop();
                            third.class_list.add("next-to-focus");
                        }
                    } else {
                        tail_styles.class_list.add("next-to-focus");
                    }
                    return;
                }
            }
            this.defocus_inputs();
            // tail_styles.class_list.add("focused");
            tail_styles.class_list.remove("next-to-focus");
            body_styles.class_list.add("next-to-focus");
            */
        };

        // Handle the keyboard shortcuts for changing the arrow style.
        // "D" for "Design".
        ui.shortcuts.add([{ key: "D" }], () => {
            if (ui.selection_contains_edge()) {
                // We can only select an arrow style if that's the edge style that's actually
                // selected.
                if (edge_styles.query_selector(":checked").element.value !== "arrow") {
                    return;
                }
                progress_style_selection();
            }
        });

        delay(() => {
            for (const styles of [head_styles, body_styles, tail_styles]) {
                new DOM.Element("kbd", { class: "hint button triggers-focus" })
                    .add("D")
                    .add_to(styles);
            }
            tail_styles.class_list.add("next-to-focus");
        });

        // The colour indicator. Users can click on the indicator to open the colour picker.
        const shortcut = { key: "U" };
        const action = () => {
            ui.colour_picker.open_or_close(ui, ColourPicker.TARGET.Edge);
            ui.colour_picker.set_colour(ui, this.colour);
        };
        const colour_indicator = new DOM.Div({ class: "colour-indicator" })
            .listen("click", action);
        ui.shortcuts.add([shortcut], (event) => {
            if (!colour_indicator.class_list.contains("disabled")) {
                action(event);
            }
        });
        new DOM.Element("label").add("Colour: ").add(colour_indicator).add(
            new DOM.Element("kbd", { class: "hint colour" }).add(Shortcuts.name([shortcut]))
        ).add_to(wrapper);

        const display_export_pane = (format, modify = (output) => output) => {
            // Handle export button interaction: export the quiver.
            // If the user clicks on two different exports in a row
            // we will simply switch the displayed export format.
            // Clicking on the same button twice closes the panel.
            /*
            if (this.export === null || this.export.format !== format) {
                ui.switch_mode(new UIMode.Modal());

                // Get the encoding of the diagram. The output may be modified by the caller.
                const { data, metadata } = modify(ui.quiver.export(
                    format,
                    ui.settings,
                    ui.options(),
                    ui.definitions(),
                ));

                let export_pane, tip, warning, list, latex_options, embed_options, content;

                // Select the code for easy copying.
                const select_output = () => {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(content.element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                };

                const update_output = (data, prevent_defocus = false) => {
                    // At present, the data is always a string.
                    content.replace(data);
                    if (prevent_defocus) {
                        return;
                    }
                    select_output();
                    // Safari seems to occasionally fail to select the text immediately, so we
                    // also select it after a delay to ensure the text is selected.
                    delay(select_output);
                };

                if (this.export === null) {
                    // Create the export pane.
                    export_pane = new DOM.Div({ class: "export" });

                    // Prevent propagation of scrolling when the cursor is over the export pane.
                    // This allows the user to scroll the pane when not all the text fits on it.
                    export_pane.listen("wheel", (event) => {
                        event.stopImmediatePropagation();
                    }, { passive: true });

                    tip = new DOM.Element("span", { class: "tip hidden" });

                    // Create message regarding, and linking to, `quiver.sty`.
                    const update_package_previous_download = () => {
                        window.localStorage.setItem(
                            "package-previous-download",
                            CONSTANTS.PACKAGE_VERSION,
                        );
                        const update = tip.query_selector(".update");
                        if (update !== null) {
                            update.remove();
                        }
                    };

                    tip.add("Remember to include ")
                        .add(new DOM.Element("code").add("\\usepackage{quiver}"))
                        .add(" in your LaTeX preamble. You can ")
                        .add(
                            new DOM.Element("a", { href: "quiver.sty", download: "quiver.sty" })
                                .listen("click", update_package_previous_download)
                                .add("download ")
                                .add(new DOM.Element("code").add("quiver.sty"))
                        );
                    // Display an "updated" message if `quiver.sty` has been updated since the last
                    // time the user downloaded or opened it.
                    const package_previous_download = window.localStorage
                        .getItem("package-previous-download");
                    if (
                        !package_previous_download ||
                        package_previous_download !== CONSTANTS.PACKAGE_VERSION
                    ) {
                        tip.add(new DOM.Element("span", { class: "update" }).add("updated"));
                    }

                    tip.add(", or ")
                        .add(
                            new DOM.Element("a", {
                                // We would like to simply use `quiver.sty` here, but,
                                // unfortunately, GitHub pages does not permit overriding the
                                // `content-type` of a resource, and by default `.sty` files are
                                // treated as `application/octet-stream`.
                                href: "https://raw.githubusercontent.com/varkor/quiver/master/src/quiver.sty",
                                target: "_blank"
                            })
                            .listen("click", update_package_previous_download)
                            .add("open it in a new tab")
                        )
                        .add(" to copy-and-paste.")
                        .add_to(export_pane);

                    warning = new DOM.Element("span", { class: "warning hidden" })
                        .add("The exported tikz-cd diagram may not match the quiver diagram " +
                            "exactly, as tikz-cd does not support the following features that " +
                            "appear in this diagram:")
                        .add(list = new DOM.Element("ul"))
                        .add_to(export_pane);

                    const centre_checkbox = new DOM.Element("input", {
                        type: "checkbox",
                        "data-setting": "export.centre_diagram",
                    });
                    const ampersand_replacement = new DOM.Element("input", {
                        type: "checkbox",
                        "data-setting": "export.ampersand_replacement",
                    });
                    latex_options = new DOM.Div({ class: "options latex hidden" })
                        .add(new DOM.Element("label")
                            .add(centre_checkbox)
                            .add("Centre diagram")
                        )
                        .add(new DOM.Element("label")
                            .add(ampersand_replacement)
                            .add("Ampersand replacement")
                        )
                        .add_to(export_pane);

                    const fixed_size_checkbox = new DOM.Element("input", {
                        type: "checkbox",
                        "data-setting": "export.embed.fixed_size",
                    });
                    const embed_size = {
                        width: new DOM.Element("input", { type: "number", min: "0" }),
                        height: new DOM.Element("input", { type: "number", min: "0" }),
                    };
                    embed_options = new DOM.Div({ class: "options embed hidden" })
                        .add(new DOM.Element("label")
                            .add(fixed_size_checkbox)
                            .add("Fixed size")
                        )
                        .add(new DOM.Element("label").add("Width: ").add(embed_size.width))
                        .add(new DOM.Element("label").add("Height: ").add(embed_size.height))
                        .add_to(export_pane)

                    const checkboxes = [
                        [centre_checkbox, "tikz-cd", "C"],
                        [ampersand_replacement, "tikz-cd", "A"],
                        [fixed_size_checkbox, "html", "F"],
                    ];
                    const shortcuts = [];
                    for (const [checkbox, format, key] of checkboxes) {
                        // Add a keyboard shortcut if applicable.
                        if (key !== null) {
                            // When the shortcut is active, we will always be displaying the modal
                            // pane, so the shortcut is always valid.
                            const shortcut = { key, context: Shortcuts.SHORTCUT_PRIORITY.Always };
                            new DOM.Element("kbd", { class: "hint button" })
                                .add(Shortcuts.name([shortcut])).add_to(checkbox.parent);
                            shortcuts.push(ui.shortcuts.add([shortcut], () => {
                                const visible_options = export_pane.query_selector(".options:not(.hidden)");
                                if (visible_options !== null && visible_options.contains(checkbox)) {
                                    checkbox.element.checked = !checkbox.element.checked;
                                    checkbox.dispatch(new Event("change"));
                                }
                            }));
                        }
                        // Update the settings when the checkbox changes.
                        checkbox.listen("change", () => {
                            ui.settings.set(
                                checkbox.get_attribute("data-setting"),
                                checkbox.element.checked,
                            );
                            // Update the output. We ignore `metadata`, which currently does not
                            // change in response to the settings.
                            const { data } = modify(ui.quiver.export(
                                format,
                                ui.settings,
                                ui.options(),
                                ui.definitions(),
                            ));
                            update_output(data);
                        });
                        // Prevent the highlighted output from being deselected when changing a
                        // setting.
                        checkbox.listen(pointer_event("up"), (event) => event.preventDefault());
                    }

                    const update_embed_size = (dimension) => {
                        let value = parseFloat(embed_size[dimension].element.value);
                        if (Number.isNaN(value)) {
                            value = CONSTANTS.DEFAULT_EMBED_SIZE[dimension.toUpperCase()];
                        }
                        ui.settings.set(`export.embed.${dimension}`, value);
                        const { data } = modify(ui.quiver.export(
                            "html",
                            ui.settings,
                            ui.options(),
                            ui.definitions(),
                        ));
                        update_output(data, true);
                    };

                    for (const dimension of ["width", "height"]) {
                        const input = embed_size[dimension];
                        input.listen("input", () => update_embed_size(dimension));
                        // Only re-select the output text when we press Enter, so the inputs are
                        // not blurred whilst typing.
                        input.listen("keydown", (event) => {
                            if (event.key === "Enter") {
                                input.element.blur();
                                select_output();
                            }
                        });
                    }

                    content = new DOM.Div({ class: "code" }).add_to(export_pane);
                    ui.element.add(export_pane);

                    this.export = { shortcuts };
                } else {
                    // Find the existing export pane.
                    export_pane = ui.element.query_selector(".export");
                    tip = export_pane.query_selector(".tip");
                    warning = export_pane.query_selector(".warning");
                    list = export_pane.query_selector("ul");
                    latex_options = export_pane.query_selector(".options.latex");
                    embed_options = export_pane.query_selector(".options.embed");
                    content = export_pane.query_selector(".code");
                }
                // Display a warning if necessary.
                list.clear();
                const unsupported_items = format === "tikz-cd" ?
                    Array.from(metadata.tikz_incompatibilities).sort() : [];
                for (const [index, item] of unsupported_items.entries()) {
                    list.add(new DOM.Element("li")
                        .add(`${item}${index + 1 < unsupported_items.length ? ";" : "."}`)
                    );
                }
                tip.class_list.toggle("hidden", format !== "tikz-cd");
                warning.class_list.toggle("hidden", unsupported_items.length === 0);
                latex_options.class_list.toggle("hidden", format !== "tikz-cd");
                embed_options.class_list.toggle("hidden", format !== "html");

                for (const checkbox of export_pane.query_selector_all('input[type="checkbox"]')) {
                    if (ui.settings.get(checkbox.get_attribute("data-setting"))) {
                        checkbox.set_attributes({ checked: "" });
                    } else {
                        checkbox.remove_attributes("checked");
                    }
                }

                const [embed_width, embed_height] = embed_options
                    .query_selector_all('input[type="number"]');
                embed_width.element.value = ui.settings.get("export.embed.width");
                embed_height.element.value = ui.settings.get("export.embed.height");

                this.export.format = format;

                update_output(data);
                alert(data);
                // Disable cell data editing while the export pane is visible.
                this.update(ui);
            } else {
                this.dismiss_export_pane(ui);
            }
        */
        };

        // The export button.
        const export_to_latex = Panel.create_button_with_shortcut(
            ui,
            "LaTeX",
            "LaTeX",
            { key: "E", modifier: true, context: Shortcuts.SHORTCUT_PRIORITY.Always },
            () => display_export_pane("tikz-cd"),
        );

        this.global = new DOM.Div({ class: "panel global" }).add(
            new DOM.Element("label").add("Export: ")
        ).add(
            // The shareable link button.
            new DOM.Element("button").add("Shareable link")
                .listen("click", () => {
                    display_export_pane("base64");
                })
        ).add(
          // The embed button.
          new DOM.Element("button").add("Embed code")
              .listen("click", () => {
                  display_export_pane("html");
              })
        ).add(export_to_latex).add(
            new DOM.Div({ class: "indicator-container" }).add(
                new DOM.Element("label").add("Macros: ")
                    .add(
                        new DOM.Element("input", {
                            type: "text",
                            placeholder: "Paste URL here",
                        }).listen("wheel", (event) => {
                            event.stopImmediatePropagation();
                        }, { passive: true }).listen("keydown", (event, input) => {
                            if (event.key === "Enter") {
                                event.stopPropagation();
                                ui.load_macros_from_url(input.value);
                                input.blur();
                            }
                        }).listen("paste", (_, input) => {
                            delay(() => ui.load_macros_from_url(input.value));
                        })
                    ).add(
                        new DOM.Div({ class: "success-indicator" })
                    )
            )
        );

        // Prevent propagation of pointer events when interacting with the global options.
        this.global.listen(pointer_event("down"), (event) => {
            if (event.button === 0) {
                event.stopImmediatePropagation();
            }
        });
    }

    /// Creates a UI button with an associated keyboard shortcut.
    static create_button_with_shortcut(ui, title, label, shortcut, action) {
        const button = new DOM.Element("button", { title })
            .add(label)
            .listen("click", action);
        ui.shortcuts.add([shortcut], (event) => {
            if (!button.element.disabled) {
                action(event);
                Shortcuts.flash(button);
            }
        });
        delay(() => {
            button.add(
                new DOM.Element("kbd", { class: "hint button" }).add(Shortcuts.name([shortcut]))
            );
        });
        return button;
    }

    // A helper function for creating a list of radio inputs with backgrounds drawn based
    // on `draw_edge` with various arguments. This allows for easily customising edges
    // with visual feedback.
    create_option_list(
        ui,
        wrapper,
        entries,
        name,
        classes,
        disabled,
        on_check,
        properties,
    ) {
        const options_list = new DOM.Div({ class: "options" });
        options_list.class_list.add(...classes);

        const create_option = (value, tooltip, data) => {
            const button = new DOM.Element("input", {
                type: "radio",
                name,
                value,
                title: tooltip,
            }).listen("change", (event, button) => {
                if (button.checked) {
                    this.unqueue_selected(ui);
                    const selected_edges = Array.from(ui.selection).filter(cell => cell.is_edge());
                    on_check(
                        selected_edges,
                        value,
                        data,
                        event.isTrusted || event.triggered_by_shortcut,
                        event.idempotent || false,
                    );
                    for (const edge of selected_edges) {
                        edge.render(ui);
                    }
                }
            });
            button.element.disabled = disabled;
            options_list.add(button);

            // We're going to create background images for the label alignment buttons
            // representing each of the alignments. We do this by creating SVGs so that
            // the images are precisely right.
            // We create two background images per button: one for the `:checked` version
            // and one for the unchecked version.
            const backgrounds = [];

            let { length, options, draw_label } = properties(data);

            // We use a custom pre-drawn SVG for the pullback/pushout button.
            if (options.style.name.startsWith("corner")) {
                button.set_style({
                    "background-image": ["", "un"].map((prefix) => {
                        return `url("icons/${
                            options.style.name.endsWith("inverse") ? "var-" : ""
                        }pullback-${prefix}checked.svg")`;
                    }).join(", ")
                });
                return button;
            }

            // Usually heads are drawn with zero length, but for epimorphisms, we need to have some
            // length so that the two arrowheads are spaced out appropriately. Thus, in this case,
            // we add an extra `head_width` to make sure they display properly.
            if (options.style.head.name === "epi") {
                length += CONSTANTS.LINE_SPACING + CONSTANTS.STROKE_WIDTH;
            }

            const arrow = new Arrow(
                new Shape.Endpoint(Point.zero()),
                new Shape.Endpoint(new Point(length, 0)),
            );

            // The size of the label.
            const LABEL_SIZE = 12;
            // How much smaller the placeholder box in the label position should be.
            const LABEL_MARGIN = 2;
            if (draw_label) {
                arrow.label = new Label();
                arrow.label.size = new Dimensions(LABEL_SIZE, LABEL_SIZE);
            }

            UI.update_style(arrow, options);
            const svg = arrow.svg;
            svg.set_attributes({ xmlns: DOM.SVGElement.NAMESPACE });

            for (const colour of ["black", "grey"]) {
                arrow.style.colour = colour;
                arrow.redraw();
                // The `style` transforms the position of the arrow, which we don't want here,
                // where we're trying to automatically position the arrows in the centre of the
                // buttons.
                svg.remove_attributes("style");
                if (draw_label) {
                    arrow.label.element.set_style({
                        width: `${LABEL_SIZE - LABEL_MARGIN * 2}px`,
                        height: `${LABEL_SIZE - LABEL_MARGIN * 2}px`,
                        margin: `${LABEL_MARGIN}px`,
                        background: colour,
                    });
                }
                backgrounds.push(`url("data:image/svg+xml;utf8,${
                    encodeURIComponent(svg.element.outerHTML)}")`);
            }
            button.set_style({ "background-image": backgrounds.join(", ") });

            return button;
        };

        let i = 0;
        for (const [value, tooltip, data, key = null, classes = []] of entries) {
            const option = create_option(value, tooltip, data);
            option.class_list.add(...classes);
            if (key !== null) {
                ui.shortcuts.add([{ key }], () => {
                    const is_focused = options_list.class_list.contains("focused");
                    if (!option.element.disabled) {
                        if (!options_list.class_list.contains("kbd-requires-focus") || is_focused) {
                            // When the list is focused, we allow the user to choose checked
                            // options for convenience. Obviously this should have no effect in
                            // terms of triggering that option, but may progress a selection.
                            // We leave it to the caller to distinguish between these cases using
                            // `event.idempotent`.
                            if (!option.element.checked || is_focused) {
                                const event = new Event("change");
                                // Trigger history changes even though it wasn't initiated by a user
                                // click.
                                event.triggered_by_shortcut = true;
                                event.idempotent = option.element.checked;
                                option.element.checked = true;
                                option.dispatch(event);
                                Shortcuts.flash(option);
                                // Prevent other elements from being triggered by the same key
                                // press.
                                return true;
                            }
                        }
                    }
                    return false;
                });
                // JavaScript's scoping is messed up.
                delay(((i) => (() => {
                    if (option.class_list.contains("hidden")) {
                        // Currently only one option is hidden: that for the inverse corner style.
                        // It uses the same keyboard shortcut as the default corner style, so we
                        // don't need to display a shortcut for it.
                        return;
                    }

                    const left = options_list.class_list.contains("vertical")
                        ? ((i % 2 === 0 && classes.includes("short"))
                            ? option.element.offsetWidth : 0)
                        : option.element.offsetLeft;
                    options_list.add(new DOM.Element("kbd", { class: "hint button" }, {
                        left: `${left}px`,
                        top: `${option.element.offsetTop}px`,
                    }).add(Shortcuts.name([{ key }])));
                }))(i));
            }
            ++i;
        }

        options_list.query_selector(`input[name="${name}"]`).element.checked = true;

        wrapper.add(options_list);

        return options_list;
    }

    /// Render the TeX contained in the label of a cell.
    render_tex(ui, cell) {
        const label = cell.element.query_selector(".label");

        const update_label_transformation = () => {
            if (cell.is_edge()) {
                // Resize the bounding box for the label.
                // In Firefox, the bounding rectangle for the KaTeX element seems to be sporadically
                // available, unless we render the arrow *beforehand*.
                cell.render(ui);
                const bounding_rect = label.query_selector(".katex, .katex-error").bounding_rect();
                // The bounding rect is the size on-screen, which will hence be smaller if we are
                // zoomed out (and conversely if we are zoomed in). We therefore have to adjust the
                // dimensions (inversely) by the scaling factor.
                const scale = 2 ** -ui.scale;
                cell.arrow.label.size = new Dimensions(
                    bounding_rect.width * scale
                        + (bounding_rect.width > 0 ? CONSTANTS.EDGE_LABEL_PADDING * 2 : 0),
                    bounding_rect.height * scale
                        + (bounding_rect.height > 0 ? CONSTANTS.EDGE_LABEL_PADDING * 2 : 0),
                );
                // Rerender the edge with the new label.
                cell.render(ui);
            } else {
                cell.resize_content(ui, ui.resize_label(cell, label.element));

                // 1-cells take account of the dimensions of the cell label to be drawn snugly,
                // so if the label is resized, the edges need to be redrawn.
                for (const edge of ui.quiver.transitive_dependencies([cell], true)) {
                    edge.render(ui);
                }
            }
        };

        // Render the label with KaTeX.
        // Currently all errors are disabled, so we don't wrap this in a try-catch block.
        KaTeX.then((katex) => {
            katex.render(
                cell.label.replace(/\$/g, "\\$"),
                label.element,
                {
                    throwOnError: false,
                    errorColor: "hsl(0, 100%, 40%)",
                    macros: ui.latex_macros(),
                },
            );
            // KaTeX loads fonts as it needs them. After we call `render`, it will load the fonts it
            // needs if they haven't already been loaded, then render the LaTeX asynchronously. If
            // we calculate the label size immediately and the necessary fonts have not been loaded,
            // the calculated dimensions will be incorrect. Therefore, we need to wait until all
            // the fonts used in the document (i.e. the KaTeX-specific ones, which are the only
            // ones that may not have been loaded yet) have been loaded.
            document.fonts.ready.then(update_label_transformation);
        });
    };

    /// Update the panel state (i.e. enable/disable fields as relevant).
    update(ui) {
        const label_alignments = this.element.query_selector_all('input[name="label_alignment"]');

        // Multiple selection is always permitted, so the following code must provide sensible
        // behaviour for both single and multiple selections (including empty selections).
        const selection_contains_edge = ui.selection_contains_edge();

        // Modifying cells is not permitted when the export pane is visible.
        if (this.export === null) {
            // Default options (for when no edges/cells are selected). We only need to provide
            // defaults for inputs that display their state even when disabled.
            if (!selection_contains_edge) {
                this.label_input.element.value = "";
                this.element.query_selector(".colour-indicator").set_style({
                    background: Colour.black().css(),
                });
                for (const [property, slider] of this.sliders) {
                    let values = [0];
                    switch (property) {
                        case "label_position":
                            values = [50];
                            break;
                        case "length":
                            values = [0, 100];
                            break;
                        case "level":
                            values = [1];
                            break;
                    }
                    slider.thumbs.forEach((thumb, i) => {
                        thumb.set_value(values[i]);
                    });
                }
                if (ui.selection.size === 0) {
                    ui.element.query_selector(".label-input-container .colour-indicator")
                        .set_style({
                            background: Colour.black().css(),
                        });
                    ui.colour_picker.close();
                }
            }

            // Enable all the inputs iff we've selected at least one edge.
            this.element.query_selector_all('input:not([type="text"]), button')
                .forEach((input) => input.element.disabled = !selection_contains_edge);
            this.element.query_selector_all(".slider, .colour-indicator").forEach((element) => {
                element.class_list.toggle("disabled", !selection_contains_edge);
            });
            ui.element.query_selector(".label-input-container .colour-indicator")
                .class_list.toggle("disabled", ui.selection.size === 0);

            // Enable the label input if at least one cell has been selected.
            this.label_input.element.disabled = ui.selection.size === 0;
            if (this.label_input.element.disabled
                    && document.activeElement === this.label_input.element
            ) {
                // In Firefox, if the active element is disabled, then key
                // presses aren't registered, so we need to blur it manually.
                this.label_input.element.blur();
            }

            // A map from option names to values. If a value is `null`, that means that
            // there are multiple potential values, so we (in the case of radio buttons)
            // uncheck all such inputs or set them to an empty string (in the case of text
            // inputs).
            const values = new Map();
            let all_edges_are_arrows = selection_contains_edge;

            const consider = (name, value) => {
                const values_equal = (a, b) => {
                    if (typeof a === "object" && typeof b === "object") {
                        // This is good enough for our purposes. So far, the only object value is
                        // that for `length`.
                        return JSON.stringify(a) === JSON.stringify(b);
                    } else {
                        return a === b;
                    }
                }
                if (values.has(name) && !values_equal(values.get(name), value)) {
                    values.set(name, null);
                } else {
                    values.set(name, value);
                }
            };

            let [corners, inverse_corners] = [0, 0];

            // Collect the consistent and varying input values.
            for (const cell of ui.selection) {
                // Options applying to all cells. Technically, these are no longer under the
                // jurisdiction of `Panel` (though they were at one point). However, since we want
                // to use the same logic for these options as edge-specific options, it's convenient
                // to include them here.
                consider("{label}", cell.label);
                consider("{label_colour}", cell.label_colour);

                // Edge-specific options.
                if (cell.is_edge()) {
                    consider("label_alignment", cell.options.label_alignment);
                    // The label alignment buttons are rotated to reflect the direction of the arrow
                    // when all arrows have the same direction (at least to the nearest multiple of
                    // 90°). Otherwise, rotation defaults to 0°.
                    consider("{angle}", cell.angle());
                    consider("{label_position}", cell.options.label_position);
                    consider("{offset}", cell.options.offset);
                    consider("{curve}", cell.options.curve);
                    consider("{length}", cell.options.shorten);
                    consider("{level}", cell.options.level);
                    consider("edge-type", cell.options.style.name);
                    consider("{colour}", cell.options.colour);

                    // Arrow-specific options.
                    if (cell.options.style.name === "arrow") {
                        for (const component of ["tail", "body", "head"]) {
                            let value;
                            // The following makes the assumption that the distinguished names
                            // `cell`, `hook` and `harpoon` are unique, even between different
                            // components.
                            switch (cell.options.style[component].name) {
                                case "cell":
                                    value = "solid";
                                    break;
                                case "hook":
                                case "harpoon":
                                    value = `${
                                        cell.options.style[component].side
                                    }-${cell.options.style[component].name}`;
                                    break;
                                default:
                                    value = cell.options.style[component].name;
                                    break;
                            }

                            consider(`${component}-type`, value);
                        }
                    } else {
                        all_edges_are_arrows = false;
                        if (cell.options.style.name === "corner") {
                            ++corners;
                        }
                        if (cell.options.style.name === "corner-inverse") {
                            ++inverse_corners;
                        }
                    }
                }
            }

            const get_input = (name, value) => {
                return this.element.query_selector(`input[name="${name}"][value="${value}"]`);
            };

            // Fill the consistent values for the inputs, checking and unchecking
            // radio buttons as relevant.
            for (const [name, value] of values) {
                const property = name.slice(1, -1);
                switch (name) {
                    case "{label}":
                        if (value === null || this.label_input.element.value !== value) {
                            // Most browsers handle resetting an input value with the same value
                            // nicely. However, Safari will reset the caret to the end of the input,
                            // so we need to guard on the value actually changing.
                            this.label_input.element.value = value !== null ? value : "";
                        }
                        break;
                    case "{label_colour}":
                        // Default to black.
                        this.label_colour = value || Colour.black();
                        // If we're currently picking a colour, then changing the selection should
                        // update the colour picker value; otherwise, we just update the colour
                        // indicator in the panel.
                        if (ui.colour_picker.is_targeting(ColourPicker.TARGET.Label)) {
                            ui.colour_picker.set_colour(ui, this.label_colour);
                        } else {
                            ui.element.query_selector(".label-input-container .colour-indicator")
                                .set_style({
                                    background: this.label_colour.css(),
                                });
                        }
                        break;
                    case "{angle}":
                        const angle = value !== null ? value : 0;
                        for (const option of label_alignments) {
                            option.set_style({
                                transform: `rotate(${Math.round(2 * angle / Math.PI) * 90}deg)`
                            });
                        }
                        break;
                    case "{label_position}":
                        this.sliders.get(property).thumbs[0].set_value(value !== null ? value : 50);
                        break;
                    case "{offset}":
                    case "{curve}":
                    case "{level}":
                        this.sliders.get(property).thumbs[0].set_value(value !== null ? value : 0);
                        break;
                    case "{length}":
                        const thumbs = this.sliders.get("length").thumbs;
                        thumbs[0].set_value(value !== null ? value.source : 0);
                        thumbs[1].set_value(value !== null ? 100 - value.target : 100);
                        break;
                    case "{colour}":
                        // This case is analagous to `"{label_colour}"` above.
                        // Default to black.
                        this.colour = value || Colour.black();
                        // If we're currently picking a colour, then changing the selection should
                        // update the colour picker value; otherwise, we just update the colour
                        // indicator in the panel.
                        if (ui.colour_picker.is_targeting(ColourPicker.TARGET.Edge)) {
                            ui.colour_picker.set_colour(ui, this.colour);
                        } else {
                            this.element.query_selector(".colour-indicator").set_style({
                                background: this.colour.css(),
                            });
                        }
                        break;
                    default:
                        this.element.query_selector_all(
                            `input[name="${name}"]:checked`
                        ).forEach((input) => input.element.checked = false);
                        // If there are multiple selected values, we don't check any input.
                        if (value !== null) {
                            // Check any input for which there is a canonical choice of value.
                            const selected_input = get_input(name, value);
                            // `selected_input` will never be `null`, unless we have loaded a
                            // diagram with an option we do not support in the current version of
                            // quiver. This ought not to happen in practice, as users will typically
                            // be using the latest version of quiver.
                            if (selected_input !== null) {
                                selected_input.element.checked = true;
                            }
                        }
                        break;
                }
            }

            // If the arrow edge type isn't selected, we select the (disabled) default tail, body,
            // and head styles. This means that when the arrow edge type option is selected, the
            // default arrow style will be selected, rather than whatever was last selected by the
            // user.
            if (!get_input("edge-type", "arrow").element.checked) {
                get_input("tail-type", "none").element.checked = true;
                get_input("body-type", "solid").element.checked = true;
                get_input("head-type", "arrowhead").element.checked = true;
            }

            // Display the relevant pullback/pushout button.
            const corner_button = this.element
                .query_selector(`input[name="edge-type"][value="corner"]`);
            const corner_inverse_button = this.element
                .query_selector(`input[name="edge-type"][value="corner-inverse"]`);
            let [reveal, hide] = [corner_button, corner_inverse_button];
            if (
                inverse_corners > corners
                    || inverse_corners >= corners
                        // Pick the user's preference if there isn't a clear choice.
                        && ui.settings.get("diagram.var_corner")
            ) {
                [reveal, hide] = [corner_inverse_button, corner_button];
            }
            reveal.class_list.remove("hidden");
            hide.class_list.add("hidden");
            reveal.element.disabled = false;
            // When we press `P` when neither corner style is selected, we want to select the
            // style that is currently visible. However, both have event listeners and so the
            // default style will take priority, unless we disable it initially. It is only
            // disabled while neither style is selected (because the hidden inputs must
            // receive keyboard events to toggle between the two styles).
            hide.element.disabled = !reveal.element.checked;

            // Enable/disable the arrow style buttons.
            for (const input of this.element.query_selector_all(".arrow-style input")) {
                input.element.disabled = !all_edges_are_arrows;
            }
            // Enable/disable the the curve, length, and level sliders.
            for (const slider of this.element.query_selector_all(".arrow-style .slider")) {
                slider.class_list.toggle("disabled", !all_edges_are_arrows);
            }

            // Enable all inputs in the global section of the panel.
            this.global.query_selector_all(`input[type="text"]`).forEach((input) => {
                input.element.disabled = false;
            });
        } else {
            // Disable all the inputs.
            this.element.query_selector_all("input, button")
                .forEach((input) => input.element.disabled = true);
            // Disable the macro input.
            this.global.query_selector_all('input[type="text"]')
                .forEach((input) => input.element.disabled = true);
        }
    }

    /// Hide the panel off-screen.
    hide(ui) {
        if (ui.colour_picker.is_targeting(ColourPicker.TARGET.Edge)) {
            ui.colour_picker.close();
        }
        this.element.class_list.add("hidden");
        this.defocus_inputs();
    }

    /// Hide the panel and label input if no relevant cells are selected.
    hide_if_unselected(ui) {
        if (!ui.selection_contains_edge()) {
            this.hide(ui);
        }
        if (ui.selection.size === 0) {
            this.label_input.parent.class_list.add("hidden");
            ui.colour_picker.close();
        }
    }

    /// Focuses and selects all the text in the label input.
    focus_label_input() {
        const input = this.label_input.element;
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }

    /// Defocuses any elements that have been focused via the keyboard.
    defocus_inputs() {
        for (const element of this.element.query_selector_all(".focused")) {
            element.class_list.remove("focused");
        }
        const next_to_focus = this.element.query_selector(".next-to-focus");
        if (next_to_focus !== null) {
            next_to_focus.class_list.remove("next-to-focus");
        }
        this.element.query_selector(".kbd-requires-focus").class_list.add("next-to-focus");
    }

    /// Unqueue any selected cell, typically after a user action affecting the cells in the
    /// selection.
    unqueue_selected(ui) {
        for (const element of ui.element.query_selector_all(".cell.selected kbd.queue")) {
            element.class_list.remove("queue");
        }
    }

    /// Centre the panel vertically.
    update_position() {
        const panel_height
            = this.element.query_selector(".wrapper").bounding_rect().height;
        const document_height = document.body.offsetHeight;
        const top_offset = Math.max(document_height - panel_height - 16 * 2, 0) / 2;
        this.element.set_style({ "margin-top": `${top_offset}px`});
    }

    /// Dismiss the export pane, if it is shown.
    dismiss_export_pane(ui) {
        if (this.export !== null) {
            ui.element.query_selector(".export").remove();
            for (const id of this.export.shortcuts) {
                ui.shortcuts.remove(id);
            }
            this.export = null;
            ui.switch_mode(UIMode.default);
            this.update(ui);
            return true;
        }
        return false;
    }

    /// Adjust the value of any selected sliders.
    modify_sliders(delta) {
        let any_focused = false;
        for (const slider of this.sliders.values()) {
            if (slider.class_list.contains("focused")) {
                const thumb = slider.thumbs.find((thumb) => thumb.class_list.contains("focused"));
                thumb.set_value(thumb.value + slider.step * delta, true);
                if (slider.class_list.contains("symmetric")) {
                    thumb.symmetrise();
                }
                any_focused = true;
            }
        }
        return any_focused;
    }
}

/// The handler for keyboard shortcuts. This handles just the control flow, and not the physical
/// buttons triggering any shortcuts.
class Shortcuts {
    constructor(ui) {
        // A map from keys to the shortcuts to which they correspond.
        this.shortcuts = new Map();

        // An identifier for shortcuts, used to allow the caller to delete shortcuts.
        this.next_id = 0;

        // Handle global key presses (such as, but not exclusively limited to, keyboard shortcuts).
        const handle_shortcut = (type, event) => {
            // Ignore everything in embedded mode.
            if (ui.in_mode(UIMode.Embedded)) {
                return;
            }

            // Many keyboard shortcuts are only relevant when we're not midway
            // through typing in an input, which should capture key presses.
            const editing_input = ui.input_is_active();

            // On Mac OS X, holding the Command key seems to override the usual capitalisation
            // modifier that holding Shift does. This is inconsistent with other operating systems,
            // so we override it manually here.
            const key = event.key.toLowerCase();

            if (this.shortcuts.has(key)) {
                for (const shortcut of this.shortcuts.get(key)) {
                    if (
                        (shortcut.shift === null || event.shiftKey === shortcut.shift
                            || (key === "shift" && event.shiftKey === (type === "keydown")))
                            && (shortcut.modifier === null
                                || (event.metaKey || event.ctrlKey) === shortcut.modifier
                                || ["control", "meta"].includes(key))
                    ) {
                        const effect = () => {
                            let prevent_others = false;
                            // Trigger the shortcut effect.
                            const action = shortcut[{ keydown: "action", keyup: "unaction" }[type]];
                            if (action !== null) {
                                // Only trigger the action if the associated button is not
                                // disabled.
                                if (shortcut.button === null || !shortcut.button.element.disabled) {
                                    prevent_others = action(event);
                                }
                                if (shortcut.button !== null) {
                                    // The button might be disabled by `action`, but we still want
                                    // to trigger the visual indication if it was enabled when
                                    // activated.
                                    if (!shortcut.button.element.disabled) {
                                        // Give some visual indication that the action has
                                        // been triggered.
                                        Shortcuts.flash(shortcut.button);
                                    }
                                }
                            }
                            return prevent_others;
                        };

                        if (!editing_input && !ui.in_mode(UIMode.Modal)
                            || shortcut.context === Shortcuts.SHORTCUT_PRIORITY.Always)
                        {
                            event.preventDefault();
                            if (effect()) {
                                break;
                            }
                        } else if (!ui.in_mode(UIMode.Modal) && type === "keydown") {
                            // If we were editing an input, and the keyboard shortcut doesn't
                            // trigger in that case, then if the keyboard shortcut is deemed
                            // to have had no effect on the input, we either:
                            // (a) Trigger the keyboard shortcut effect (if the `context` is
                            //     `Defer`).
                            // (b) Trigger an animation on the input, to signal to the
                            //     user that the input is the one receiving the keyboard
                            //     shortcut.
                            const input = document.activeElement;
                            const [value, selectionStart, selectionEnd]
                                = [input.value, input.selectionStart,  input.selectionEnd];
                            setTimeout(() => {
                                if (input.value === value
                                    && input.selectionStart === selectionStart
                                    && input.selectionEnd === selectionEnd)
                                {
                                    if (shortcut.context === Shortcuts.SHORTCUT_PRIORITY.Defer) {
                                        effect();
                                    } else {
                                        // Give some visual indication that the input stole the
                                        // keyboard focus.
                                        Shortcuts.flash(new DOM.Element(input));
                                    }
                                }
                            }, 8);
                        }
                    }
                }
            }
        };

        // Handle global key presses and releases.
        for (const type of ["keydown", "keyup"]) {
            document.addEventListener(type, (event) => {
                handle_shortcut(type, event);
            });
        }
    }

    // Associate an action to a keyboard shortcut. Multiple shortcuts can be associated to a single
    // action, making it easier to facilitate different keyboard layouts.
    add(combinations, action, button = null, unaction = null) {
        for (const shortcut of combinations) {
            // We prefer to be case-insensitive due to differences in OS behaviour (see comment
            // above).
            const key = shortcut.key.toLowerCase();
            if (!this.shortcuts.has(key)) {
                this.shortcuts.set(key, []);
            }
            this.shortcuts.get(key).push({
                id: this.next_id,
                // `null` means we don't care about whether the modifier key
                // is pressed or not, so we need to special case it.
                modifier: shortcut.modifier !== null ? (shortcut.modifier || false) : null,
                shift: shortcut.shift !== null ? (shortcut.shift || false) : null,
                // The function to call when the shortcut is triggered.
                action,
                // The function to call (if any) when the shortcut is released.
                unaction,
                context: shortcut.context || Shortcuts.SHORTCUT_PRIORITY.Conservative,
                button,
            });
        }
        return this.next_id++;
    }

    // Remove all actions associated to a shortcut ID.
    remove(id) {
        for (const [key, shortcuts] of this.shortcuts) {
            this.shortcuts.set(key, shortcuts.filter((shortcut) => shortcut.id !== id));
        }
    }

    /// Returns whether this is likely to be an Apple platform or not, which determines what style
    /// of keyboard shortcut we will display.
    static is_Apple_platform() {
        return /^(Mac|iPhone|iPod|iPad)/.test(navigator.platform);
    }

    /// Returns the names of each of the keys involved in the key combinations. This is not intended
    /// to be called directly, but instead by `name` and `element`.
    static components(combinations) {
        // By default, we display "Ctrl" and "Shift" as modifier keys, as most
        // operating systems use this to initiate keyboard shortcuts. For Mac
        // and iOS, we switch to displaying "⌘" and "⇧". However, both keys
        // (on any operating system) work with the shortcuts: this is simply
        // used to work out what to display.
        const is_Apple_platform = Shortcuts.is_Apple_platform();

        const shortcuts_keys = [];
        for (const shortcut of combinations) {
            // Format the keyboard shortcut to make it discoverable in the toolbar.
            let key = shortcut.key;
            if (/^[a-z]$/.test(key)) {
                // Upper case any letter key.
                key = key.toUpperCase();
            }
            const symbols = {
                Backspace: "⌫",
                Tab: "⇥",
                Enter: "↵",
                Shift: "⇧",
                Escape: "esc",
                " ": "        ",
                ArrowLeft: "←",
                ArrowDown: "↓",
                ArrowRight: "→",
                ArrowUp: "↑",
                Delete: "del",
                Control: "ctrl",
                Alt: "alt",
            };
            key = symbols[key] || key;
            const shortcut_keys = [key];
            if (shortcut.modifier) {
                shortcut_keys.unshift(is_Apple_platform ? "⌘" : "ctrl");
            }
            if (shortcut.shift) {
                shortcut_keys.unshift(is_Apple_platform ? "⇧" : "shift");
            }
            shortcuts_keys.push(shortcut_keys);
        }

        return shortcuts_keys;
    }

    /// Fills `element` with a series of `kbd` elements, representing the key combinations.
    static element(element, combinations) {
        const components = Shortcuts.components(combinations);
        for (let i = 0; i < components.length; ++i) {
            for (const key of components[i]) {
                element.add(new DOM.Element("kbd").add(key));
            }
            if (i + 1 < components.length) {
                element.add(",");
            }
        }
        return element;
    }

    /// Return the name of a keyboard shortcut, to display to the user.
    static name(combinations) {
        const components = Shortcuts.components(combinations);
        return components.map((shortcut_keys) => {
            return shortcut_keys.join(Shortcuts.is_Apple_platform() ? "" : "+");
        }).slice(0, 1).join("/");
    }

    /// Trigger a "flash" animation on an element, typically in response to its corresponding
    /// keyboard shortcut being triggered.
    static flash(button) {
        button.class_list.remove("flash");
        // Removing a class and instantly adding it again is going to be ignored by
        // the browser, so we need to trigger a reflow to get the animation to
        // retrigger.
        void button.element.offsetWidth;
        button.class_list.add("flash");
    }
}

/// Defines the contexts in which a keyboard shortcut may trigger.
Shortcuts.SHORTCUT_PRIORITY = new Enum(
    "SHORTCUT_PRIORITY",
    // Triggers whenever the keyboard shortcut is held.
    "Always",
    // Triggers when an input is not focused, or if the shortcut
    // has no effect on the input.
    "Defer",
    // Triggers when an input is not focused.
    "Conservative",
);

/// The toolbar, providing shortcuts to useful actions. This handles both the physical
/// toolbar buttons and the keyboard shortcuts.
class Toolbar {
    constructor() {}

    initialise(ui) {}

    /// Update the toolbar (e.g. enabling or disabling buttons based on UI mode).
    update(ui) {}
}

/// The colour wheel and colour picker.
class ColourPicker {
    constructor() {
        // The pop up colour panel, with the colour wheel and colour picker.
        this.element = null;

        // The current colour displayed by the colour wheel.
        this.colour = Colour.black();

        // Whether we are selecting a colour for a `ColourPicker.TARGET`.
        this.target = null;

        // We memoise the colour wheel images (for each lightness level), so we don't have to
        // continually recompute them. There may be more efficient ways to do this with a little
        // more thought about the HSL and RGB colour models, but this is a simple solution for now.
        this.colour_wheels = new Map();

        // The sliders, which we store in a map so we retain access to the `DOM.Multislider`
        // elements, similarly to in `Panel`.
        this.sliders = new Map();
    }

    initialise(ui) {}

    /// Open the colour picker with a specified `target` if the colour picker is hidden; change it
    /// its target if it does not match `target` but is currently open; or close it otherwise.
    open_or_close(ui, target) {}

    /// Close the colour picker.
    close() {
        this.element.class_list.add("hidden");
        this.target = null;
    }

    /// Sets the colour of the selected labels or edges to the given colour.
    set_selection_colour(ui, colour) {}

    /// Set the colour of the colour picker to a given colour.
    set_colour(ui, colour) {}

    is_targeting(target) {
        return !this.element.class_list.contains("hidden") && this.target === target;
    }

    set_colours_in_palette_group(ui, group, colours) {}

    /// Update the LaTeX colour palette group from `UI.colours`.
    update_latex_colours(ui) {}

    /// Update the diagram colour palette group.
    update_diagram_colours(ui) {
        // Rather than keep track of the current colours in the diagram, which would be most
        // efficient, but also involve a fair deal of book-keeping, we instead simply iterate
        // through all the cells and collect their colours every time that the diagram changes (i.e.
        // whenever a cell is added or removed, or a colour is changed). Even for large diagrams,
        // this ought to be fast.
        
    }
}

/// What property is the focus of the colour picker.
ColourPicker.TARGET = new Enum(
    "TARGET",
    // The cell label.
    "Label",
    // The edge label.
    "Edge",
);

/// An k-cell (such as a vertex or edge). This object represents both the
/// abstract properties of the cell as well as their HTML representation.
class Cell {
    constructor(quiver, level, label = "", label_colour = Colour.black()) {
        // The k for which this cell is an k-cell.
        this.level = level;

        // The label with which the vertex or edge is annotated.
        this.label = label;

        // The colour of the label (hue, saturation, lightness, alpha).
        this.label_colour = label_colour;

        // An ID used to allow the user to jump to this cell via the keyboard.
        this.code = "";
        const chars = "ASDFJKLGHEIRUCM".split("");
        for (let value = Cell.NEXT_ID++; value >= 0; value = Math.floor(value / chars.length) - 1) {
            this.code = chars[value % chars.length] + this.code;
        }

        // Add this cell to the quiver.
        quiver.add(this);

        // Elements are specialised depending on whether the cell is a vertex (0-cell) or edge.
        this.element = null;
    }

    /// Set up the cell's element with interaction events.
    initialise(ui) {
        this.element.class_list.add("cell");

        const content_element = this.content_element;

        // Set the label colour.
        

        // For cells with a separate `content_element`, we allow the cell to be moved
        // by dragging its `element` (under the assumption it doesn't totally overlap
        // its `content_element`). For now, these are precisely the vertices.
        // We allow vertices to be moved by dragging its `element` (which contains its
        // `content_element`, the element with the actual cell content).
        if (this.is_vertex()) {
            this.element.listen(pointer_event("down"), (event) => {
                if (event.button === 0) {
                    if (ui.in_mode(UIMode.Default)) {
                        event.stopPropagation();
                        ui.focus_point.class_list.remove(
                            "revealed", "pending", "active", "focused", "smooth"
                        );
                        const vertices = Array.from(ui.selection).filter((cell) => cell.is_vertex());
                        // If the cell we're dragging is part of the existing selection,
                        // then we'll move every cell that is selected. However, if it's
                        // not already part of the selection, we'll just drag this cell
                        // and ignore the selection.
                        const move = new Set(ui.selection.has(this) ? vertices : [this]);
                        ui.switch_mode(
                            new UIMode.PointerMove(
                                ui,
                                ui.position_from_event(event),
                                move,
                            ),
                        );
                    }
                }
            });
        } else {
            // Vertices have custom handling for adding `kbd`, but it's more convenient to handle
            // edges here.
            // The identifier that notifies the user how to jump to this cell.
            ui.codes.set(this.code, this);
            this.element.add(new DOM.Element("kbd", {
                "data-code": this.code,
                class: "hint queue",
            }));
        }

        // We record whether a cell was already selected when we click on it, because
        // we only want to trigger a label input focus if we click on a cell that is
        // already selected. Clicking on an unselected cell should not focus the input,
        // or we wouldn't be able to immediately delete a cell with Backspace/Delete,
        // as the input field would capture it.
        // let was_previously_selected = true;

        // Add the cell to the UI canvas.
        ui.add_cell(this);
    }

    /// The main element of interaction for the cell. Not necessarily `this.element`, as children
    /// may override this getter.
    get content_element() {
        return this.element;
    }

    /// Whether this cell is an edge (i.e. whether its level is equal to zero).
    is_vertex() {
        return this.level === 0;
    }

    /// Whether this cell is an edge (i.e. whether its level is nonzero).
    is_edge() {
        return this.level > 0;
    }

    select() {
        this.element.class_list.add("selected");
    }

    deselect() {
        this.element.class_list.remove("selected");
    }

    size() {
        if (this.is_vertex()) {
            const label = this.element.query_selector(".label");
            return new Dimensions(label.element.offsetWidth, label.element.offsetHeight);
        } else {
            return Dimensions.zero();
        }
    }
}

// We use an ID system for cells, so that we have an identifier that the user can jump to.
Cell.NEXT_ID = 0;

/// 0-cells, or vertices. This is primarily specialised in its set up of HTML elements.
class Vertex extends Cell {
    constructor(ui, label, position, label_colour = Colour.black()) {
        super(ui.quiver, 0, label, label_colour);

        this.position = position;
        // The shape data is going to be overwritten immediately, so really this information is
        // unimportant.
        this.shape = new Shape.RoundedRect(
            Point.zero(),
            new Dimensions(ui.default_cell_size / 2, ui.default_cell_size / 2),
            ui.default_cell_size / 8,
        );

        this.render(ui);
        super.initialise(ui);
    }

    get content_element() {
        if (this.element !== null) {
            return this.element.query_selector(".content");
        } else {
            return null;
        }
    }

    /// Changes the vertex's position.
    /// This helper method ensures that column and row sizes are updated automatically.
    set_position(ui, position) {
        ui.cell_width_constraints.get(this.position.x).delete(this);
        ui.cell_height_constraints.get(this.position.y).delete(this);
        this.position = position;
        this.shape.origin = ui.centre_offset_from_position(this.position);
    }

    /// Create the HTML element associated with the vertex.
    render(ui) {
        const construct = this.element === null;

        // The container for the cell.
        if (construct) {
            this.element = new DOM.Div();
        }

        // Position the vertex.
        const offset = ui.offset_from_position(this.position);
        this.element.set_style({
            left: `${offset.x}px`,
            top: `${offset.y}px`,
        });
        const centre_offset = offset.add(ui.cell_centre_at_position(this.position));
        this.shape.origin = centre_offset;
        // Shape width is controlled elsewhere.

        // Resize according to the grid cell.
        const cell_width = ui.cell_size(ui.cell_width, this.position.x);
        const cell_height = ui.cell_size(ui.cell_height, this.position.y);
        this.element.set_style({
            width: `${cell_width}px`,
            height: `${cell_height}px`,
        });

        if (construct) {
            this.element.class_list.add("vertex");

            ui.codes.set(this.code, this);
            // The cell content (containing the label).
            new DOM.Div({ class: "content" })
                .add(new DOM.Div({ class: "label" }))
                // The identifier that notifies the user how to jump to this cell.
                .add(new DOM.Element("kbd", {
                    "data-code": this.code,
                    class: "hint queue",
                }))
                .add_to(this.element);
        }

        // Resize the content according to the grid cell. This is just the default size: it will be
        // updated by `render_tex`.
        this.content_element.set_style({
            width: `${ui.default_cell_size / 2}px`,
            height: `${ui.default_cell_size / 2}px`,
            left: `${cell_width / 2}px`,
            top: `${cell_height / 2}px`,
        });

        if (construct) {
            ui.panel.render_tex(ui, this);
        } else {
            // The vertex may have moved, in which case we need to update the size of the grid cell
            // in which the vertex now lives, as the grid cell may now need to be resized.
            this.recalculate_size(ui);
        }
    }

    /// Calculates the size of the vertex and updates the grid accordingly. This should be called
    /// whenever the size or position may have changed.
    recalculate_size(ui) {
        const label = this.element.query_selector(".label");
        const { offsetWidth, offsetHeight } = label.element;
        ui.update_cell_size(this, offsetWidth, offsetHeight);
        this.resize_content(ui, [offsetWidth, offsetHeight]);
    }

    /// Get the size of the cell content.
    content_size(ui, sizes) {
        const [width, height] = sizes;
        return new Dimensions(
            Math.max(ui.default_cell_size / 2, width + CONSTANTS.CONTENT_PADDING * 2),
            Math.max(ui.default_cell_size / 2, height + CONSTANTS.CONTENT_PADDING * 2),
        );
    }

    /// Resize the cell content to match the label width.
    resize_content(ui, sizes) {
        const size = this.content_size(ui, sizes);
        this.content_element.set_style({
            width: `${size.width}px`,
            height: `${size.height}px`,
        });
        this.shape.size = size;
    }
}

/// k-cells (for k > 0), or edges. This is primarily specialised in its set up of HTML elements.
class Edge extends Cell {
    constructor(ui, label = "", source, target, options, label_colour) {
        super(ui.quiver, Math.max(source.level, target.level) + 1, label, label_colour);

        this.options = Edge.default_options(Object.assign({ level: this.level }, options));

        this.arrow = new Arrow(source.shape, target.shape, new ArrowStyle(), new Label());
        this.element = this.arrow.element;

        // `this.shape` is used for the source/target from (higher) cells connected to this one.
        // This is located at the centre of the arrow (it will be updated in `render`).
        this.shape = new Shape.Endpoint(Point.zero());

        this.reconnect(ui, source, target);

        this.initialise(ui);
    }

    /// A set of defaults for edge options: a basic arrow (→).
    static default_options(properties = null, style = null) {
        const options = {
            label_alignment: "left",
            label_position: 50,
            offset: 0,
            curve: 0,
            shorten: { source: 0, target: 0 },
            level: 1,
            colour: Colour.black(),
            // For historical reasons, the following options are in a `style` subobject. Originally,
            // these were those pertaining to the edge style. However, options such as `curve` and
            // `level` also pertain to the edge style (and can only be set for arrows), but are not
            // placed in `style`. It would be possible to refactor this data structure, but it's
            // inconvenient, as we would still need to maintain support for the old data structure
            // anyway.
            style: {
                name: "arrow",
                tail: { name: "none" },
                body: { name: "cell" },
                head: { name: "arrowhead" },
            },
        };

        // Copy values in `properties` and `style` into `options`.
        const deep_assign = (target, source) => {
            if (typeof source === "undefined" || source === null) {
                return;
            }

            for (const [key, value] of Object.entries(source)) {
                if (typeof value === "object") {
                    target[key] = target[key] || {};
                    deep_assign(target[key], value);
                } else {
                    target[key] = value;
                }
            }
        };

        deep_assign(options, properties);
        deep_assign(options.style, style);

        return options;
    }

    initialise(ui) {
        super.initialise(ui);

        // We allow users to reconnect edges to different cells by dragging their endpoint handles.
        const reconnect = (event, end) => {
            event.stopPropagation();
            event.preventDefault();
            // We don't get the default blur behaviour here, as we've prevented it, so we have to do
            // it ourselves.
            ui.panel.label_input.element.blur();
            ui.focus_point.class_list.remove("focused", "smooth");

            const fixed = { source: this.target, target: this.source }[end];
            ui.switch_mode(new UIMode.Connect(ui, fixed, false, {
                end,
                edge: this,
            }));
        };

        // Set up the endpoint handle interaction events.
        for (const end of ["source", "target"]) {
            const handle = this.arrow.element.query_selector(`.arrow-endpoint.${end}`);
            handle.listen(pointer_event("down"), (event) => {
                if (event.button === 0) {
                    reconnect(event, end);
                }
            });
        }

        ui.panel.render_tex(ui, this);
    }

    /// Create the HTML element associated with the edge.
    /// Note that `render_tex` triggers redrawing the edge, rather than the other way around.
    render(ui, pointer_offset = null) {
        // If we're reconnecting an edge, then we vary its source/target (depending on
        // which is being dragged) depending on the pointer position.
        let fixed_endpoints = true;
        if (pointer_offset !== null) {
            if (ui.mode.target !== null) {
                // In this case, we're hovering over another cell.
                this.arrow[ui.mode.reconnect.end] = ui.mode.target.shape;
            } else {
                // In this case, we're not hovering over another cell.
                // Usually we offset edge endpoints from the cells to which they are connected,
                // but when we are dragging an endpoint, we want to draw it right up to the pointer.
                this.arrow[ui.mode.reconnect.end] = new Shape.Endpoint(pointer_offset);
                fixed_endpoints = false;
            }
        }

        UI.update_style(this.arrow, this.options);
        this.arrow.redraw();

        // Safari has a longstanding bug (https://bugs.webkit.org/show_bug.cgi?id=23113),
        // which means we need to correct the position of the label. We could do this
        // consistently and cleanly across browsers, but Safari is _wrong_ and deserves to
        // be treated like the subpar implementation that it is.
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            // The `transform` attribute has the form `translate(x, y) rotate(angle x y)` for
            // every label alignment but `OVER`, in which the `rotate` command is omitted.
            const [x, y, angle = 0] = this.arrow.label.element.parent.get_attribute("transform")
                .replace(/\s+/g, " ").match(/-?\d+(\.\d+)?/g);
            const katex_element = this.arrow.label.element.query_selector(".katex, .katex-error");
            if (katex_element !== null) {
                katex_element.set_style({
                    display: "inline-block",
                    transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                });
            }
        }

        // Update the origin, which is given by the centre of the edge.
        const bezier = this.arrow.bezier();
        let centre = null;
        try {
            // Preferably, we take the centre relative to the endpoints, rather than the
            // source and target.
            const [start, end] = this.arrow.find_endpoints();
            centre = bezier.point((start.t + end.t) / 2);
        } catch (_) {
            if (fixed_endpoints) {
                // If we're not reconnecting the edge, and we can't find the endpoints, we just take
                // the centre relative to the source and target.
                centre = bezier.point(0.5);
            } else {
                // If we are reconnecting the edge, then we just want to fix the centre at the
                // source or target (whichever is not being changed right now), so the edges
                // connected to this one don't move around, despite not looking like they're
                // attached to anything, when this edge is not displayed.
                const end = { source: "target", target: "source" }[ui.mode.reconnect.end];
                this.shape.origin = this.arrow[end].origin.add(
                    new Point(0, this.arrow.style.shift).rotate(this.arrow.angle()),
                );
            }
        }
        if (centre !== null) {
            // `centre` will be `null` only if we've already updated the origin.
            this.shape.origin = this.arrow.source.origin.add(
                centre.add(new Point(0, this.arrow.style.shift)).rotate(this.arrow.angle()),
            );
        }

        // Move the jump label to the centre of the edge. We may not have created the `kbd` element
        // yet, during initialisation, so we need to check.
        const jump_label = this.element.query_selector("kbd");
        if (jump_label) {
            jump_label.set_style({
                left: `${this.shape.origin.x}px`,
                top: `${this.shape.origin.y}px`,
            });
        }

        // We override the source and target whilst drawing, so we need to reset them.
        this.arrow.source = this.source.shape;
        this.arrow.target = this.target.shape;
    }

    /// Returns the angle of this edge.
    angle() {
        return this.target.shape.origin.sub(this.source.shape.origin).angle();
    }

    /// Changes the source and target.
    reconnect(ui, source, target) {
        [this.arrow.source, this.arrow.target] = [source.shape, target.shape];
        ui.quiver.connect(source, target, this);
        for (const cell of ui.quiver.transitive_dependencies([this])) {
            cell.render(ui);
        }
    }

    /// Flips the edge, so that what was on the left is now on the right. If `flip_arrow` is true,
    /// this includes offset and head/tail style. Otherwise it only flips the label alignment.
    flip(ui, flip_arrow, skip_dependencies = false) {
        this.options.label_alignment = {
            left: "right",
            centre: "centre",
            over: "over",
            right: "left",
        }[this.options.label_alignment];
        if (flip_arrow) {
            this.options.offset = -this.options.offset;
            this.options.curve = -this.options.curve;
            if (this.options.style.name === "arrow") {
                const swap_sides = { top: "bottom", bottom: "top" };
                if (this.options.style.tail.name === "hook") {
                    this.options.style.tail.side = swap_sides[this.options.style.tail.side];
                }
                if (this.options.style.head.name === "harpoon") {
                    this.options.style.head.side = swap_sides[this.options.style.head.side];
                }
            }
        }

        this.render(ui);

        if (flip_arrow && !skip_dependencies) {
            for (const cell of ui.quiver.transitive_dependencies([this])) {
                cell.render(ui);
            }
        }
    }

    /// Reverses the edge, swapping the `source` and `target`.
    reverse(ui) {
        // Flip all the dependency relationships.
        for (const cell of ui.quiver.reverse_dependencies_of(this)) {
            const dependencies = ui.quiver.dependencies.get(cell);
            dependencies.set(
                this,
                { source: "target", target: "source" }[dependencies.get(this)],
            );
        }

        // Swap the `source` and `target`.
        [this.source, this.target] = [this.target, this.source];
        [this.arrow.source, this.arrow.target] = [this.source.shape, this.target.shape];

        // Reverse the label alignment and edge offset as well as any oriented styles.
        // Flipping the label will also cause a rerender.
        // Note that since we do this, the position of the edge will remain the same, which means
        // we don't need to rerender any of this edge's dependencies.
        this.flip(ui, true, true);
    }
}

// A `Promise` that returns the `katex` global object when it's loaded.
let KaTeX = null;

// We want until the (minimal) DOM content has loaded, so we have access to `document.body`.
document.addEventListener("DOMContentLoaded", () => {
    // We don't want the browser being too clever and trying to restore the scroll position, as that
    // won't play nicely with the auto-centring.
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }

    // The global UI.
    const ui = new UI(new DOM.Element(document.body));
    ui.initialise();

    const load_quiver_from_query_string = () => {
        const query_data = query_parameters();

        // Set the initial zoom level based on the `scale` parameter.
        if (query_data.has("scale")) {
            const scale = parseFloat(decodeURIComponent(query_data.get("scale")));
            if (!Number.isNaN(scale)) {
                // ui.pan_view(Offset.zero(), scale);
            }
        }

        // The `embed` parameter means that we should disable all UI elements and user interaction,
        // because the diagram is being displayed in an `<iframe>`.
        if (query_data.has("embed")) {
            ui.switch_mode(new UIMode.Embedded(ui))
        }
        
        if (query_data.has("json")) {
          try {
            QuiverImportExport.json.import(ui);
            ui.scale_to_fit();
          } catch (error) {
             if (ui.quiver.is_empty()) {
                    UI.display_error(
                        "The saved diagram was malformed and could not be loaded."
                    );
                } else {
                    // The importer will try to recover from errors, so we may have been mostly
                    // successful.
                    UI.display_error(
                        "The saved diagram was malformed and may have been loaded incorrectly."
                    );
                }
                
                // dismiss_loading_screen();
                // Rethrow the error so that it can be reported in the console.
                throw error;
            }
        }

        // If there is `q` parameter in the query string, try to decode it as a diagram.
        if (query_data.has("q")) {
            
            const dismiss_loading_screen = () => {
                // Dismiss the loading screen. We do this after a `delay` so that the loading
                // screen captures any keyboard and pointer events that occurred during loading
                // (since they are queued up while the diagram loading code is processing). We
                // don't actually remove it, because JavaScript's timing can be a bit
                // inconsistent under load.
                delay(() => {
                    document.removeEventListener("keydown", cancel);
                    document.removeEventListener("keyup", cancel);
                    // We only hide the loading screen after all the (KaTeX) fonts have been loaded.
                    // This ensures that the diagram will have been rendered correctly by the time
                    // we reveal it.
                    document.fonts.ready.then(() => {
                        ui.element.query_selector(".loading-screen").class_list.add("hidden");
                    });
                });
            };

            try {
                // Decode the diagram.
                QuiverImportExport.base64.import(ui, query_data.get("q"));
                // If there is a `macro_url`, load the macros from it.
                if (query_data.has("macro_url")) {
                    ui.load_macros_from_url(decodeURIComponent(query_data.get("macro_url")));
                }
                // Adjust the diagram scale to fit the screen in embedded view.
                // However, we have to be careful to only do this if the user
                // hasn't already set the scale explicitly.
                if (query_data.has("embed") && !query_data.has("scale")) {
                    ui.scale_to_fit();
                }
                //dismiss_loading_screen();
                
            } catch (error) {
                if (ui.quiver.is_empty()) {
                    UI.display_error(
                        "The saved diagram was malformed and could not be loaded."
                    );
                } else {
                    // The importer will try to recover from errors, so we may have been mostly
                    // successful.
                    UI.display_error(
                        "The saved diagram was malformed and may have been loaded incorrectly."
                    );
                }
                
                // dismiss_loading_screen();
                // Rethrow the error so that it can be reported in the console.
                throw error;
            }
        }
    };

    // Immediately load the KaTeX library.
   const rendering_library = new DOM.Element("script", {
        type: "text/javascript",
        src: "../katex/katex.js",
    }).listen("error", () => {
        // Handle KaTeX not loading (somewhat) gracefully.
        UI.display_error(`KaTeX failed to load.`);
        // Remove the loading screen.
        ui.element.query_selector(".loading-screen").class_list.add("hidden");
    });

    KaTeX = new Promise((accept) => {
        rendering_library.listen("load", () => {
            accept(katex);
            // KaTeX is fast enough to be worth waiting for, but not
            // immediately available. In this case, we delay loading
            // the quiver until the library has loaded.
            load_quiver_from_query_string();
        })
    });

    // Load the style sheet needed for KaTeX.
    document.head.appendChild(new DOM.Element("link", {
        rel: "stylesheet",
        href: "../katex/katex.css",
    }).element);

    // Trigger the script load.
    document.head.appendChild(rendering_library.element);

    // Listen for history change events, and update the diagram accordingly.
    window.addEventListener("popstate", () => {
        ui.reset();
        load_quiver_from_query_string();
    });
});
