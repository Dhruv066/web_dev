class user {
  constructor(name = "guest") {
    this.name = name;
  }
}
const u1 = new user();
const u2 = new user("dhruv");
console.log(u1.name);
console.log(u2.name);