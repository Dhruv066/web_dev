let citiespopulation={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000
};
let cityPopulation={}

for(let cities in citiespopulation){
    if(cities=== "Berlin"){
        break;
    }
    cityPopulation[cities]=citiespopulation[cities];
}
console.log(cityPopulation);