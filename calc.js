const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const dot = document.querySelector("#dot");
const display = document.querySelector("#display");
const opdisplay = document.querySelector("#opdisplay");
const container = document.querySelector(".container");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
let value = 0;
let valueOne = 0;
let valueTwo = 0;
let operand = null;
console.log(value);
equals.addEventListener("click", evaluate);
clear.addEventListener("click", clearDisplay);
numbers.addEventListener("click", getValue);
operators.addEventListener("click", getOperator);
del.addEventListener("click", deleteLast);

function deleteLast() {
  x = display.textContent;
  display.textContent = x.toString().split("").slice(0, -1).join("");
}

function round(number) {
  return Math.round(number * 1000) / 1000;
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
    display.textContent = round(operate(operand, valueOne, valueTwo));
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
    if (b == 0) {
      return (display.textContent = "Cant divide by 0!");
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
  } else if (display.textContent.length >= 16) {
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
  } else if (btnValue === "dot") {
    value = ".";
    console.log(display.textContent);
    if (display.textContent === "") {
      display.textContent = "0";
    }
    if (display.textContent.includes(".")) {
      return;
    }
    display.textContent += ".";
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
