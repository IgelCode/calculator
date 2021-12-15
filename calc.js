const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const display = document.querySelector("#display");
const opdisplay = document.querySelector("#opdisplay");
const container = document.querySelector(".container");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
let value = 0;
let valueOne = 0;
let valueTwo = 0;
let operand = null;

//Getting the first Value/Number
equals.addEventListener("click", evaluate);
clear.addEventListener("click", clearDisplay);
numbers.addEventListener("click", getValue);
operators.addEventListener("click", getOperator);
del.addEventListener("click", deleteLast);

function deleteLast() {
  x = display.textContent;
  display.textContent = x.toString().split("").slice(0, -1).join("");
}

function getOperator(event) {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if (btnValue === "plus") {
    console.log(operand);
    if (operand !== null) {
      evaluate();
    }
    operand = "+";
    valueOne = Number(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "minus") {
    if (operand !== null) {
      evaluate();
    }
    operand = "-";
    valueOne = Number(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "multiply") {
    if (operand !== null) {
      evaluate();
    }
    operand = "*";
    valueOne = Number(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
  } else if (btnValue === "divide") {
    if (operand !== null) {
      evaluate();
    }
    operand = "/";
    valueOne = Number(display.textContent);
    opdisplay.textContent = `${display.textContent} ${operand}`;
    display.textContent = "";
    console.log(valueOne, valueTwo);
  }
}

function evaluate() {
  if (operand != null && valueOne !== undefined) {
    valueTwo = Number(display.textContent);
    opdisplay.textContent = `${valueOne} ${operand} ${valueTwo} =`;
    display.textContent = operate(operand, valueOne, valueTwo);
    lastOperand = operand;
    operand = null;
  }
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
  display.textContent = "0";
  value = "";
  valueOne = "";
  valueTwo = "";
  operand = null;
}

function getValue(event) {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (display.textContent === "0") {
    display.textContent = "";
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
  return (a + b).toFixed(2);
}

function substract(a, b) {
  return (a - b).toFixed(2);
}

function multiplys(a, b) {
  return (a * b).toFixed(2);
}

function divides(a, b) {
  console.log(a, b);
  return (a / b).toFixed(2);
}
