var socket = require('socket.io-client');
var client = null;

function initialize(url) {
    client = socket(url);
    return client;
}

function onInitialConfig(callback) {
   client.on('initialConfig', callback);
}

function onStarterTemplate(callback) {
    client.on('starterTemplate', callback);
}

function onComponentKit(callback) {
    client.on('componentKit', callback);
}

function createProject(data) {
    client.emit('createProject', data);
}

function writeCode(content) {
    console.log('emit  ' + content);
    client.emit('codeChange', content);
}

module.exports = {
    initialize,
    onInitialConfig,
    onComponentKit,
    createProject,
    writeCode,
    onStarterTemplate
};

