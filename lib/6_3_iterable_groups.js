// Your code here (and the code from the previous exercise)

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(i => i !== value);
  }

  has(value) {
    return this.members.includes(value);
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
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let outcome = {value: this.group.members[this.position],
                   done : false};
      this.position++;
      return outcome;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
};

// → a
// → b
// → c
