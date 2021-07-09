let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call

console.log(Object.prototype.hasOwnProperty(map, "one"));
// console.log(map.hasOwnProperty("one"));
// → true
