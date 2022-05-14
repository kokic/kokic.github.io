
function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200)
    result = xmlhttp.responseText;
  return result;
}

function displayCode(name, language, data = language) {
  document.write(`<pre class="line-numbers language-${language}" data-language="${data}"><code class="language-${language}">`);
  document.write(loadFile(`/assets/codes/${name}`));
  document.write('</code></pre>');
}

