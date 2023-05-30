class AnuncioService {
    constructor() {
      this.anuncios = [];
    }
  
    getAnuncios() {
      const anuncios = localStorage.getItem('anuncios');
      this.anuncios = anuncios ? JSON.parse(anuncios) : [];
      return this.anuncios;
    }
  
    guardarAnuncio(anuncio) {
      const anuncios = this.getAnuncios();
      anuncio.id = Date.now().toString();
      anuncios.push(anuncio);
      localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }
  
    actualizarAnuncio(index, anuncio) {
      const anuncios = this.getAnuncios();
      if (index >= 0 && index < anuncios.length) {
        anuncios[index] = anuncio;
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  
    eliminarAnuncio(index) {
      const anuncios = this.getAnuncios();
      if (index >= 0 && index < anuncios.length) {
        anuncios.splice(index, 1);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  }
  