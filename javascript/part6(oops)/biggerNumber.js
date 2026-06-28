class Number{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    greater(){
        if(this.a>this.b){
            return this.a;
        }
        else{
            return this.b;
        }
    }
}
const n1 = new Number(20,35);
console.log(n1.greater());