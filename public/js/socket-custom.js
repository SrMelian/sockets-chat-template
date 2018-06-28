let socket = io();
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Usuario',
    mensaje: 'Hola Mundo',
}, function (resp) {
    console.log('respuesta server:', resp);
});

// Enviar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});