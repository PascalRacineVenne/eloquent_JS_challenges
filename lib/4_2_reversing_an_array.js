const reverseArray = (array) => {
  let result = [];
  console.log(array.length -1);
  for (let i = array.length -1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

const reverseArrayInPlace = () => {

};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
