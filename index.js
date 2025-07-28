/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO

  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  // TODO
  let total_Sum = 0;
  let index = 0;

  while (index < numbers.length) {
    total_Sum += numbers[index];
    index++;
  }
  return total_Sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  let total_Sum = 0;
  let index = 0;

  while (index < numbers.length) {
    total_Sum += numbers[index];
    index++;
  }

  return total_Sum / numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  minVal = 0;
  index = 0;

  while (index < numbers.length) {
    if (numbers[index] < minVal) {
      minVal = numbers[index];
    }
    index++;
  }

  return minVal;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  maxVal = 0;
  index = 0;

  while (index < numbers.length) {
    if (numbers[index] > maxVal) {
      maxVal = numbers[index];
    }
    index++;
  }

  return maxVal;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  maxVal = 0;
  minVal = 0;
  

  index = 0;

  while (index < numbers.length) {
    if (numbers[index] > maxVal) {
      maxVal = numbers[index];
    } 
    else if (numbers[index] < minVal) {
      minVal = numbers[index];
    }
    index++;
  }
return maxVal -= minVal;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  let index = 0;
  let solve = [];

  while (index < numbers.length) {
    if (numbers[index] % 2 === 0) {
      solve.push(numbers[index]);
    }
    index++;
  }

  return solve;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  oddVal = [];
  index = 0;

  while (index < numbers.length) {
    if (numbers[index] % 2 !== 0) {
      oddVal.push(numbers[index]);
    }
    index++;
  }
  return oddVal;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
