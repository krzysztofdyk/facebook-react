function buttonValue(value) {
  calc.text.value += value;
}

function myResult() {
  calc.text.value = eval(calc.text.value);
}
function btnClear() {
  calc.text.value = " ";
}

function btnPlus() {
  calc.text.value += "+";
}
function btnMinus() {
  calc.text.value += "-";
}
function btnProduct() {
  calc.text.value += "*";
}
function btnDivide() {
  calc.text.value += "/";
}
