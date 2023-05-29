/*
En JavaScript, a partir de la versión ES6 (ECMAScript 2015), se introdujo el concepto de "clases" como una sintaxis más sencilla y legible para trabajar con objetos y herencia. Aunque JavaScript sigue siendo un lenguaje basado en prototipos, las clases en JavaScript son una capa de abstracción sobre la herencia basada en prototipos existente.
*/
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy un animal llamado ${this.nombre}`);
  }

  //setter y getter como funciónes.
  setNombre(value){
    this.nombre = value;
  }
  getNombre(){
    return this.nombre
  }
  //setter y getter como propiedades
  set Nombre(value){
    this.nombre = value;
  }
  get Nombre(){
    return this.nombre
  }
}

class Mascota extends Animal {
  constructor(nombre, tipo) {
    //con el operarador super llama al constructor de la clase base.
    super(nombre);
    this.tipo = tipo;
  }

  presentarse() {
    console.log(`Soy una mascota de tipo ${this.tipo}`);
  }

  static funcionEstatica() {
    console.log("Soy un método estatico de Animal.");
  }
}

// Crear instancias y probar la herencia
const miAnimal = new Animal("León");
miAnimal.saludar(); // Imprime: Hola, soy un animal llamado León

const miMascota = new Mascota("Max", "Perro");
miMascota.saludar(); // Imprime: Hola, soy un animal llamado Max
miMascota.presentarse(); // Imprime: Soy una mascota de tipo Perro
Mascota.funcionEstatica();

console.clear();

const objeto = {
  nombre: "Juan",
  edad: 30,
};
console.log(objeto);
//puedo agregar un atributo estatico por fuera del objeto.
objeto.email = "juancito@email.com";
console.log(objeto);
//y borrarlo con el operador delete:
delete objeto.email;
console.log(objeto);
