function car(brand){
    this.brand=brand;
}
car.prototype.start = function(){
    console.log(this.brand+"is starting.");
};
const c1 = new car("toyota ");
c1.start();