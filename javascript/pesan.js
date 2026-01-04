const rangeInput = document.getElementById('range4');
  const rangeOutput = document.getElementById('rangeValue');

  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener('input', function () {
    rangeOutput.textContent = this.value;
  });