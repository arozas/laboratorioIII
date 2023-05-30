class AnuncioController {
  constructor() {
    this.anuncioService = new AnuncioService();
    this.tableContainer = document.getElementById("table-container");
    this.anunciosTable = document.createElement("table");
    this.anunciosTable.id = "anuncios-table";
    this.anunciosTable.innerHTML = `
        <thead>
          <tr>
            <th>Título</th>
            <th>Transacción</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad de Baños</th>
            <th>Cantidad de Autos</th>
            <th>Cantidad de Dormitorios</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
    this.tableContainer.appendChild(this.anunciosTable);
    this.buttonsContainer = document.getElementById("buttons-container");
    this.eliminarBtn = document.createElement("button");
    this.eliminarBtn.innerText = "Eliminar";
    this.eliminarBtn.id = "eliminar-btn";
    this.buttonsContainer.appendChild(this.eliminarBtn);
    this.form = document.getElementById("anuncio-form");
    this.tituloInput = document.getElementById("titulo");
    this.transaccionVentaInput = document.getElementById("transaccion-venta");
    this.transaccionAlquilerInput = document.getElementById(
      "transaccion-alquiler"
    );
    this.descripcionInput = document.getElementById("descripcion");
    this.precioInput = document.getElementById("precio");
    this.baniosInput = document.getElementById("banios");
    this.autosInput = document.getElementById("autos");
    this.dormitoriosInput = document.getElementById("dormitorios");
    this.guardarBtn = document.getElementById("guardar-btn");
    this.cancelarBtn = document.getElementById("cancelar-btn");
    this.currentAnuncioIndex = null;

    this.initialize = () => {
      // ...
      this.eliminarBtn.disabled = true;
      this.loadAnuncios();

      // Llamada inicial a onInputChange() para validar los campos al cargar la página
      this.onInputChange();

      // Eventos
      this.form.addEventListener("submit", this.onSubmit);
      this.guardarBtn.addEventListener("click", this.onGuardarBtnClick);
      this.cancelarBtn.addEventListener("click", this.onCancelarBtnClick);
      this.eliminarBtn.addEventListener("click", this.onEliminarBtnClick);

      // Evento para validar los campos en cada cambio de valor
      Array.from(this.form.elements).forEach((input) =>
        input.addEventListener("input", this.onInputChange)
      );
    };

    this.loadAnuncios = () => {
      const anuncios = this.anuncioService.getAnuncios();
      const tbody = this.anunciosTable.querySelector("tbody");

      // Limpiar contenido existente
      while (tbody.firstChild) {
        tbody.firstChild.remove();
      }

      if (anuncios.length === 0) {
        tbody.innerHTML =
          '<tr><td colspan="7">No se encontraron anuncios</td></tr>';
      } else {
        anuncios.forEach((anuncio, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${anuncio.titulo}</td>
              <td>${anuncio.transaccion}</td>
              <td>${anuncio.descripcion}</td>
              <td>${anuncio.precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}</td>
              <td>${anuncio.banios}</td>
              <td>${anuncio.autos}</td>
              <td>${anuncio.dormitorios}</td>
            `;
          row.addEventListener("click", () => this.onRowClick(index));
          tbody.appendChild(row);
        });
      }
    };

    this.clearForm = () => {
      this.tituloInput.value = "";
      this.transaccionVentaInput.checked = false;
      this.transaccionAlquilerInput.checked = false;
      this.descripcionInput.value = "";
      this.precioInput.value = "";
      this.baniosInput.value = "";
      this.autosInput.value = "";
      this.dormitoriosInput.value = "";
    };

    this.onRowClick = (index) => {
      const anuncios = this.anuncioService.getAnuncios();
      const anuncio = anuncios[index];

      this.currentAnuncioIndex = index;
      this.tituloInput.value = anuncio.titulo;
      this.transaccionVentaInput.checked = anuncio.transaccion === "VENTA";
      this.transaccionAlquilerInput.checked =
        anuncio.transaccion === "ALQUILER";
      this.descripcionInput.value = anuncio.descripcion;
      this.precioInput.value = anuncio.precio;
      this.baniosInput.value = anuncio.banios;
      this.autosInput.value = anuncio.autos;
      this.dormitoriosInput.value = anuncio.dormitorios;

      // Eliminar la clase 'selected-row' de todas las filas
      const rows = this.anunciosTable.querySelectorAll("tbody tr");
      rows.forEach((row) => row.classList.remove("selected-row"));

      // Agregar la clase 'selected-row' a la fila seleccionada
      const selectedRow = rows[index];
      selectedRow.classList.add("selected-row");

      this.guardarBtn.innerText = "Guardar Cambios";
      this.cancelarBtn.disabled = false;
      this.eliminarBtn.disabled = false;

      // Habilitar el botón "Guardar Cambios"
      this.guardarBtn.disabled = false;
    };

    this.onInputChange = () => {
      // Obtener el valor de cada campo
      const titulo = this.tituloInput.value.trim();
      const transaccionVenta = this.transaccionVentaInput.checked;
      const transaccionAlquiler = this.transaccionAlquilerInput.checked;
      const descripcion = this.descripcionInput.value.trim();
      const precio = parseFloat(this.precioInput.value);
      const banios = parseInt(this.baniosInput.value);
      const autos = parseInt(this.autosInput.value);
      const dormitorios = parseInt(this.dormitoriosInput.value);

      // Validar que todos los campos requeridos estén completos
      const camposCompletos =
        titulo !== "" &&
        (transaccionVenta || transaccionAlquiler) &&
        descripcion !== "" &&
        !isNaN(precio) &&
        precio > 0 &&
        !isNaN(banios) &&
        banios >= 0 &&
        !isNaN(autos) &&
        autos >= 0 &&
        !isNaN(dormitorios) &&
        dormitorios >= 0;

      // Habilitar o deshabilitar el botón "Guardar" según la validación de campos
      this.guardarBtn.disabled = !camposCompletos;
    };

    this.validarCamposRequeridos = () => {
      const camposRequeridos = [
        this.tituloInput,
        this.descripcionInput,
        this.precioInput,
        this.baniosInput,
        this.autosInput,
        this.dormitoriosInput,
      ];

      for (const campo of camposRequeridos) {
        if (!campo.value.trim()) {
          return false;
        }
      }

      return true;
    };

    this.onGuardarBtnClick = () => {
      const camposCompletos = this.validarCamposRequeridos();

      if (!camposCompletos) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
      }
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar este anuncio?"
      );

      if (confirmacion) {
        const titulo = this.tituloInput.value.trim();
        const transaccion = this.transaccionVentaInput.checked
          ? "VENTA"
          : "ALQUILER";
        const descripcion = this.descripcionInput.value.trim();
        const precio = parseFloat(this.precioInput.value);
        const banios = parseInt(this.baniosInput.value);
        const autos = parseInt(this.autosInput.value);
        const dormitorios = parseInt(this.dormitoriosInput.value);

        if (this.currentAnuncioIndex === null) {
          const anuncio = new Anuncio(
            titulo,
            transaccion,
            descripcion,
            precio,
            banios,
            autos,
            dormitorios
          );
          this.anuncioService.guardarAnuncio(anuncio);
        } else {
          const anuncios = this.anuncioService.getAnuncios();
          const anuncio = anuncios[this.currentAnuncioIndex];
          anuncio.titulo = titulo;
          anuncio.transaccion = transaccion;
          anuncio.descripcion = descripcion;
          anuncio.precio = precio;
          anuncio.banios = banios;
          anuncio.autos = autos;
          anuncio.dormitorios = dormitorios;
          this.anuncioService.actualizarAnuncio(
            this.currentAnuncioIndex,
            anuncio
          );
        }
        this.loadAnuncios();
        this.clearForm();
        this.cancelarBtn.disabled = true;
        this.guardarBtn.innerText = "Guardar";
        this.currentAnuncioIndex = null;
        this.eliminarBtn.disabled = true;

        // Deshabilitar el botón después de guardar o actualizar el anuncio
        this.guardarBtn.disabled = true;
      }
    };

    this.onCancelarBtnClick = () => {
        this.clearForm();
        this.cancelarBtn.disabled = true;
        this.guardarBtn.innerText = "Guardar";
        this.currentAnuncioIndex = null;
        this.eliminarBtn.disabled = true;
  
        // Deshabilitar el botón después de cancelar
        this.guardarBtn.disabled = true;
  
        // Eliminar la clase 'selected-row' de todas las filas
        const rows = this.anunciosTable.querySelectorAll("tbody tr");
        rows.forEach((row) => row.classList.remove("selected-row"));
      };

    this.onEliminarBtnClick = () => {
      if (this.currentAnuncioId !== null) {
        const confirmacion = confirm(
          "¿Estás seguro de que deseas eliminar este anuncio?"
        );

        if (confirmacion) {
          this.anuncioService.eliminarAnuncio(this.currentAnuncioId);
          this.loadAnuncios();
          this.clearForm();
          this.cancelarBtn.disabled = true;
          this.guardarBtn.innerText = "Guardar";
          this.currentAnuncioId = null;
          this.eliminarBtn.disabled = true;
        }
      }
    };
  }
}
