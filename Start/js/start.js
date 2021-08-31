var str = "Все нетривиальные абстракции дырявы — Джоэл Спольски в виде закона дырявых абстракций.";
var result = "";
 
(function(chars) {
    var char = chars.shift();
    result += char;
    document.getElementById('hints_id').innerHTML= result;
    if (chars.length) {
        setTimeout(arguments.callee, Math.random() * 100 + 50, chars);
    }
})(str.split(""));