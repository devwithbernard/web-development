const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const equal = document.querySelector("#equal");
const result = document.querySelector("#result");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");

let operator;

plus.addEventListener("click", (e) => {
  operator = "+";
});

minus.addEventListener("click", (e) => {
  operator = "-";
});

times.addEventListener("click", (e) => {
  operator = "x";
});

function main() {
  equal.addEventListener("click", (e) => {
    if (verify()) {
      result.innerHTML = valueTotal(num1.value, num2.value, operator);
      resetValues();
    } else {
      result.innerHTML = "Error of calculation";
    }
  });
}

main();

function valueTotal(number1, number2, operator) {
  switch (operator) {
    case "+":
      return parseFloat(number1) + parseFloat(number2);
    case "-":
      return parseFloat(number1) - parseFloat(number2);
    case "x":
      return parseFloat(number1) * parseFloat(number2);
    default:
      return undefined;
  }
}

function resetValues() {
  num1.value = "";
  num2.value = "";
}

// verify if one of inputs is empty
function verify() {
  if (num1.value == "" || num2.value == "") {
    return false;
  } else if (isNaN(num1.value) || isNaN(num2.value)) {
    return false;
  }
  return true;
}
verify();
