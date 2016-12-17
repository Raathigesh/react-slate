var fs = require('fs-extra');
var path = require('path');

function read() {
    console.log('asasasasas')
    console.log(path.resolve(__dirname, '../../data/config.json'))
    return fs.readJsonSync(path.resolve(__dirname, '../../data/config.json'), {throws: false});
}

module.exports = read;