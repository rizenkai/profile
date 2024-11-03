function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function deleteLast() {
    let input = document.getElementById("result").value;
    document.getElementById("result").value = input.substring(0, input.length - 1);
  }
  
  function appendNumber(number) {
    document.getElementById("result").value += number;
  }
  
  function appendOperator(operator) {
    let input = document.getElementById("result").value;
    if (input) {
      document.getElementById("result").value += operator;
    }
  }
  
  function appendDot() {
    let input = document.getElementById("result").value;
    if (!input.includes(".")) {
      document.getElementById("result").value += ".";
    }
  }
  
  function calculate() {
    let input = document.getElementById("result").value;
    if (input) {
      document.getElementById("result").value = eval(input);
    }
  }
  