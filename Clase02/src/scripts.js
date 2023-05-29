console.log("IMPORTANTE:");
console.log("Leer los conmentarios de /src/scripts.js para entender lo que pasa en la consola:");
/*
    En JavaScript, existen dos formas comunes de definir una función: mediante declaración o mediante expresión.
    Una función declarada se define utilizando la palabra clave "function" seguida del nombre de la función, los parámetros de entrada entre paréntesis y el cuerpo de la función entre llaves. Por ejemplo:
 */
function saludar(){
    console.log('Hola mundo, desde una función declarada. El segundo saludo es desde un puntero');
}

var punteroSaludar = saludar;

saludar();
punteroSaludar();

/*
    Una función expresada se define asignando una función anónima a una variable o constante utilizando la palabra clave "const", "let" o "var".
    Por ejemplo:
 */
var despedir = function(){
    console.log("Chau mundo, desede una función expresada");
}

despedir();
/*
    Hay que tener cuidado con las funcione expresadas cuando se declaran en una variable, por que esta puede cambiar si no se le presta atención y perder la referencia a la función anonima que tenia declara, como en el siguiente ejemplo donde se le asigna un número y deja de alojar en memoria a la función.
*/
despedir = 24;

console.log("Ahora despedir al ser una variable, cambió su valor y es: "+despedir);
/*
    La principal diferencia entre una función declarada y una función expresada es que las funciones declaradas están disponibles en el ámbito global y pueden ser llamadas desde cualquier parte del código, mientras que las funciones expresadas solo están disponibles dentro del ámbito en el que se han definido y solo se pueden llamar después de haber sido definidas.

    Por ejemplo, si tenemos una función declarada llamada "saludar2":
*/

saludar2(); //Funciona correctamente

function saludar2(){
    console.log('Estoy en una función declarada que se llamó antes de declarar.');
}

//Podemos llamarla desde cualquier parte del código, incluso antes de que se defina.

//Por otro lado, si tenemos una función expresada llamada "saludar3":

console.log(saludar3); //No funciona, no encuentra la función y la muestra como undefined.

var saludar3 = function() {
    console.log('Estoy en una función expresada que se llamó antes de declarar y esta undefined, esto lo lees porque se ejecutó después.');
}

saludar3();
/*
    Generará un error al tratar de llamar la función antes de que se defina, ya que la función solo está disponible después de la asignación.

    En resumen, la principal diferencia entre una función declarada y una función expresada es el ámbito en el que están disponibles. Las funciones declaradas están disponibles en todo el ámbito global, mientras que las funciones expresadas solo están disponibles dentro del ámbito en el que se han definido. 

    En JavaScript, las funciones expresadas y las funciones lambda son muy similares en su sintaxis, pero tienen algunas diferencias importantes en su comportamiento.

    Una función expresada es una función que se define y se asigna a una variable o constante, y se puede utilizar en cualquier lugar donde se necesite una función. Por ejemplo:
*/
const sum = function(a, b) {
    return a + b;
  }
/*
    Aquí, se ha definido una función llamada "sum" y se ha asignado a una constante llamada "sum". Esta función puede ser llamada en cualquier momento utilizando la constante "sum", como en el siguiente ejemplo:
*/
console.log("Suma de 2 + 3 desde una función expresada:");
console.log(sum(2, 3)); // Output: 5
/*
    Por otro lado, una función lambda es una forma abreviada de escribir una función expresada utilizando la sintaxis de flecha (=>). La principal diferencia entre una función lambda y una función expresada es que una función lambda no tiene un nombre definido y puede ser asignada directamente a una variable o constante. 
    Por ejemplo:
*/
const suma = (a, b) => {
    return a + b;
}
console.log("Suma de 2 + 3 desde una función lamba con retorno:");
console.log(sum(2, 3)); // Output: 5

