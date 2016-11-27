var socket = require('socket.io-client');

function register(url, handlers) {
    var client = socket(url);
    addHandlers(client, handlers);    
    return client;
}

function addHandlers(connection, handlers) {
    Object.keys(handlers).forEach(function(key,index) {
          connection.on(key, function (data) {
            handlers[key](connection, data);
        }); 
    });
}

module.exports = register;

