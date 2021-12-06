require('dotenv').config();
const Server  = require('./server');

//conexion al servidor
const server = new Server();


server.listen();