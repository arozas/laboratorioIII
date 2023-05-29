document.addEventListener('DOMContentLoaded', function() {
    const formularioAnuncio = document.getElementById('formularioAnuncio');
    const tablaAnuncios = document.getElementById('tablaAnuncios');
  
    formularioAnuncio.addEventListener('submit', function(e) {
      e.preventDefault();
      guardarAnuncio();
    });
  
    function guardarAnuncio() {
      const titulo = document.getElementById('titulo').value;
      const transaccion = document.querySelector('input[name="transaccion"]:checked').value;
      const descripcion = document.getElementById('descripcion').value;
      const precio = document.getElementById('precio').value;
      const banios = document.getElementById('banios').value;
      const autos = document.getElementById('autos').value;
      const dormitorios = document.getElementById('dormitorios').value;
  
      const anuncio = {
        titulo,
        transaccion,
        descripcion,
        precio,
        banios,
        autos,
        dormitorios
      };
  
      const listaAnuncios = obtenerAnuncios();
      listaAnuncios.push(anuncio);
      localStorage.setItem('listaAnuncios', JSON.stringify(listaAnuncios));
  
      formularioAnuncio.reset();
  
      mostrarAnuncios();
    }
  
    function obtenerAnuncios() {
      const listaAnuncios = localStorage.getItem('listaAnuncios');
      return listaAnuncios ? JSON.parse(listaAnuncios) : [];
    }
  
    function mostrarAnuncios() {
      const listaAnuncios = obtenerAnuncios();
  
      tablaAnuncios.innerHTML = '';
  
      listaAnuncios.forEach(function(anuncio) {
        const fila = document.createElement('tr');
  
        const columnas = [
          anuncio.titulo,
          anuncio.transaccion,
          anuncio.descripcion,
          anuncio.precio,
          anuncio.banios,
          anuncio.autos,
          anuncio.dormitorios
        ];
  
        columnas.forEach(function(columna) {
          const celda = document.createElement('td');
          celda.textContent = columna;
          fila.appendChild(celda);
        });
  
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.addEventListener('click', function() {
          editarAnuncio(anuncio);
        });
        const editarCelda = document.createElement('td');
        editarCelda.appendChild(editarBtn);
        fila.appendChild(editarCelda);
  
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
          eliminarAnuncio(anuncio);
        });
        const eliminarCelda = document.createElement('td');
        eliminarCelda.appendChild(eliminarBtn);
        fila.appendChild(eliminarCelda);
  
        tablaAnuncios.appendChild(fila);
      });
    }
  
    function editarAnuncio(anuncio) {
      document.getElementById('titulo').value = anuncio.titulo;
      document.querySelector(`input[name="transaccion"][value="${anuncio.transaccion}"]`).checked = true;
      document.getElementById('descripcion').value = anuncio.descripcion;
      document.getElementById('precio').value = anuncio.precio;
      document.getElementById('banios').value = anuncio.banios;
      document.getElementById('autos').value = anuncio.autos;
      document.getElementById('dormitorios').value = anuncio.dormitorios;
    }
  
    function eliminarAnuncio(anuncio) {
      const listaAnuncios = obtenerAnuncios();
      const index = listaAnuncios.findIndex(item => item.titulo === anuncio.titulo && item.transaccion === anuncio.transaccion);
      if (index !== -1) {
        listaAnuncios.splice(index, 1);
        localStorage.setItem('listaAnuncios', JSON.stringify(listaAnuncios));
        mostrarAnuncios();
      }
    }
  
    function mostrarAnuncios() {
        const listaAnuncios = obtenerAnuncios();
      
        tablaAnuncios.innerHTML = '';
      
        // Crear la fila de encabezados
        const encabezados = document.createElement('tr');
      
        const titulos = [
          'Título',
          'Transacción',
          'Descripción',
          'Precio',
          'Baños',
          'Autos',
          'Dormitorios',
          '', // Celda vacía para los botones
        ];
      
        titulos.forEach(function(titulo) {
          const celda = document.createElement('th');
          celda.textContent = titulo;
          encabezados.appendChild(celda);
        });
      
        tablaAnuncios.appendChild(encabezados);
      
        listaAnuncios.forEach(function(anuncio) {
          const fila = document.createElement('tr');
      
          const columnas = [
            anuncio.titulo,
            anuncio.transaccion,
            anuncio.descripcion,
            anuncio.precio,
            anuncio.banios,
            anuncio.autos,
            anuncio.dormitorios,
          ];
      
          columnas.forEach(function(columna) {
            const celda = document.createElement('td');
            celda.textContent = columna;
            fila.appendChild(celda);
          });
      
          const editarBtn = document.createElement('button');
          editarBtn.textContent = 'Editar';
          editarBtn.addEventListener('click', function() {
            editarAnuncio(anuncio);
          });
          const editarCelda = document.createElement('td');
          editarCelda.appendChild(editarBtn);
          fila.appendChild(editarCelda);
      
          const eliminarBtn = document.createElement('button');
          eliminarBtn.textContent = 'Eliminar';
          eliminarBtn.addEventListener('click', function() {
            eliminarAnuncio(anuncio);
          });
          const eliminarCelda = document.createElement('td');
          eliminarCelda.appendChild(eliminarBtn);
          fila.appendChild(eliminarCelda);
      
          tablaAnuncios.appendChild(fila);
        });
      }      
  
    function editarAnuncio(anuncio) {
      document.getElementById('titulo').value = anuncio.titulo;
      document.querySelector(`input[name="transaccion"][value="${anuncio.transaccion}"]`).checked = true;
      document.getElementById('descripcion').value = anuncio.descripcion;
      document.getElementById('precio').value = anuncio.precio;
      document.getElementById('banios').value = anuncio.banios;
      document.getElementById('autos').value = anuncio.autos;
      document.getElementById('dormitorios').value = anuncio.dormitorios;
    }
  
    function eliminarAnuncio(anuncio) {
      const listaAnuncios = obtenerAnuncios();
      const index = listaAnuncios.findIndex(item => item.titulo === anuncio.titulo && item.transaccion === anuncio.transaccion);
      if (index !== -1) {
        listaAnuncios.splice(index, 1);
        localStorage.setItem('listaAnuncios', JSON.stringify(listaAnuncios));
        mostrarAnuncios();
      }
    }
  
    mostrarAnuncios();
  });
  
  