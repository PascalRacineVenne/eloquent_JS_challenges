// Implement every as a function that takes an array and a predicate
// function as parameters.

// Write two versions, one using a loop and one using the some method.

const every = (array, test) => {
  for (let a of array) {
    if (!test(a)) return false;
  }
  return true;
};

const every2 = (array, test) => {
  return !array.some(a => !test(a));
};


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

