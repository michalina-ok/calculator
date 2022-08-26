//defining the variables
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
let selector = operator.options[operator.selectedIndex].text;
let newSelector;
const calculateButton = document.querySelector("#calculate");
const resultList = document.querySelector("#results");
const lastResult = resultList.lastElementChild;
let li = document.querySelectorAll('li');
let result;
const child4 = document.querySelector('#child4')

console.log(firstNumber.value);
console.log(secondNumber.value);

//button clicked
checkOperator();
clearResult();

function checkOperator() {
    operator.addEventListener("change", (event) => {
      newSelector = event.target.value;
      console.log(newSelector);
    });
    buttonClicked();
  }

function buttonClicked() {
  calculateButton.addEventListener("click", calculate);
}


function calculate() {
  if (newSelector === "add") {
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    lastResult.textContent = result;
  } else if (newSelector === "sub") {
    let result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    lastResult.textContent = result;
  } else if (newSelector === "mul") {
    let result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    lastResult.textContent = result;
  } else if (newSelector === "div") {
    let result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    lastResult.textContent = result;
  }
}

function rounding() {

}

function clearResult() {
  document.querySelector("#clear").addEventListener("click", clickedClear);

  function clickedClear() {
    child1.textContent = '0';
    child2.textContent = '0';
    child3.textContent = '0';
    child4.textContent = '0';
    console.log(li)

  }
}
