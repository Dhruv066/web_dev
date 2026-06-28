function getdata(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      resolve("success");
    }, 2000);
  });
}

// this is known as promise chaining
getdata(1).then((res)=>{
    return getdata(2);
}).then(()=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})

