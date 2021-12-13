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
let valueTwo = 0;
console.log(value);

numbers.addEventListener("click", getValue);

operators.addEventListener("click", (event) => {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if (btnValue === "plus") {
    opdisplay.textContent = `${display.textContent} +`;
    display.textContent = "";
  } else if (btnValue === "minus") {
    opdisplay.textContent = `${display.textContent} -`;
    display.textContent = "";
  } else if (btnValue === "multiply") {
    opdisplay.textContent = `${display.textContent} *`;
    display.textContent = "";
  } else if (btnValue === "divide") {
    opdisplay.textContent = `${display.textContent} /`;
    display.textContent = "";
  } else if (btnValue === "equals") {
    val = display.textContent;
    opdisplay.textContent = `${display.textContent} =`;
    display.textContent = val + display.textContent;
  } else if (btnValue === "clear") {
    opdisplay.textContent = "";
    display.textContent = 0;
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

function getValue(event) {
  let btnValue = event.target.id;
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (btnValue === "one") {
    display.textContent = "1";
    value = 1;
  } else if (btnValue === "two") {
    display.textContent = "2";
    value = 2;
  } else if (btnValue === "three") {
    display.textContent = "3";
    value = 3;
  } else if (btnValue === "four") {
    display.textContent = "4";
    value = 4;
  } else if (btnValue === "five") {
    display.textContent = "5";
    value = 5;
  } else if (btnValue === "six") {
    display.textContent = "6";
    value = 6;
  } else if (btnValue === "seven") {
    display.textContent = "7";
    value = 7;
  } else if (btnValue === "eight") {
    display.textContent = "8";
    value = 8;
  } else if (btnValue === "nine") {
    display.textContent = "9";
    value = 9;
  } else if (btnValue === "zero") {
    display.textContent = "0";
    value = 0;
  } else {
    display.textContent = "Lets do some maths :)";
    return;
  }
  console.log(value);
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
