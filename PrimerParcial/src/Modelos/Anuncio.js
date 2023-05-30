class Anuncio {
    constructor(titulo, transaccion, descripcion, precio, banios, autos, dormitorios) {
      this.validarTitulo(titulo);
      this.validarTransaccion(transaccion);
      this.validarDescripcion(descripcion);
      this.validarPrecio(precio);
      this.validarBanios(banios);
      this.validarAutos(autos);
      this.validarDormitorios(dormitorios);
      
      this.id = null;
      this.titulo = titulo;
      this.transaccion = transaccion;
      this.descripcion = descripcion;
      this.precio = precio;
      this.banios = banios;
      this.autos = autos;
      this.dormitorios = dormitorios;
    }
  
    validarTitulo(titulo) {
      if (typeof titulo !== 'string' || titulo.trim() === '') {
        throw new Error('El título debe ser un texto válido.');
      }
    }
  
    validarTransaccion(transaccion) {
      if (transaccion !== 'VENTA' && transaccion !== 'ALQUILER') {
        throw new Error('La transacción debe ser "VENTA" o "ALQUILER".');
      }
    }
  
    validarDescripcion(descripcion) {
      if (typeof descripcion !== 'string' || descripcion.length > 200) {
        throw new Error('La descripción debe ser un texto válido de hasta 200 caracteres.');
      }
    }
  
    validarPrecio(precio) {
      if (isNaN(precio) || precio <= 0) {
        throw new Error('El precio debe ser un número decimal válido mayor a cero.');
      }
    }
  
    validarBanios(banios) {
      if (!Number.isInteger(banios) || banios < 0) {
        throw new Error('La cantidad de baños debe ser un número entero válido mayor o igual a cero.');
      }
    }
  
    validarAutos(autos) {
      if (!Number.isInteger(autos) || autos < 0) {
        throw new Error('La cantidad de autos debe ser un número entero válido mayor o igual a cero.');
      }
    }
  
    validarDormitorios(dormitorios) {
      if (!Number.isInteger(dormitorios) || dormitorios < 0) {
        throw new Error('La cantidad de dormitorios debe ser un número entero válido mayor o igual a cero.');
      }
    }
  }