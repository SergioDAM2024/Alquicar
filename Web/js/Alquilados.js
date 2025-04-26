const elementosPorPagina = 5; // Número de elementos por página

function mostrarVehiculosAlquilados(vehiculos, clientes, listaId, paginacionId) {
  const listaElemento = document.getElementById(listaId);
  const paginacionElemento = document.getElementById(paginacionId);

  listaElemento.innerHTML = '';
  paginacionElemento.innerHTML = '';

  const totalPaginas = Math.ceil(vehiculos.length / elementosPorPagina);
  let paginaActual = 1;

  function mostrarPagina(pagina) {
    listaElemento.innerHTML = '';

    const indiceInicio = (pagina - 1) * elementosPorPagina;
    const indiceFin = indiceInicio + elementosPorPagina;
    const vehiculosPagina = vehiculos.slice(indiceInicio, indiceFin);

    vehiculosPagina.forEach(vehiculo => {
      const cliente = clientes.find(c => c.id === vehiculo.cliente_id);
      const divVehiculo = document.createElement('div');
      divVehiculo.classList.add('vehiculo-card');
      divVehiculo.innerHTML = `
        <img src="${vehiculo.imagen}" alt="${vehiculo.modelo}">
        <h3>${vehiculo.modelo}</h3>
        <p class="cliente-info">Cliente: ${cliente ? cliente.nombre : 'Desconocido'}</p>
        <p>Fecha de alquiler: ${vehiculo.fecha_alquiler}</p>
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
