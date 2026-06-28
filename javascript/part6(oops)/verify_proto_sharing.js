function employee(name){
    this.name=name;
}
employee.prototype.work = function (){
    console.log(this.name +" is working.")
}
const emp1 = new employee("rahul");
const emp2 = new employee("devendra");
emp1.work();
emp2.work();


console.log(emp1.work === emp2.work);
// this will return true because both objects are sharing the same function which is work 

