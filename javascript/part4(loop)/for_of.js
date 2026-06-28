let num = [1,2,3,4,5,6];
let arr=[];
for(let i of num){
    if(i===4){
        break;
    }
    arr.push(i);
}
console.log(arr);