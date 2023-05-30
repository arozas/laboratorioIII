/**
 * Servicio de Anuncios.
 * Se encarga de gestionar la persistencia de los anuncios utilizando el almacenamiento local.
 */
class AnuncioService {
    /**
     * Crea una instancia del servicio de anuncios.
     * Inicializa la lista de anuncios vacía.
     */
    constructor() {
      /**
       * Lista de anuncios.
       * @type {Array<Anuncio>}
       */
      this.anuncios = [];
    }
  
    /**
     * Obtiene la lista de anuncios almacenados.
     * @returns {Array<Anuncio>} Lista de anuncios.
     */
    getAnuncios() {
      const anuncios = localStorage.getItem('anuncios');
      this.anuncios = anuncios ? JSON.parse(anuncios) : [];
      return this.anuncios;
    }
  
    /**
     * Guarda un nuevo anuncio.
     * @param {Anuncio} anuncio - Anuncio a guardar.
     */
    guardarAnuncio(anuncio) {
      const anuncios = this.getAnuncios();
      anuncio.id = Date.now().toString();
      anuncios.push(anuncio);
      localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }
  
    /**
     * Actualiza un anuncio existente en la lista.
     * @param {number} index - Índice del anuncio a actualizar.
     * @param {Anuncio} anuncio - Anuncio actualizado.
     */
    actualizarAnuncio(index, anuncio) {
      const anuncios = this.getAnuncios();
      if (index >= 0 && index < anuncios.length) {
        anuncios[index] = anuncio;
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  
    /**
     * Elimina un anuncio de la lista.
     * @param {number} index - Índice del anuncio a eliminar.
     */
    eliminarAnuncio(index) {
      const anuncios = this.getAnuncios();
      if (index >= 0 && index < anuncios.length) {
        anuncios.splice(index, 1);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  }
  