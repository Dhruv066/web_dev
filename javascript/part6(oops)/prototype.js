function Person(name){
    this.name=name
}
Person.prototype.sayHello = function (){
    console.log("Hello, my name is "+this.name );
}
const p1 = new Person("Dhruv");
console.log(Person.name);
p1.sayHello();