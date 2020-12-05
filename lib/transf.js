
String.prototype.replace_all = function(str, rep) {
  return this.replace(new RegExp(str, "gm"), rep);
}

String.prototype.html_escape = function() {
  return this.replace_all("\n", "<br>").replace_all(" ", "&nbsp");
}

function char2index(letter) {
  var code = letter.charCodeAt(0);
  return code > 64 && code < 91 ? code - 65 : code - 71;
}

var mapping = {
  double_struck: [], 
  bold: [], 
  italic: [],
  bold_italic: [],
  // script: [], 
  bold_script: [], 
  fraktur: [], 
  bold_fraktur: [], 
  monospace: [],
};

const push_d835 = (target, index) => 
  target.push(unescape("%uD835%u" + index.toString(16)));

function standard_table(type, hest, nous) {
  var target = mapping[type];
  var pos = parseInt(hest, 16);
  
  for (var index = 0; index < 52; index++)
    push_d835(target, index + pos);
  
  if (nous != undefined) {
    if (nous.nums != undefined) {
      pos = parseInt(nous.nums, 16);
      for (var index = 0; index < 10; index++)
        push_d835(target, index + pos);
    }
    if (nous.callback != undefined)
      nous.callback(target);
  }
  return target;
}

target = standard_table("double_struck", "0xDD38", {nums: "0xDFD8"});
target[2] = "ℂ", target[7] = "ℍ", target[13] = "ℕ", target[15] = "ℙ", 
target[16] = "ℚ", target[17] = "ℝ", target[25] = "ℤ";

standard_table("bold", "0xDC00", {nums: "0xDFCE"});
standard_table("bold_italic", "0xDC68");
standard_table("bold_script", "0xDCD0");

target = standard_table("fraktur", "0xDD04");
target[2] = "ℭ", target[7] = "ℌ", target[8] = "ℑ", target[17] = "ℜ", 
target[25] = "ℨ";

standard_table("bold_fraktur", "0xDD6C");
standard_table("monospace", "0xDE70", {nums: "0xDFF6"});
standard_table("italic", "0xDC34"); // miss 'h'
// standard_table("script", "0xDC9C");


function transform(type, letter) {
  var code = letter.charCodeAt(0);
  var scope = mapping[type];
  if ((code > 47 && code < 58) && scope.length > 52)
    return scope[code + 4];
  if ((code > 64 && code < 91) || (code > 96 && code < 123))
    return scope[char2index(letter)]
  return letter;
}


function transforms(type, string) {
  var dist = string.split('');
  dist = dist.map((value) => transform(type, value));
  return dist.join('');
}



