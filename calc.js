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
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
let value = 0;
let valueOne = 0;
let valueTwo = 0;

//Getting the first Value/Number
equals.addEventListener("click", evaluate);
clear.addEventListener("click", clearDisplay);
numbers.addEventListener("click", getValue);
operators.addEventListener("click", getOperator);

function getOperator(event) {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if (btnValue === "plus") {
    operand = "+";
    valueOne = parseInt(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "minus") {
    operand = "-";
    valueOne = parseInt(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "multiply") {
    operand = "*";
    valueOne = parseInt(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "divide") {
    operand = "/";
    valueOne = parseInt(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  }
}

function evaluate() {
  valueTwo = parseInt(display.textContent);
  opdisplay.textContent = `${valueOne} ${operand} ${valueTwo} =`;
  display.textContent = operate(operand, valueOne, valueTwo);
}

function operate(operand, a, b) {
  a = Number(a);
  b = Number(b);
  if (operand === "+") {
    return add(a, b);
  } else if (operand === "-") {
    return substract(a, b);
  } else if (operand === "*") {
    return multiplys(a, b);
  } else if (operand === "/") {
    if (b === 0) {
      display.textContent = "Cant divide by 0!";
      return;
    } else {
      return divides(a, b);
    }
  } else {
    return;
  }
}

function clearDisplay() {
  opdisplay.textContent = "";
  display.textContent = "";
  value = "";
  valueOne = "";
  valueTwo = "";
}

function getValue(event) {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (display.textContent === "0") {
    clearDisplay();
  }
  if (!isButton) {
    return;
  } else if (btnValue === "one") {
    value = 1;
    display.textContent += value;
  } else if (btnValue === "two") {
    value = 2;
    display.textContent += value;
  } else if (btnValue === "three") {
    value = 3;
    display.textContent += value;
  } else if (btnValue === "four") {
    value = 4;
    display.textContent += value;
  } else if (btnValue === "five") {
    value = 5;
    display.textContent += value;
  } else if (btnValue === "six") {
    value = 6;
    display.textContent += value;
  } else if (btnValue === "seven") {
    value = 7;
    display.textContent += value;
  } else if (btnValue === "eight") {
    value = 8;
    display.textContent += value;
  } else if (btnValue === "nine") {
    value = 9;
    display.textContent += value;
  } else if (btnValue === "zero") {
    value = 0;
    display.textContent += value;
  } else {
    clearDisplay();
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
