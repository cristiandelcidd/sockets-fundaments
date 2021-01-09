const socket = io('http://localhost:3000');

socket.on( 'connect', function () {
    console.log( 'Connected to server' );
});

// Listen
socket.on( 'disconnect', function () {
    console.log( 'Server Connection Lost' );
});

// Send information
socket.emit( 'sendMessage', {
    user: 'Cristian',
    message: 'Hello World'
}, function ( resp ) {
    console.log( 'Response server:', resp.response )
});

// Listen information
socket.on( 'sendMessage', function ( message ) {
    console.log( 'Server', message )
});