//déclarations
let balls = "Pétanque"
let nbBall = 3

let sports = ["Pétanque", "Palet vendéen", "Fléchettes", "Molky"]

console.group("Déclarations")
console.log(typeof balls)
console.log(typeof nbBall)
console.table(sports)
console.log(sports)
console.groupEnd()

//structure de code
for (let i = 0; i < sports.length ; i++) {
    console.log(sports[i])
}
for (const sport of sports) {
    console.log(sport)
}
sports.forEach(function (value){
    console.log(value)
})
sports.forEach((value) =>   console.log(value))

//functions
function getSport(index){
    return sports[index]
}

console.log("-------------------")
console.log(getSport(2))

//anonyme
const getSport2 = function(index){
    return sports[index]
}
console.log(getSport2)
console.log(getSport2(3))

//fléchée
const getSport3 = (index) => sports[index]
const getSport4 = (index) => { return sports[index] }
console.log(getSport3(0))

console.log("**************************")
//fonction auto-appelante, auto-invocante
console.log(
    ((index) => sports[index])(2)
)








