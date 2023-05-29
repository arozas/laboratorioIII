const formulario = document.forms[0];
formulario.addEventListener('submit', (e)=> {
    /*
    Cortamos por defecto el comportamiento del envio del submit, permitiendo que podamos agregar más código.
    Sin el preventDefault, al accionar el submit nos envia a la url del action del html.
    El preventDefault, nos ayuda a abortar este comportamiento por Defecto.
    En este caso lo estamos manejando desde el callback, que es lo que se va ejecutar cuando se lance el submit.
    De esta forma podemos hacer una single page application.
    */
    e.preventDefault(); 
    console.log("Apreté submit");
});
document.getElementById("txtNombre").addEventListener("keydown", (e) =>{
    /*
    De esta forma prevengo el comportamiento por default, que en este caso es escribir.
    Analizando el evento puedo ver que tecla se precionó y en este caso decidir que letra dejo o no pasar.
    */
    //e.preventDefault();
    console.log(e);
});