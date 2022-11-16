// Good Luck! You got this 💪🏾
// Write your code here.

// Functions
function describeCountry (country,population,capitalCity){
   
    return(`${country} has ${population} million people and its captial city is ${capitalCity}`)
}

let tell_1 = describeCountry("England",55.98,"London")
console.log(tell_1)

let tell_2= describeCountry("frace",67.5,"Paris")
console.log(tell_2)

let tell_3 = describeCountry("Belgium",11.59,"Brussesl")
console.log(tell_3)


function percentageOfWorld1 (population,country2){
    return (`${country2} has ${population} million people, so it's about ${population/7900*100}% of the world population`)
}

let tell_4 = percentageOfWorld1(11.59,"Belgium")
console.log(tell_4)
let tell_5 = percentageOfWorld1(67.5,"France")
console.log(tell_5)
let tell_6 = percentageOfWorld1(55.98,"England")
console.log(tell_6)


// Introduction to arrays

let population_2 = [11.59,67.5,55.98,5.857]
let neighbours = ["Belgium","France","England","Denmark"]
console.log(neighbours == 4)

// Iteration: for loops

for(let i=0; i < neighbours.length; i++){
    console.log(neighbours[i])
}

for (let i = 3;i > -1;i--){
    console.log(neighbours[i])
}


// Iteration: while loop

let i = 0
while(i < neighbours.length){
    console.log(neighbours[i])
    i++
}

let s= neighbours.length
while(i > -1){
    console.log(neighbours[s])
    i--
}