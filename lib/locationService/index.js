var path = require('path');

function getProjectDirectory() {
    return path.resolve(__dirname, '../../proj');
}

module.exports = {
    getProjectDirectory: getProjectDirectory
};
