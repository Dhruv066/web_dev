function getdata(dataId,getNextdata){
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("data " + dataId);
          resolve("success")
          if (getNextdata) {
            getNextData();
          }
        }, 5000);
    })
}
