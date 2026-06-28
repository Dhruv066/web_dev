function Student (name , marks){
    this.marks=marks;
    this.name=name;

}
Student.prototype.display = function (){
    console.log(this.name + " scored " +this.marks +" marks.");
}
const std1 = new Student("dhruv",56);
std1.display();