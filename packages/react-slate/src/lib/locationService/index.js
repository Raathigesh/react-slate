var path = require('path');

function getProjectDirectory() {
    return path.resolve(__dirname, '../../proj');
}

function getDataJsonPath() {
    return path.resolve(__dirname, '../../data/config.json');
}

module.exports = {
    getProjectDirectory: getProjectDirectory,
    getDataJsonPath: getDataJsonPath
};
