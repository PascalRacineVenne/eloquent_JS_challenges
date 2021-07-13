class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(item) {
    if (this.has(item)) return this;
    return new PGroup(this.members.concat([item]));
  }

  delete(item) {
    if (!this.has(item)) return this;
    return new PGroup(this.members.filter(m => m !== item));
  }

  has(item) {
    return this.members.includes(item);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
