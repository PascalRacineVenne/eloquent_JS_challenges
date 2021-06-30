for (let num = 1; num <= 100; num++) {
  let result = "";
  if (num % 3 === 0) {
    result += "Fizz";
  } else if (num % 5 === 0) {
    result += "Buzz";
  }
  console.log(result || num);
}


// exact solution

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
