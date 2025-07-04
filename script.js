function checkEligibility() {
  const income = document.getElementById('incomeInput').value;
  const resultDiv = document.getElementById('result');

  if (!income) {
    resultDiv.innerText = 'Please enter your income.';
    return;
  }

  const threshold = 30000;
  if (parseInt(income) < threshold) {
    resultDiv.innerText = '✅ You are eligible for the grant.';
  } else {
    resultDiv.innerText = '❌ You are not eligible for the grant.';
  }
}
