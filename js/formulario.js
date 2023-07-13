function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }
    
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
    const formatoTelefono = /^\d+$/;
    if (!formatoTelefono.test(telefono) || telefono.length < 10) {
        alert('Por favor, ingrese un número de teléfono válido (10 numeros).');
        return false;
    }
    
    return true;
}