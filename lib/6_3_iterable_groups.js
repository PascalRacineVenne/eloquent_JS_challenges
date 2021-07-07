// Your code here (and the code from the previous exercise)

class Group {
  constructor() {
    this.members = [];
  }

  add(item) {
    if (!this.has(item)) {
      this.members.push(item);
    }
  }

  delete(item) {
    this.members = this.members.filter(i => i !== item);
  }

  has(item) {
    return this.members.includes(item);
  }

  static from(persons) {
    let group = new Group;
    for (let individual of persons) {
      group.add(individual);
    }
    return group;
  }

 [Symbol.iterator]() {
  return new GroupIterator(this);
 }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
