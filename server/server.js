const express = require('express');
const socketIO = require('socket.io');
const http = require('http')
const path = require('path');

const app = express();
const server = http.createServer( app );

const port = process.env.PORT || 3000;

app.use( express.static( path.resolve( __dirname, '../public' ) ) );

// This is the communication with the backend
module.exports.io = socketIO( server );
require('./sockets/sockets')

server.listen( port, () => console.log( `Server running on http://localhost:${ port }/` ) );