let result = document.getElementById('result');

function handleButtonClick(value) {
  result.value += value;
}

function handleClear() {
  result.value = '';
}

function handleEquals() {
  result.value = eval(result.value);
}
