class birds{
    fly(){
        console.log(" bird can fly.");
    }
}
class penguins extends birds{
    fly(){
        console.log("Penguins can't fly.");
    }
}
let b = new birds();
let c = new penguins();
b.fly()
c.fly()