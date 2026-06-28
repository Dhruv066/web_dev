function orderTea(teaType){
    function orderConfirmed(){
        return `Your order has confirmed.`
    }
    return orderConfirmed();
}
let order = orderTea();
console.log(order);