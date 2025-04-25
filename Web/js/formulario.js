document.addEventListener('DOMContentLoaded', function() {
  function validarFormulario() {
    const formulario = document.getElementById('miFormulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault();

      let valido = true;

      // Validar nombre
      if (nombreInput.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduce tu nombre.';
        valido = false;
      } else {
        errorNombre.textContent = '';
      }

      // Validar email
      if (emailInput.value.trim() === '') {
        errorEmail.textContent = 'Por favor, introduce tu email.';
        valido = false;
      } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        errorEmail.textContent = 'Por favor, introduce un email válido.';
        valido = false;
      } else {
        errorEmail.textContent = '';
      }

      // Validar mensaje
      if (mensajeInput.value.trim() === '') {
        errorMensaje.textContent = 'Por favor, introduce un mensaje.';
        valido = false;
      } else {
        errorMensaje.textContent = '';
      }

      if (valido) {
        console.log('Formulario válido. Datos a enviar:', {
          nombre: nombreInput.value,
          email: emailInput.value,
          mensaje: mensajeInput.value
        });

        mensajeEnviado.style.display = 'block'; // Mostrar el mensaje
        formulario.reset(); // Limpiar el formulario
        setTimeout(() => {
          mensajeEnviado.style.display = 'none'; // Ocultar después de 5 segundos
        }, 5000);
      }
    });
  }

  validarFormulario();
});
