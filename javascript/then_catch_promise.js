function getpromise(){
    return new Promise((resolve, reject) => {
        console.log("i am a promise.");
        resolve("Promise resolved Successfully.")
        // reject("Promise is rejected.")
    })
}

let promise= getpromise();
promise.then((res)=>{
    console.log("promise fullfiled.");
    console.log(res)
})
promise.catch((rej)=>{
    console.log("promise is rejected");
    console.log("Error is: "+rej)
})