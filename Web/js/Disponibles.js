const elementosPorPaginaDisponibles = 5; // Número de elementos por página

function mostrarVehiculos(vehiculos, listaId, paginacionId) {
  const listaElemento = document.getElementById(listaId);
  const paginacionElemento = document.getElementById(paginacionId);

  listaElemento.innerHTML = '';
  paginacionElemento.innerHTML = '';

  const totalPaginas = Math.ceil(vehiculos.length / elementosPorPaginaDisponibles);
  let paginaActual = 1;

  function mostrarPagina(pagina) {
    listaElemento.innerHTML = '';

    const indiceInicio = (pagina - 1) * elementosPorPaginaDisponibles;
    const indiceFin = indiceInicio + elementosPorPaginaDisponibles;
    const vehiculosPagina = vehiculos.slice(indiceInicio, indiceFin);

    vehiculosPagina.forEach(vehiculo => {
      const divVehiculo = document.createElement('div');
      divVehiculo.classList.add('vehiculo-card');
      divVehiculo.innerHTML = `
        <img src="${vehiculo.imagen}" alt="${vehiculo.modelo}">
        <h3>${vehiculo.modelo}</h3>
        <p>Precio: ${vehiculo.precio_dia}€/día</p>
      `;
      listaElemento.appendChild(divVehiculo);
    });

    actualizarBotonesPaginacion(pagina);
  }

  function actualizarBotonesPaginacion(paginaActiva) {
    paginacionElemento.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
      const boton = document.createElement('button');
      boton.textContent = i;

      if (i === paginaActiva) {
        boton.classList.add('active');
      }

      boton.addEventListener('click', () => {
        paginaActual = i;
        mostrarPagina(paginaActual);
      });

      paginacionElemento.appendChild(boton);
    }
  }

  mostrarPagina(paginaActual);
}
