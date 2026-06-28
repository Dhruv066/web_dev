function Rectangle(length,width){
    this.length=length;
    this.width=width;
}
Rectangle.prototype.area = function (length,width){
    return this.length * this.width;
}
const r1 = new Rectangle(45,56);
console.log(r1.area());