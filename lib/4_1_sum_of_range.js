// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers
// from start up to (and including) end.

const range = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) array.push(i);
  return array;
};

console.log(range(1, 5));

// modify your range function to take an optional third argument
// that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one,
// corresponding to the old behavior

const range2 = (start, end, step = start < end ? 1 : -1) => {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
};

console.log(range2(1, 18, 3));

// Next, write a sum function that takes an array of numbers and
// returns the sum of these numbers. Run the example program and
// see whether it does indeed return 55.

const sum = (array) => {
  let result = 0;
  for (let a of array) {
    result += a;
  }
  return result;
};

console.log(sum(range(1, 5)));
console.log(sum(range2(1, 18, 3)));
