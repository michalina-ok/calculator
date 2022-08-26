const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
let selector = operator.options[operator.selectedIndex].text;
const calculateButton = document.querySelector("#calculate");
const resultList = document.querySelector('#results');
const lastResult = resultList.lastElementChild;


console.log(firstNumber.value);
console.log(secondNumber.value);

buttonClicked();

function buttonClicked() {
  calculateButton.addEventListener("click", calculate);
}

console.log(selector);

function calculate() {
  if (selector === "+") {
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    lastResult.textContent = result;
  }

  else if (selector === "-") {
    let result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    lastResult.textContent = result;
  }

  else if (selector === "*") {
    let result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    lastResult.textContent = result;
  }

  else if (selector === "/") {
    let result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    lastResult.textContent = result;
  }
}

function rounding() {}

function writeResult() {

}

function clearResult() {
  document.querySelector("#clear").addEventListener("click", clickedClear);

  function clickedClear() {
    console.log("clear");
  }
}
