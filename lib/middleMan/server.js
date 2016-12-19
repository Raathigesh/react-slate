var socket = require('socket.io');
var {read} = require('../configReader');
var io = null;

function initialize(app, handlers) {
    io = socket(app);
    io.on('connection', function (socket) {
        var config = read();
        handlers.onConnection(socket);
        socket.on('createProject', handlers.onCreateProject);
        socket.on('codeChange', handlers.onCodeChange);
        socket.on('kitChange', function(kit) {
            handlers.onKitChange(kit, socket);
        });
        socket.on('moduleInstall', function(moduleName) {
            handlers.onModuleInstall(moduleName, socket);
        });
        socket.on('moduleUninstall', function(moduleName) {
            handlers.onModuleUninstall(moduleName, socket);
        });
        socket.on('componentKitUninstall', function(moduleName) {
            handlers.onComponentKitUninstall(moduleName, socket);
        });
        socket.on('componentKitInstall', function(moduleName) {
            handlers.onComponentKitInstall(moduleName, socket);
        });
    });
}

module.exports = {
    initialize
};
