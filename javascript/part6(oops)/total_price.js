class product {
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    totalPrice(){
        return this.price*this.quantity;
    }
}
const p1 = new product("pen",20,5);
console.log(p1.totalPrice());