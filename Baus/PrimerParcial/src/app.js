/**
 * Evento que se ejecuta cuando el DOM ha sido completamente cargado.
 * Inicializa el controlador de anuncios y llama al método de inicialización.
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * Controlador de anuncios.
     * @type {AnuncioController}
     */
    const anuncioController = new AnuncioController();
  
    // Inicializa el controlador de anuncios
    anuncioController.initialize();
  });
  