var socket = require('socket.io-client');
var client = null;

function initialize(url) {
    client = socket(url);
    return client;
}

function onInitialConfig(callback) {
   client.on('initialConfig', callback);
}

function onProjectFileRead(callback) {
    client.on('projectFileRead', callback);
}

function onComponentKit(callback) {
    client.on('componentKit', callback);
}

function onPackageInfo(callback) {
    client.on('packageInfo', callback);
}

function onMessage(callback) {
    client.on('message', callback);
}

function onComponentKitInfo(callback) {
    client.on('componentKitInfo', callback);
}

function onProjectFileInfo(callback) {
    client.on('projectFileInfo', callback);
}

function onFileRead(callback) {
    client.on('readProjectFile', callback);
}

function onWebpackDetail(callback) {
    client.on('webpackDetail', callback);
}

function createProject(data) {
    client.emit('createProject', data);
}

function writeCode(content) {
    client.emit('codeChange', content);
}

function changeKit(kit) {
    client.emit('kitChange', kit);
}

function installModule(name) {
    client.emit('moduleInstall', name);
}

function uninstallModule(name) {
    client.emit('moduleUninstall', name);
}

function uninstallComponentKit(name) {
    client.emit('componentKitUninstall', name);
}

function installComponentKit(name) {
    client.emit('componentKitInstall', name);
}

function createNewFile(fileName) {
    client.emit('createNewFile', fileName);
}

function readProjectFile(fileName) {
    client.emit('readFile', fileName)
}

function deleteProjectFile(fileName) {
    client.emit('deleteFile', fileName);
}

module.exports = {
    initialize: initialize,
    onInitialConfig: onInitialConfig,
    onComponentKit: onComponentKit,
    createProject: createProject,
    writeCode: writeCode,
    onProjectFileRead: onProjectFileRead,
    changeKit: changeKit,
    installModule: installModule,
    onPackageInfo: onPackageInfo,
    onMessage: onMessage,
    uninstallModule: uninstallModule,
    onComponentKitInfo: onComponentKitInfo,
    uninstallComponentKit: uninstallComponentKit,
    installComponentKit: installComponentKit,
    onProjectFileInfo: onProjectFileInfo,
    createNewFile: createNewFile,
    readProjectFile: readProjectFile,
    onFileRead: onFileRead,
    deleteProjectFile: deleteProjectFile,
    onWebpackDetail: onWebpackDetail
};

