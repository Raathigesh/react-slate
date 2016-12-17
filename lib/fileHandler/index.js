var fs = require('fs-extra');
var path = require('path');
var { getProjectDirectory } = require('../locationService');

function writeIndexFile(starterFilePath) {
    const file = path.join(getProjectDirectory(), 'index.jsx');
    fs.copy(starterFilePath, file, function (err) {
        console.log(err);     
    })
}

function writeIndexFileContent(content) {
    const file = path.join(getProjectDirectory(), 'index.jsx');
    fs.outputFile(file, content, function (err) {
        console.log(err)
    })
}

function getStarterFileTemplate(componentKitModuleName) {
    return fs.readFileSync(require(componentKitModuleName).starterFilePath, 'utf8');
}

function writeWebpackConfigFile(componentKitModuleName) {
    const configFilePath = require(componentKitModuleName).webpackFilePath;
    const file = path.join(getProjectDirectory(), 'webpack.config.js');
    fs.copy(configFilePath, file, function (err) {
        if (err) return console.error(err)
        console.log("success!")
    })
}

module.exports = {
    writeIndexFile: writeIndexFile,
    writeWebpackConfigFile: writeWebpackConfigFile,
    writeIndexFileContent: writeIndexFileContent,
    getStarterFileTemplate: getStarterFileTemplate
};