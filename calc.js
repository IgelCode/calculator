function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multyply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

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
