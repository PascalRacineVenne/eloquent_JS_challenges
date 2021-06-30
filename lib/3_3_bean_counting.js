// Write a function countBs that takes a string
// as its only argument and returns a number that
// indicates how many uppercase “B” characters there are in the string.

// const countBs = (word) => {
//   let count = 0;
//   for (let char of word) {
//     if (char === "B") {
//       count += 1;
//     }
//   };
//   return count;
// };

// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is to be
// counted (rather than counting only uppercase “B” characters).

const countChar = (word, char) => {
  let count = 0;
  for (let ch = 0; ch < word.length; ch++) {
    if (word[ch] === char) {
      count += 1;
    }
  }
  return count;
};

// Rewrite countBs to make use of this new function.

const countBs = (word) => {
  return countChar(word, "B");
};

console.log(countBs("Bob Barker's BBQ"));
console.log(countChar("Bob Barker's BBQ", "B"));
console.log(countChar("Bob Barker's BBQ", "k"));
