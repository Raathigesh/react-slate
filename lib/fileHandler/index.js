var fs = require('fs-extra');
var file = 'E:\\Projects\\Personal\\ComponentLab\\src\\cli\\index.jsx';

function writeContent(codeString) {
    fs.outputFile(file, codeString, function (err) {
        console.log(err) // => null      
    })
}

module.exports = {
    writeContent: writeContent
};