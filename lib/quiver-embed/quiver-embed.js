
const encoder = new TextEncoder();

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelectorAll('.quiver').forEach(function (element) {

    const json = element.textContent.replace(/\\/g, String.raw`\\`);
    const base64 = btoa(String.fromCharCode(...encoder.encode(json)));

    element.textContent = '';
    element.style.textAlign = 'center';
    element.style.overflow = 'hidden';
    
    const scale = element.dataset.scale || '1.3';
    const height = element.dataset.height;
    // const scale = element.dataset.scale || '1.3';
    
    element.style.margin = `0`;
    element.style.padding = `${1 + +scale}em`;

    const frame = document.createElement('iframe');
    frame.src = `../../lib/quiver/index.html?q=${base64}&embed`;
    frame.width = '100%';
    height && (frame.style.height = height);
    frame.style.border = 'none';
    frame.style.pointerEvents = 'none';
    frame.style.transform = `scale(${scale})`;

    element.appendChild(frame);
  });
});
