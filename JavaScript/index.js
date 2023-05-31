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

/** Leap Year Challenge Exercise */

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

/** FizzBuzz Exercise with arrays */
var output = [];
var count = 1;
function FizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
