var socket = require('socket.io');
var readConfig = require('../configReader');
var io = null;

function initialize(app, handlers) {
    io = socket(app);
    io.on('connection', function (socket) {
        var config = readConfig();
        handlers.onConnection(socket);
        socket.on('createProject', handlers.onCreateProject);
        socket.on('codeChange', handlers.onCodeChange);
    });
}

module.exports = {
    initialize
};
