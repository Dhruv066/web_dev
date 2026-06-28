let tea_collection =[];
let tea;
do{
    tea=prompt("Enter the tea name (to stop enter stop):");

    if(tea !== "stop"){
        tea_collection.push(tea);
    }
}while(tea !=="stop");

console.log(tea_collection);


// this code will  run only on browser 