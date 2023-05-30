/**
 * Clase Anuncio que representa un anuncio de bienes raíces.
 */
class Anuncio {
  /**
   * Crea una instancia de la clase Anuncio.
   * @param {string} titulo - El título del anuncio.
   * @param {string} transaccion - La transacción del anuncio (VENTA o ALQUILER).
   * @param {string} descripcion - La descripción del anuncio.
   * @param {number} precio - El precio del anuncio.
   * @param {number} banios - La cantidad de baños del anuncio.
   * @param {number} autos - La cantidad de autos del anuncio.
   * @param {number} dormitorios - La cantidad de dormitorios del anuncio.
   */
  constructor(
    titulo,
    transaccion,
    descripcion,
    precio,
    banios,
    autos,
    dormitorios
  ) {
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

  /**
   * Valida el título del anuncio.
   * @param {string} titulo - El título a validar.
   * @throws {Error} Lanza un error si el título no es válido.
   */
  validarTitulo(titulo) {
    if (typeof titulo !== "string" || titulo.trim() === "") {
      throw new Error("El título debe ser un texto válido.");
    }
  }

  /**
   * Valida la transacción del anuncio.
   * @param {string} transaccion - La transacción a validar.
   * @throws {Error} Lanza un error si la transacción no es válida.
   */
  validarTransaccion(transaccion) {
    if (transaccion !== "VENTA" && transaccion !== "ALQUILER") {
      throw new Error('La transacción debe ser "VENTA" o "ALQUILER".');
    }
  }

  /**
   * Valida la descripción del anuncio.
   * @param {string} descripcion - La descripción a validar.
   * @throws {Error} Lanza un error si la descripción no es válida.
   */
  validarDescripcion(descripcion) {
    if (typeof descripcion !== "string" || descripcion.length > 200) {
      throw new Error(
        "La descripción debe ser un texto válido de hasta 200 caracteres."
      );
    }
  }

  /**
   * Valida el precio del anuncio.
   * @param {number} precio - El precio a validar.
   * @throws {Error} Lanza un error si el precio no es válido.
   */
  validarPrecio(precio) {
    if (isNaN(precio) || precio <= 0) {
      throw new Error(
        "El precio debe ser un número decimal válido mayor a cero."
      );
    }
  }

  /**
   * Valida la cantidad de baños del anuncio.
   * @param {number} banios - La cantidad de baños a validar.
   * @throws {Error} Lanza un error si la cantidad de baños no es válida.
   */
  validarBanios(banios) {
    if (!Number.isInteger(banios) || banios < 0) {
      throw new Error(
        "La cantidad de baños debe ser un número entero válido mayor o igual a cero."
      );
    }
  }

  /**
   * Valida la cantidad de autos del anuncio.
   * @param {number} autos - La cantidad de autos a validar.
   * @throws {Error} Lanza un error si la cantidad de autos no es válida.
   */
  validarAutos(autos) {
    if (!Number.isInteger(autos) || autos < 0) {
      throw new Error(
        "La cantidad de autos debe ser un número entero válido mayor o igual a cero."
      );
    }
  }

  /**
   * Valida la cantidad de dormitorios del anuncio.
   * @param {number} dormitorios - La cantidad de dormitorios a validar.
   * @throws {Error} Lanza un error si la cantidad de dormitorios no es válida.
   */
  validarDormitorios(dormitorios) {
    if (!Number.isInteger(dormitorios) || dormitorios < 0) {
      throw new Error(
        "La cantidad de dormitorios debe ser un número entero válido mayor o igual a cero."
      );
    }
  }
}
