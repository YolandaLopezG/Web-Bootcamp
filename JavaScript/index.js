/* JavaScript exercises from Section 15*/

/** BMI Calculator */

function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi < 29.5) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

/* Love calculator */

function loveCalculator() {
    prompt("What is your name?");
    prompt("What is their name?");
  
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    alert("Your love score is " + loveScore + "%");
  }
