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

/** 99 Bottles challenge using while structure */

function bottles() {
  var numberOfBottles = 99;
  var bottleWord = "bottles";
  while (numberOfBottles >= 0) {
    if (numberOfBottles === 1) {
      bottleWord = "bottle";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    numberOfBottles--;
    if (numberOfBottles >= 0) {
      if (numberOfBottles === 1) {
        bottleWord = "bottle";
      } else {
        bottleWord = "bottles";
      }
      console.log("Take one down, pass it around,");
      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    } else {
      console.log("No more bottles of beer on the wall.");
    }
  }
}

/* Fibonacci challenge */

function Fibonacci(n) {
  var output = [];
  if (n === 1) {
    output.push(0);
  } else {
    if (n === 2) {
      output.push(0);
      output.push(1);
    } else {
      output.push(0);
      output.push(1);
      for (let i = 0; i < n - 2; i++) {
        var last = output[i];
        var actual = output[i + 1];
        output.push(last + actual);
      }
    }
  }
  return output;
}
