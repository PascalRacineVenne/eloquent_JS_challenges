// Write a function deepEqual that takes two values and returns true
// only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared
// with a recursive call to deepEqual.

const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a == null || typeof a !== "object" ||
      b == null || typeof b !== "object") return false;

  let objKeyA = Object.keys(a);
  let objKeyB = Object.keys(b);

  if (objKeyA.length !== objKeyB.length) return false;

  for (let objKey of objKeyA) {
    if (!objKeyB.includes(objKey) || !deepEqual(a[objKey], b[objKey])) return false;
  };
  return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
