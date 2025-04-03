document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtros select');

    filtros.forEach(filtro => {
        filtro.addEventListener('change', function() {
            const tipo = this.value;
            const listaVehiculos = this.parentElement.parentElement.querySelector('.lista-vehiculos');
            const vehiculos = listaVehiculos.querySelectorAll('.vehiculo');

            vehiculos.forEach(vehiculo => {
                if (tipo === 'todos' || vehiculo.classList.contains(tipo)) {
                    vehiculo.style.display = 'block';
                } else {
                    vehiculo.style.display = 'none';
                }
            });
        });
    });
});