/*
    (first class citizen)

    En JavaScript, las funciones son consideradas ciudadanos de primera clase. Esto significa que las funciones en JavaScript pueden ser asignadas a variables, pasadas como argumentos a otras funciones, devueltas como resultados de funciones y almacenadas en estructuras de datos, como cualquier otro valor.
        - Se puede asignar a una varible.
        - Se puede pasar como un argumento a una función.
        - Se puede retornar como resultado de ejecutar una función.

    En programación, el concepto de "first-class citizen" (ciudadano de primera clase) se refiere a una característica o propiedad de un lenguaje de programación que trata a ciertos elementos, como funciones o tipos de datos, como ciudadanos de primera clase.

    Cuando un elemento es considerado ciudadano de primera clase en un lenguaje de programación, significa que ese elemento puede ser tratado de la misma manera que otros elementos comunes, como variables y parámetros de funciones. Esto implica que se pueden asignar a variables, pasar como argumentos a funciones, devolver como resultados de funciones y almacenar en estructuras de datos.

    Las características de los ciudadanos de primera clase pueden variar según el lenguaje de programación, pero en general implica que el elemento tiene un alto nivel de flexibilidad y capacidad de manipulación en el código. Algunos ejemplos de elementos que pueden considerarse ciudadanos de primera clase en diferentes lenguajes de programación son:

        Funciones: en lenguajes de programación que admiten funciones como ciudadanos de primera clase, se pueden asignar a variables, pasar como argumentos a otras funciones y devolver como resultados de funciones. Esto permite tratar a las funciones como cualquier otro valor.

        Objetos: en lenguajes orientados a objetos, los objetos suelen ser ciudadanos de primera clase, lo que significa que se pueden asignar a variables, pasar como argumentos y almacenar en estructuras de datos.

        Tipos de datos primitivos: en algunos lenguajes, los tipos de datos primitivos, como enteros o cadenas de texto, son tratados como ciudadanos de primera clase y se pueden manipular de diversas formas.

    El concepto de ciudadano de primera clase es importante porque permite una mayor flexibilidad y expresividad en el código. Permite utilizar elementos de manera más dinámica y crear abstracciones más poderosas en la programación.
*/

// Se puede asignar a una variable:
const sumar = function (a, b) {
    return a + b;
};
console.log("Sumar desede una variable con una función asignada: " + sumar(2,5));

//Se puede pasar como un argumento a una función.
function operar(a,b, operacion){
    return operacion(a, b);
}
console.log("Sumar con una funcion pasada como parametro: " + operar(2,8, sumar));

//Se puede retornar como resultado de ejecutar una función.
function crearSumador(a) {
    return function (b) {
        return a + b;;
    };
}
const sumarDos = crearSumador(2);
console.log("Sumar con retornar como resultado de ejecutar una función: "+sumarDos(4))

//Las funcione obviamente son objetos.