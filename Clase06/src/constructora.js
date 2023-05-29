function Persona(nombre, edad) {
  let sexo = "";
  this.nombre = nombre;
  this.edad = edad;

  this.getSexo = function () {
    return sexo;
  };
  this.setSexo = function (value) {
    sexo = value;
  };
}

Persona.saludar = function () {
  console.log("Hola soy " + Persona.queSoy);
};
Persona.queSoy = "Una Persona";
Persona.prototype.presentarse = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
};

const per1 = new Persona("Juan", 34);
const per2 = new Persona("Lucia", 30);

console.log(per1);
console.log(per2);

per1.presentarse();
per2.presentarse();

per1.setSexo("M");

console.log(per1.getSexo());

Persona.saludar();




