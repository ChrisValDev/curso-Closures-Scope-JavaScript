// variables

let a; // declarando
let b = 'b'; // declaramos = asiganmos o inicializamos
b = 'bb'; // reasignando
let a = 'aa'; // redeclaracion


//Global Scope
let fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);