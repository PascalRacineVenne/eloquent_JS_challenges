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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(11);
group.add(12);
console.log(group);
group.delete(10);
group.delete(11);
group.delete(12);
console.log(group.has(10));
// → false
console.log(group);
