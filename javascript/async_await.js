function getdata(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData(){
    await getdata(1)
    await getdata(2)
    await getdata(3)
    await getdata(4)
    await getdata(5)

};
getAllData()
