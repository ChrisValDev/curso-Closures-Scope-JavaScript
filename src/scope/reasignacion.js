// Var

var firstName; // declaracion
firstName = 'Oscar'; // asignacion (inicializacion)
console.log(firstName); // mostrar

var lastName = 'David'; // declaracion y asignacion
lastName = 'Ana'; // reasignacion
console.log(lastName); // mostrar

var secondName = 'David'; // declaracion y asignacion
var secondName = 'Ana'; // redeclaracion
console.log(secondName); //mostrar

// Let

let fruit = 'Apple'; //declaracion y asignacion
fruit = 'Kiwi'; // reasignacion
console.log(fruit); // mostrar

let fruit = 'Banana'; // redeclaracion no se puede en let
console.log(fruit); // SyntaxError La variable 'fruit' ya ha sido declarada.

// Const

const animal = 'dog'; // declaracion y asignacion
animal = 'cat'; // const no permite reasignacion ni redeclaracion.
console.log(animal); //TypeError: Asignacion para una variable constante.

const vehicles = [];
vehicles.push("Tijeras");

vehicles.pop();
console.log(vehicles);// en este ejemplo podemos ver que no se redeclara o reasigna un valor a la const, por medio de metodos es que mutamos el array para no confundir la escencia de const.