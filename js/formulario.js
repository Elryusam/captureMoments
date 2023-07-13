function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }
    
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
    var formatoTelefono = /^\d+$/;
    if (!formatoTelefono.test(telefono) || telefono.length < 10) {
        alert('Por favor, ingrese un número de teléfono válido (10 numeros).');
        return false;
    }
    
    return true;
}