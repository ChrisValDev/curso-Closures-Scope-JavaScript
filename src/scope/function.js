function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); //En este console.log, en consola muestra que la variable userName no esta definida, ya que solo esta definida en el scope local de la funcion, el console.log esta en scope global.