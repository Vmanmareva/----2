var str = "1642 год — Блез Паскаль представляет «Паскалину» — первое реально осуществлённое и получившее известность механическое цифровое вычислительное устройство. Прототип устройства суммировал и вычитал пятиразрядные десятичные числа.";
var result = "";
 
(function(chars) {
    var char = chars.shift();
    result += char;
    document.getElementById('hints_id').innerHTML= result;
    if (chars.length) {
        setTimeout(arguments.callee, Math.random() * 300 + 50, chars);
    }
})(str.split(""));