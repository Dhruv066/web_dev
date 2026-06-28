const person = {
  firstName: "Dhruv",
  lastName: "Maurya",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName);

person.fullName = "Rahul Kumar";

console.log(person.fullName);   
