/*
    This refiere al scope entre las llaves. En el scope global this equivale a window
    si el script es cargado como modulo, el mismo no genera scope window

    Como los objetos producen scope, this dentro de un objeto es el objeto. 
*/
console.log(this);
window.console.log("Hola desde window");
console.log("Hola desde console log");
//this.console.log("Hola desde console log");
function miFuncion(){
    console.log(this);
}
var nombre = "Carlitos"
var objecto = {
    nombre: "Juan",
    miFuncion(){
        console.log("Estoy dentro de objeto en una funcion declarada con nombre:"+this.nombre);
        console.log(this);
    },
    despedir: () => {
        console.log("Estoy dentro de objeto en una arrow functioncon nombre:"+this.nombre);
        //Hay que tener cuidado con las arrow fuction por que cambian el scope de this.
        console.log(this);
    }
}

miFuncion();
window.miFuncion();
objecto.miFuncion();
window.objecto.miFuncion();
objecto.despedir();
//si guardo la funcion en una constante pierdo la referencia del objeto
//Y toma el scope global.
const funcion = objecto.miFuncion;
funcion();
//Esto me trae problemas cuando ejecuta la funcion por ejemplo desde otros métodos globales:
setTimeout(objecto.miFuncion, 5000);
//Esto se puede solucionar de la siguientes maneras:
//Por medio de una arrow function que en este caso va establecer el scope en el objeto
setTimeout(()=>{
    objecto.miFuncion()
}, 5000);

const mascota = {
    nombre: "colita",
    edad: 3
}
//Por medio de la función call de las funciones donde establezco el this o scope de la función:
const saludar = objecto.miFuncion;

saludar.call(objecto);
saludar.call(mascota);
console.log("Forin:");
//Este metodo call me sirve para identificar elementes en comun entre distintos objetos:
for (const key in objecto) {
    if (Object.hasOwnProperty.call(mascota, key)) {
        const element = mascota[key];
        console.log(element);
    }
}