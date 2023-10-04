function fruits() {
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();
//En este ejemplo se muestra por que es importante dejar de usar var para declarar variables. Evitar que se rompa el codigo con variables globales.