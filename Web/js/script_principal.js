document.addEventListener('DOMContentLoaded', function() {
  if (typeof jsonData !== 'undefined' && jsonData?.vehiculos && jsonData?.clientes) {
    const vehiculosDisponibles = jsonData.vehiculos.filter(v => v.disponible);
    const vehiculosAlquilados = jsonData.vehiculos.filter(v => !v.disponible);

    mostrarVehiculos(vehiculosDisponibles, 'lista-disponibles', 'paginacion-disponibles');

    mostrarVehiculosAlquilados(vehiculosAlquilados, jsonData.clientes, 'lista-alquilados', 'paginacion-alquilados');
  } else {
    console.error('jsonData is not defined or does not have the expected structure.');
  }
});

// Ensure jsonData is defined or imported before this script runs
if (typeof jsonData === 'undefined') {
  console.error('jsonData is missing. Please ensure it is defined or imported correctly.');
}


