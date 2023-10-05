'use strict';
pi = 3.1416;
console.log(pi);

//En este ejemplo al activar el modo estricto 'use strict' no permite darle un valor a pi, ya que no existe la declaracion de una variable como puede ser con var, let o const.

function myFunction() {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction());

//En este ejemplo de funcion sucede lo mismo que el ejemplo anterior.