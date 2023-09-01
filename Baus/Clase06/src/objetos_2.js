//Podemos agregar atributos al objeto on the fly:
const persona = {
    nombre: "Juan",
    edad: 32,
    saludar: function(){
        console.log("Hola mundo");
    },
    //El lenguaje me permite declarar una función dentro del objeto.
    presentarse(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
console.log(persona);
persona['sexo'] = "Masculino";
console.log(persona);
persona.localidad = "Avellaneda";
console.log(persona);
persona.saludar();
persona.presentarse();