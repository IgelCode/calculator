const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const opdisplay = document.querySelector("#opdisplay");
const container = document.querySelector(".container");
let value = "notSetYet";
console.log(value);
container.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  switch (event.target.id) {
    case "one":
      display.textContent = "1";
      value = 1;
      console.log(value);
      break;
    case "two":
      display.textContent = "2";
      value = 2;
      break;
    case "three":
      display.textContent = "3";
      value = 3;
      break;
    case "four":
      display.textContent = "4";
      value = 4;
      break;
    case "five":
      display.textContent = "5";
      value = 5;
      break;
    case "six":
      display.textContent = "6";
      value = 6;
      break;
    case "seven":
      display.textContent = "7";
      value = 7;
      break;
    case "eight":
      display.textContent = "8";
      value = 8;
      break;
    case "nine":
      display.textContent = "9";
      value = 9;
      break;
    case "zero":
      display.textContent = "0";
      value = 0;
      break;
    default:
      display.textContent = "Lets do some maths :)";
  }
});

function operate(operator) {
  if (operator === "+") {
    add();
  } else if (operator === "-") {
    substract();
  } else if (operator === "*") {
    multiply();
  } else if (operator === "/") {
    divide();
  } else {
    return;
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiplys(a, b) {
  return a * b;
}

function divides(a, b) {
  return a / b;
}

function displayed() {}
