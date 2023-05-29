/*
JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer y escribir. Se utiliza ampliamente en la comunicación entre sistemas y en el almacenamiento de datos estructurados.

Un JSON está compuesto por una colección de pares clave-valor, donde las claves son cadenas de texto y los valores pueden ser de cualquier tipo de dato válido en JSON: cadenas de texto, números, booleanos, arrays, objetos y valores nulos.

La estructura de un JSON sigue la sintaxis de los objetos en JavaScript, lo que lo hace familiar y fácil de trabajar en aplicaciones web. Un ejemplo básico de JSON sería:
{
    "nombre": "Juan",
    "edad": 25,
    "ciudad": "Madrid",
    "hobbies": ["fútbol", "música", "lectura"],
    "activo": true,
    "direccion": {
      "calle": "Calle Mayor",
      "numero": 123
    }
}
En este ejemplo, el JSON representa información sobre una persona. Tiene claves como "nombre", "edad", "ciudad", "hobbies", "activo" y "direccion". Algunos de los valores son cadenas de texto, números, un array y un objeto anidado.

JSON se utiliza en diversas áreas, como la transmisión de datos en aplicaciones web y servicios API, el almacenamiento de configuraciones y la transferencia de datos entre diferentes lenguajes de programación. Tanto JavaScript como muchos otros lenguajes de programación tienen funciones y métodos integrados para analizar (parsear) y generar JSON, lo que facilita su manipulación en aplicaciones.
*/

const miObjeto = {
  cadena: "palabra",
  numero: 23,
  array: [2, 1, 4, 5, 6],
  objeto: {
    nombre: "José",
    Edad: 23,
    Trabaja: false,
  },
  booleano: false,
  funcion: function () {
    console.log("Hola mundo");
  },
  "3d": true,
  "una key": "algo",
};

const misObjetos = [{
    cadena: "objetoUno",
    numero: 23,
    array: [2, 1, 4, 5, 6],
    objeto: {
      nombre: "José",
      Edad: 23,
      Trabaja: false,
    },
    booleano: false,
    funcion: function () {
      console.log("Hola mundo");
    },
    "3d": true,
    "una key": "algo",
  },
  {
    cadena: "objetoDos",
    numero: 23,
    array: [2, 1, 4, 5, 6],
    objeto: {
      nombre: "José",
      Edad: 23,
      Trabaja: false,
    },
    booleano: false,
    funcion: function () {
      console.log("Hola mundo");
    },
    "3d": true,
    "una key": "algo",
  },
  {
    cadena: "objetoTres",
    numero: 23,
    array: [2, 1, 4, 5, 6],
    objeto: {
      nombre: "José",
      Edad: 23,
      Trabaja: false,
    },
    booleano: false,
    funcion: function () {
      console.log("Hola mundo");
    },
    "3d": true,
    "una key": "algo",
  },
  {
    cadena: "palabra",
    numero: 23,
    array: [2, 1, 4, 5, 6],
    objeto: {
      nombre: "José",
      Edad: 23,
      Trabaja: false,
    },
    booleano: false,
    funcion: function () {
      console.log("Hola mundo");
    },
    "3d": true,
    "una key": "algo",
  }]

console.log(typeof miObjeto);
objetoString = JSON.stringify(miObjeto);
console.log(objetoString);
const otroObjeto = JSON.parse(objetoString);
console.log(typeof otroObjeto);
console.log(otroObjeto);

/*
     La idea de tranformar a Json un objeto es guardar los datos para su transmisión. Por eso no guarda los métodos del objeto.

    El localStorage es un mecanismo de almacenamiento de datos en el navegador web que permite guardar datos de forma persistente en el dispositivo del usuario. Es una parte del Web Storage API, que también incluye el sessionStorage.

    El localStorage proporciona una interfaz sencilla para almacenar pares clave-valor en el navegador. Los datos almacenados en el localStorage no tienen una fecha de expiración y se mantienen incluso después de que el usuario cierre el navegador y reinicie el dispositivo.

    Para utilizar el localStorage, se puede acceder a él a través del objeto window.localStorage en JavaScript. Aquí tienes algunos ejemplos de cómo se puede utilizar:

    Almacenar un valor en el localStorage:
    
    localStorage.setItem('nombre', 'Juan');
    En este ejemplo, se utiliza el método setItem() para almacenar el valor 'Juan' con la clave 'nombre' en el localStorage.

    Obtener un valor del localStorage:
   
    const nombre = localStorage.getItem('nombre');
    console.log(nombre); // Imprime: Juan
    En este caso, se utiliza el método getItem() para obtener el valor almacenado en el localStorage con la clave 'nombre'.

    Eliminar un valor del localStorage:

    localStorage.removeItem('nombre');
    Este código eliminará el valor almacenado en el localStorage con la clave 'nombre'.

    El localStorage solo permite almacenar datos como cadenas de texto. Si se necesita almacenar datos complejos, como objetos JavaScript, se deben convertir a una cadena JSON utilizando JSON.stringify() antes de almacenarlos, y luego se pueden convertir de nuevo a su formato original utilizando JSON.parse() al obtenerlos del localStorage.

    Es importante tener en cuenta que el localStorage está sujeto a límites de almacenamiento, que varían según el navegador y el dispositivo del usuario. En caso de alcanzar o exceder el límite de almacenamiento, pueden producirse errores al intentar guardar nuevos datos en el localStorage. Por lo tanto, es recomendable administrar cuidadosamente los datos almacenados y considerar el tamaño y la cantidad de datos que se guardarán.
 */

    console.clear();
    localStorage.setItem("objeto", objetoString);
    localStorage.setItem("objetoDos", JSON.stringify(miObjeto));
    localStorage.setItem("lista", JSON.stringify(misObjetos));

    const listaObjetos = localStorage.getItem("lista") ? JSON.parse(localStorage.getItem("lista")) : [];

    console.log(listaObjetos);