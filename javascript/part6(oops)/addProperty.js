function mobile (brand){
    this.brand=brand;
}
mobile.prototype.country="India";

const m1 = new mobile("apple");
const m2 = new mobile (" samsung ");


console.log(m1.country);
console.log(m2.country);
console.log(m2.brand);
