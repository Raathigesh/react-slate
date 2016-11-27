var socket = require('socket.io');
var io = null;

function register(app, handlers) {
    io = socket(app);
    io.on('connection', function (socket) {
        console.log('new connection >>>>>>>>>>>>>>>>>>>>>>');
       addHandlers(io, socket, handlers);
    });
}

function addHandlers(ioObj, socket, handlers) {
    Object.keys(handlers).forEach(function(key,index) {
        console.log('key>>>>' + key);
          socket.on(key, function (data) {
              console.log(data + 'data');
            handlers[key](socket, data);
        }); 
    });
}

module.exports = register;