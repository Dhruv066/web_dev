class person{
    constructor(name){
        this.name= name ;
    }
    greet(){
        console.log("Hello "+ this.name);
    }
}
const p1 = new person("Dhruv Maurya");
p1.greet();

