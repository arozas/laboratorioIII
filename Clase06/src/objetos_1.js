/*
    Un objeto se puede declarar de tres maneras:
    * - Objeto literal.
    * - Función constructora (new).
    * - Object.create();
*/
/*
    Objeto literal:
    Un objeto literal se puede instanciar con apertura y cierre de llaves.
    Al interprete de js le estoy diciendo que reserve memoria para un objeto.

    Al mostrarlo por medio de un console log, podemos ver que figura el objeto vacío. 
    Pero el objeto tiene prototype que es otro objeto con sus propias propiedades.

    Si vemos las propiedades podemos ver que en la propiedad constructor nos va a decir
    que el constructor del objeto fué Object(). Todos los objetos en la punta de la cadena
    prototipal van a tener el objeto object.
*/
const objeto = {};
console.log(objeto);
/*
    Función constructora (new):

    objetoDos: Podemos ver en primera instancia que no hay cambios al generar un objeto
    por medio de un constructor o de forma literal.

    objetoTres: Podemos ver como cambió el prototype por Number y que contiene el valor 124
    como valor primitivo. El prototype tiene un constructor Number() y a la vez tiene metodos
    de clase y ademas el objeto Number tiene un prototype de Object con un valor primitivo de 
    cero. Esto es una forma de trabajar de JS, que funciona con un wrapper. En JavaScript,
    los tipos de datos primitivos (como números, cadenas de texto y booleanos) tienen objetos
    asociados conocidos como "wrapper objects". Estos objetos son temporales y se crean 
    automáticamente cuando se accede a los métodos y propiedades de los tipos primitivos.

    Todo lo que no es un dato primitivo es un objeto en JavaScript, también las funciones,
    como ya vimos todos los arrays son pares de clave valor.
*/
const objetoDos = new Object();
console.log(objetoDos);
const objetoTres = new Object(124);
console.log(objetoTres);
const objetoCuatro = new Object("Hola");
console.log(objetoCuatro);
const objetoCinco = new Object(true);
console.log(objetoCinco);

const miObjeto= {
    cadena: "palabra",
    numero: 23,
    array: [2,1,4,5,6],
    objeto: {nombre: "José", Edad:23, Trabaja:false},
    booleano: false,
    funcion: function(){
        console.log("Hola mundo");
    },
    /*
        Puedo definir atributos con cadena y espacios, pero luego no puedo acceder 
        con el operador punto, hay implementaciones de esta forma de definir claves
        de atributos, pero no son lo más común.
    */
    "3d":true,
    "una key":"algo"
};
console.log(miObjeto);
console.log(miObjeto.cadena);
console.log(miObjeto['cadena']);
let atributo = "objeto";
console.log(miObjeto[atributo]);
console.log(miObjeto['una key']);

//con el método entries de Object me genera y muestra el objeto como un array de arrays
// y de esta forma destructurar arrays. Algunos formas de obtener clave valor de un Objeto:
const entradas = Object.entries(miObjeto);
console.log(entradas);
console.log("*********************************************************");
console.log("Recorro Object.entries con un for:");
console.log("*********************************************************");
for(let i = 0; i < entradas.length; i++){
    console.log(entradas[i][0], "=", entradas[i][1])
}
console.log("*********************************************************");
console.log("Recorro Object.entries con un for usando un array de variables:");
console.log("*********************************************************");
for(let i = 0; i < entradas.length; i++){
    let[key, value] = entradas[i];
    console.log(key, "=", value)
}
console.log("*********************************************************");
console.log("Recorro Object.entries con un forEach:");
console.log("*********************************************************");
entradas.forEach(entrada => {
    let[key, value] = entrada;
    console.log(key, "=", value)
});
console.log("*********************************************************");
console.log("Recorro Object.entries con un forEach sin desestructurar: ");
console.log("*********************************************************");
entradas.forEach(entrada => {
    console.log(entrada[0], "=", entrada[1])
});
console.log("*********************************************************");
console.log("Recorro Object.entries con un forof: ");
console.log("*********************************************************");
for (const entrada of entradas) {
    console.log(entrada[0], "=", entrada[1])
}
console.log("*********************************************************");
console.log("Recorro Object.entries con constantes de claves y valores: ");
console.log("*********************************************************");
const claves = Object.keys(miObjeto);
const valores = Object.values(miObjeto);
for(let i = 0; i < claves.length; i++){
    console.log(claves[i], "=", miObjeto[claves[i]]);
}
console.log("*********************************************************");
console.log("Recorro Object.entries forof de claves: ");
console.log("*********************************************************");
for (const clave of claves) {
    console.log(clave, "=", miObjeto[clave]);
}
console.log("*********************************************************");
console.log("Recorro Object.entries foreach de claves: ");
console.log("*********************************************************");
claves.forEach(clave => {
    console.log(clave, "=", miObjeto[clave]);
});
console.log("*********************************************************");
console.log("Recorro el objeto usando forin: ");
console.log("*********************************************************");
for (const clave in miObjeto) {
    console.log(clave, "=", miObjeto[clave]);
}
/*
    Lo interesante del forin es que me permite obtener los indices del objeto o array.
    Tentiendo muchas aplicaciones para cuando queremos ver la clave de array indexados
*/

// Un uso interesante para Object.Values:
const personas = {
    ale:{
        nombre: "Alejandro",
        edad: 37
    },
    beto:{
        nombre: "Alberto",
        edad: 27
    },
    tincho:{
        nombre: "Martin",
        edad: 17
    }
}
console.log("*********************************************************");
console.log("Extraigo un array de objetos de un objeto: ");
console.log("*********************************************************");
//De esta forma obtengo solo un array de personas:
const gente = Object.values(personas);
console.log(gente); 

