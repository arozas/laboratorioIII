/*
   En los objetos debemos tener los métodos que son propios de la instancia.
   Todos los métodos que queremos que compartan los objetos de distinto tipo
   deben estár en el prototype, que es el objeto que comparten todos las instancias.

   Cuando hablamos de herencia en JavaScript, hablamos de la herencia del prototipo.
   Como todos los metodos de una instacia superior van al prototype, se va armando
   unna cadena prototipal.
*/

//Una función constructor genera un espacio en memoria refernciado por this.
function Animal(tipo, edad, sexo){
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
}
Animal.prototype.saludar = function(){
    console.log(`Hola soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años.`)
}
Animal.prototype.cagar = function(){
    console.log(`Hola soy un animal y cago donde quiero.`)
}
function Mascota(nombre, tipo, edad, sexo, vacunado){
    /*
        Instancio una mascota con el metodo call, ya que es una funcíon
        y como primer parametro le referencio a la nueva instancia con this.
        De esta forma queda referenciado dentro del espacio de memoria de 
        Mascota.
    */
    Animal.call(this, tipo, edad, sexo);
    this.nombre = nombre;
    this.vacunado = vacunado;    
}
Mascota.prototype.sonar = function(sonido){
    console.log(sonido);
}
/*
    De esta forma aún falta un pasa para generar la herencia del objeto, ya que me falta
    que el prototipo de mascota sea el de animal.

    Object --> Animal --> Mascota

    Esto lo hacemos por medio del método setPrototypeOf de Object.
*/
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
    /*
        Ejemplo de como sobreescridir un método, en heredado. Esta sintaxiso forma parte de una
        de las implementacione multiparadigma de JavaScript, donde implementa la programación
        orientada a objetos y el paradigma funcional. 
    */
Mascota.prototype.saludar =  function(){
    console.log(`Hola soy una mascota, me llamo ${this.nombre}, soy del tipo ${this.tipo},
     de sexo ${this.sexo} y tengo ${this.edad} años y 
     ${this.vacunado? "estoy vacunado": "no estoy vacundo"}`);
}
    /*
        En este ejemplo con saludar dos ves de usar un operador ternario:
             this.vacunado? "estoy vacunado": "no estoy vacundo"}
        Vamos usar un operador de cortocircuito.
    */
Mascota.prototype.saludarDos =  function(){
    console.log(`Hola soy una mascota, me llamo ${this.nombre}, soy del tipo ${this.tipo},
     de sexo ${this.sexo} y tengo ${this.edad} años y 
     ${this.vacunado && "estoy vacunado"}`);
}
const animal = new Animal("Vaca",3,"Hembra");
const mascota = new Mascota("Chuchu","Perrito",3,"Macho",true);
console.log(animal);
console.log(mascota);