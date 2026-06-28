/*  

        this is the callback method to perform certain tasks one by one after given certain time period or interval

*/
// a callback is a function passed as argument to another function
/*simple example 
function sum (a,b){
    return a+b;
}
function caculator(a,b,sum){
    return sum(a,b);
}*/


function getdata(data,getNextdata){
   setTimeout(() => {
    console.log("data " + data);
     if (getNextdata) {
       getNextdata();
     }
   }, 2000);

}

//    this is known as the callback Hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        })
    })
})
