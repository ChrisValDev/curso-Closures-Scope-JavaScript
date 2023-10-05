const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna (Closure)
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        
        return child();
    }

    return parent();
}

myFunction();

//Closure : permite que una función "recuerde" y acceda a las variables y parámetros de la función externa en la que se declaró, incluso cuando esa función externa ya no está activa

// Ambito lexico: Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.

function creaFuncionContadora() {
    let contador = 0;
  
    function incrementaContador() {
      contador++;
      console.log(contador);
    }
  
    return incrementaContador;
  }
  
  const contador1 = creaFuncionContadora();
  contador1(); // Imprimirá 1
  contador1(); // Imprimirá 2
  
  const contador2 = creaFuncionContadora();
  contador2(); // Imprimirá 1 (es un nuevo contador independiente)
  