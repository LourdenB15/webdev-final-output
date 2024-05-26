function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  if (!height || !weight) return;
  if (height <= 0 || weight <= 0) return;
  let bmi = weight / (height * height);
  let result = document.getElementById('result');
  result.textContent = 'Your BMI is ' + bmi.toFixed(2);
  if (bmi < 18.5) {
    result.textContent += ' (Underweight)';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent += ' (Normal)';
  } else if (bmi >= 25 && bmi < 29.9) {
    result.textContent += ' (Overweight)';
  } else {
    result.textContent += ' (Obesity)';
  }
}
