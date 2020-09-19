function calculate(val) {
  document.getElementById("display").value += val;
}

function solve() {
  let x = document.getElementById("display").value
  let y = eval(x)
  document.getElementById("display").value = y
}

function clr() {
  document.getElementById("display").value = ""
}

function del() {
  var displayText = document.getElementById("display").value;
  document.getElementById("display").value = displayText.substr(0, displayText.length - 1);
}