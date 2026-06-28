class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    area(){
        return this.length * this.width;
    }

}
const r1 = new Rectangle(15,22);
console.log(r1.area())