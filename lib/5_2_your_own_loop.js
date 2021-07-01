// Your code here.
const loop = (startValue, test, update, body) => {
  for (let currentValue = startValue; test(currentValue); currentValue = update(currentValue)) {
    body(currentValue);
  }
};

// It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value and
// stops if that returns false.

// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and
// starts from the beginning.

loop(10, n => n > 0, n => n - 1, console.log);

loop(8, n => n >= -8, n => n - 2, console.log);