/*
    La principal ventaja de las funciones lambda es que son más concisas y fáciles de leer que las funciones expresadas. Por ejemplo, la misma función "sum" se puede escribir de forma más breve como una función lambda:
*/
const sumaLamba = (a, b) => a + b;
console.log("Suma de 2 + 3 desde una función lamba sin retorno:");
console.log(sumaLamba(2, 3));
/*
    Aquí, la función lambda se ha escrito en una sola línea y no es necesario utilizar la palabra clave "return", ya que la expresión a la derecha de la flecha se evalúa automáticamente.

    En resumen, tanto las funciones expresadas como las funciones lambda son formas de definir funciones en JavaScript, pero la principal diferencia entre ellas es que una función lambda es una forma abreviada de escribir una función expresada utilizando la sintaxis de flecha, y no tiene un nombre definido.
    
    En JavaScript, hay tres formas de declarar variables: "var", "let" y "const". Cada una tiene diferencias en su alcance y comportamiento, lo que puede afectar cómo se utilizan en el código.

    La declaración "var" se ha utilizado desde versiones antiguas de JavaScript para declarar variables. Las variables declaradas con "var" tienen un alcance de función o global, lo que significa que pueden ser accedidas en cualquier lugar dentro de la función o el archivo donde se declararon. Además, las variables declaradas con "var" pueden ser redeclaradas y reasignadas en cualquier lugar de la función, lo que puede conducir a errores y comportamientos inesperados.
*/
console.log("Muestro el funcionamiento de las variables var:");
function example() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x); // Output: 2
    }
    console.log(x); // Output: 2
  }
  
  example();
/*
    En el ejemplo anterior, la variable "x" se declara dos veces utilizando "var", y su valor se sobrescribe dentro del bloque "if". Como resultado, el valor final de "x" es 2 en lugar de 1.

    La declaración "let" se introdujo en versiones más recientes de JavaScript y tiene un alcance de bloque, lo que significa que solo se puede acceder a la variable dentro del bloque donde se declaró. Las variables declaradas con "let" pueden ser reasignadas, pero no pueden ser redeclaradas en el mismo bloque.
 */ 
console.log("Muestro el funcionamiento de las variables let:");
function example() {
    let x = 1;
    if (true) {
      let x = 2;
      console.log(x); // Output: 2
    }
    console.log(x); // Output: 1
  }
  
  example();
  /*
    En el ejemplo anterior, la variable "x" se declara dos veces utilizando "let", pero debido a que tienen un alcance de bloque separado, no hay sobrescritura de valores. El valor final de "x" en el bloque "if" es 2, mientras que el valor final de "x" en la función es 1.

    Por último, la declaración "const" se utiliza para declarar variables constantes que no pueden ser reasignadas después de su inicialización. Las variables declaradas con "const" también tienen un alcance de bloque como las variables declaradas con "let".
  */
console.log("Muestro el funcionamiento de las variables const:");
    function example() {
        const x = 1;
        if (true) {
          const x = 2;
          console.log(x); // Output: 2
        }
        console.log(x); // Output: 1
      }
      
      example();
/*
    En el ejemplo anterior, la variable "x" se declara como constante, por lo que no puede ser reasignada. Al igual que con la declaración "let", la variable "x" dentro del bloque "if" no afecta al valor de "x" fuera del bloque.

    En resumen, la diferencia entre "var", "let" y "const" radica en su alcance y comportamiento en cuanto a reasignación y redeclaración de variables. Se recomienda utilizar "let" y "const" en lugar de "var" en código moderno de JavaScript para evitar errores y mejorar la legibilidad y mantenibilidad del código.

    Cabe destacar que const es una constante en lo que se refiere a dirección de memoria, y que en el caso de un array, se podria cambiar el valor con el método push.

    Ejemplo:
*/
const vec = [1,2,3,4,5];
const vec2 = [];

console.log("Muestro el array en const vec:");
console.log(vec);
console.log("Muestro el array en const vec2:");
console.log(vec2);

console.log("Agrego a vec2 el valor 5");
vec2.push(5);
console.log("Muestro el array en const vec:");
console.log(vec);
console.log("Muestro el array en const vec2:");
console.log(vec2);

/*
    Todo lo que nos devuelva uno referencia vamos a guardarlo en una variable const. De esta forma podemos guardar la referencia de memoria.

    Ahora si quisieramos copiar los valores de un array constante a otro lo hacemos usando el operador de propagación: ...
    
    Ejemplo:
*/

const vec3 = [...vec];
console.log("Muestro el array en const vec3 con el contenido copiado de la const vec:");
console.log(vec3);

vec3[0] = 100;

console.log("Muestro el array en const vec3 esta desacoplado de vec al cambiar la posición 0:");
console.log(vec3);