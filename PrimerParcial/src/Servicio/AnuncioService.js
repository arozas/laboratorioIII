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
      anuncios.push(anuncio);
      localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }
  
    actualizarAnuncio(id, anuncio) {
      const anuncios = this.getAnuncios();
      const index = anuncios.findIndex((a) => a.id === id);
      if (index !== -1) {
        anuncios[index] = anuncio;
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  
    eliminarAnuncio(id) {
      const anuncios = this.getAnuncios();
      const index = anuncios.findIndex((a) => a.id === id);
      if (index !== -1) {
        anuncios.splice(index, 1);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
      }
    }
  }
  