function Saludar2(){
    alert('Este alert esta en una función de JS en el archivo Script, igual aun falta para que sea una buena pracitica.')
}
function handlerClick()
{
    alert('Este alert esta en una función de JS en el archivo Script, y pasada por un event listener en el archivo script y no embebido en el html.')
}

let botonTres;
window.addEventListener("load", function(){
    botonTres = document.getElementById("btn-saludo3").addEventListener("click", function()
    {
        alert('Este alert esta en una función de JS en el archivo Script, y pasada por un event listener en el archivo script y no embebido en el html.')
    });
});

/*
La primera función Saludar2() simplemente muestra una alerta con un mensaje en el navegador.

La segunda función handlerClick() también muestra una alerta con un mensaje en el navegador. Esta función se utilizará como manejador de eventos para un elemento en el HTML.

La tercera parte del código crea un objeto llamado botonTres y lo inicializa como null. Luego, se agrega un evento "load" al objeto window para que se ejecute una función anónima cuando se carga la página. Dentro de esta función, se obtiene un elemento del HTML con el id "btn-saludo3" utilizando el método document.getElementById(). Luego, se agrega un evento "click" a este elemento y se asigna la función anónima como su manejador de eventos. La función anónima muestra una alerta con un mensaje en el navegador.

En resumen, el código define dos funciones que muestran alertas con mensajes en el navegador y una tercera función que asigna un manejador de eventos a un botón en el HTML. Al hacer clic en este botón, se muestra otra alerta con un mensaje en el navegador. 
*/