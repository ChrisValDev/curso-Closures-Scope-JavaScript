//Error
console.log(nameOfDog); // undefined
var nameOfDog = "elmo";

//Correcto
var nameOfDog = "elmo";
console.log(nameOfDog); // elmo


//Error
nameOfCat();
function nameOfCat() {
    console.log(`The best pet is ${cangrejo}`); //The best pet is undefined
}
var cangrejo = "cangrejito";

//Correcto

var cangrejo = "cangrejito";
nameOfCat();
function nameOfCat() {
    console.log(`The best pet is ${cangrejo}`); //The best pet is cangrejito
}

