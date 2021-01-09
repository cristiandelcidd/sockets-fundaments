const { io } = require('../server');

io.on( 'connection', client => {
    console.log( 'User connected' );

    client.emit( 'sendMessage', {
        user: 'Administrator',
        message: 'Welcome to this application'
    });

    client.on( 'disconnect', () => {
        console.log( 'User disconnected' );
    });

    client.on( 'sendMessage', ( data, callback ) => {
        console.log( data );

        client.broadcast.emit( 'sendMessage', data );

        // if ( message.user ) {
        //     callback({
        //         response: 'Response received correctly.'
        //     });
        // } else {
        //     callback({
        //         response: 'Something went wrong.'
        //     })
        // }
    });
});