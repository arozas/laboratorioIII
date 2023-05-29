/*
En JavaScript, las operaciones de cortocircuito son operaciones lógicas que se evalúan de manera condicional y se detienen (cortocircuitan) tan pronto como se determina el resultado final. Estas operaciones se basan en los conceptos de evaluación perezosa (lazy evaluation) y evaluación de cortocircuito (short-circuit evaluation).

Hay dos operaciones de cortocircuito comunes en JavaScript:

Operador lógico OR (||):
El operador lógico OR evalúa los operandos de izquierda a derecha y devuelve el primer valor verdadero que encuentra o el último valor si todos los operandos son falsos. Si se encuentra un valor verdadero, no se evalúan los operandos restantes.
Ejemplo:

javascript
Copy code
const resultado = valor1 || valor2;
Si valor1 es verdadero, se asignará valor1 a resultado y no se evaluará valor2. Si valor1 es falso, se asignará valor2 a resultado.

Operador lógico AND (&&):
El operador lógico AND evalúa los operandos de izquierda a derecha y devuelve el primer valor falso que encuentra o el último valor si todos los operandos son verdaderos. Si se encuentra un valor falso, no se evalúan los operandos restantes.
Ejemplo:

javascript
Copy code
const resultado = valor1 && valor2;
Si valor1 es falso, se asignará valor1 a resultado y no se evaluará valor2. Si valor1 es verdadero, se asignará valor2 a resultado.

Estas operaciones de cortocircuito son útiles en situaciones en las que se necesita evaluar condiciones de manera eficiente y evitar evaluaciones innecesarias. Se pueden utilizar para asignar valores por defecto, verificar existencia de variables o ejecutar lógica condicional de forma más concisa.
*/

function miFuncion(){
    console.log("Se invoco miFuncion");
}

if( false & miFuncion()){
    console.log("if");
}else{
    console.log("else");
}