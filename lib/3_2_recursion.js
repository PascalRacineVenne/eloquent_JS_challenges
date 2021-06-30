// 0 is even return true
// 1 is !even return false
// if negative(n < 0) pass function with a double neagative to verify
// pass condition isEven(n - 2) returns true

const isEven = (n) => {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
