let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
  console.log('Appended to display:', value);
  
}

function clearDisplay() {
  display.value = '';
}

function pop(){ // removes last character of display 
display.value=display.value.substring(0, display.value.length - 1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
