const d2r = 0.01745;
const debug = true;

var graph = function(width = '100%', height = 400) {
  const self = this;
  const px = 40;
  this.preset = "";
  this.labels = "";
  this.tails = "";
  this.styles = "";
  this.stroke = {color: "black", width: 2, r: 3};
  this.canvas = { width: width, height: height };
  this.colors = debug ? ["#FFEAEAEA", "#FFFAEAEA"] : ["transparent", "transparent"];
  this.base = {x: 0, y: 0};
  this._svg_class = "";
  
  this.lines = function() {
    this.labels += `<polyline points=\"${
      Array.from(arguments).map((p) => {
        p[0] += this.base.x;
        p[1] += this.base.y;
        return p;
      }).join(' ')
    }\" style='fill: ${this.colors[0]}; stroke: ${this.stroke.color}; stroke-width: ${this.stroke.width};'/>`;
    // alert(this.labels);
    for (var i = 0; i < arguments.length; ++i)
      this.labels += `<circle cx=\"${arguments[i][0]}\" cy=\"${arguments[i][1]}\" r='${this.stroke.r}' stroke='black' style='fill:white; stroke: ${this.stroke.color}; stroke-width: ${this.stroke.width};'/>`;
  };
  
  this.triangle = (a) => this.lines([0, 0.866 * a], [a, 0.866 * a], [0.5 * a, 0], [0, 0.866 * a]);
  this.rectangle = (a) => this.lines([0, 0], [0, a], [a, a], [a, 0], [0, 0]);
  
  this.polygonCoords = function(a, n = 3, phi = 0) {
    const d = a * Math.sin(Math.PI / n);
    const r = d / (2 * Math.sin(Math.PI / n));
    var arr = new Array(n);
    for (var i = 0; i < n; ++i) {
      arr[i] = [a / 2 + r * Math.cos(2 * Math.PI * i / n + phi), a / 2 + r * Math.sin(2 * Math.PI * i / n + phi)];
      // arr[i] = [ + arr[i][0].toFixed(3), + arr[i][1].toFixed(3)];
    }
    return arr;
  }
  
  this.polygon = function(a, n = 3) {
    const d = a * Math.sin(Math.PI / n);
    const r = d / (2 * Math.sin(Math.PI / n));
    var arr = new Array(n + 1);
    for (var i = 0; i < n; ++i) {
      arr[i] = [a / 2 + r * Math.cos(2 * Math.PI * i / n), a / 2 + r * Math.sin(2 * Math.PI * i / n)];
      // arr[i] = [ + arr[i][0].toFixed(3), + arr[i][1].toFixed(3)];
    }
    arr[n] = [arr[0][0], arr[0][1]];
    this.lines(...arr);
    return arr;
  }
  
  this.draw = function() {
    if (this.styles.length > 0) document.write(`<style>${this.styles}</style>`);
    document.write(str = `<div class="scroll"><div id="graph" style="display: inline; margin: 0 auto;">${this.preset}
      <svg id="svg" class="${this._svg_class}" style="transform-origin: center center; background-color: ${this.colors[0]};" viewBox='0 0 100% 100%'
        width=${this.canvas.width} height=${this.canvas.height} version='1.1'>${this.labels}</svg>
      <div style="display: inline-block; margin-left: ${-this.canvas.width}px;
        position: absolute;">${this.tails}</div></div></div>`);
    // alert(str);
  }
  
  this.text = function(str, left, top, id, clazz, scale = [1, 1]) {
    this.tails += `<p class=${clazz} id=${id} style="background-color: ${this.colors[1]}; position: absolute; 
      transform: scale(${scale[0]}, ${scale[1]}); word-break: nowrap;
      margin-left: ${left}em; margin-top: ${top}em; text-align: center;">${str}</p>`;
    // alert(this.tails);
  };
  
  this.frameRotation2 = function(name, t) {
    this.styles += `.${name} { animation: ${name}_action ${t}s linear infinite; } @keyframes ${name}_action {
      from { transform: rotate(0deg) }
      to { transform: rotate(360deg) }
    }`;
  }
  
  this.frameRotation = function(name, t, theta = 0, r) {
    this.styles += `.${name} { animation: ${name}_action ${t}s linear infinite; } @keyframes ${name}_action {
      from { transform: rotate(${theta}deg) translate(${r}px) }
      to { transform: rotate(${360 + theta}deg) translate(${r}px) }
    }`;
  }
  
  this.frameEncircle = function(name, t, theta = 0, r) {
    this.styles += `.${name} { animation: ${name}_action ${t}s linear infinite; } @keyframes ${name}_action {
        from { transform: rotate(${theta}deg) translate(${r}px) rotate(-${theta}deg); }
        to { transform: rotate(${360 + theta}deg) translate(${r}px) rotate(-${360 + theta}deg); }
    }`;
  }
  
  this._getTextHorizonError = () => - this.canvas.height / 40 - 0.3 // ?
};