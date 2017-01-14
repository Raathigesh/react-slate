var fs = require('fs-extra');
var path = require('path');
var { getProjectDirectory } = require('../locationService');
var Promise = require('bluebird');

function writeIndexFile(entryFilePath) {
    const file = path.join(getProjectDirectory(), path.basename(entryFilePath));
    fs.copySync(entryFilePath, file);
}

function writeFileContent(fileName, content) {
    const file = path.join(getProjectDirectory(), fileName);
    fs.outputFile(file, content, function (err) {
        console.log(err)
    });
}

function getStarterFileTemplate(componentKitModuleName) {
    return {
        content: fs.readFileSync(require(componentKitModuleName).entryFilePath, 'utf8'),
        fileName: ''
    };
}

function writeWebpackConfigFile(componentKitModuleName) {
    const configFilePath = require(componentKitModuleName).webpackFilePath;
    const file = path.join(getProjectDirectory(), 'webpack.config.js');
    fs.copySync(configFilePath, file);
}

function cleanProjectDirectory() {
    fs.emptydirSync(getProjectDirectory());
}

function writePackageJson(componentKitModuleName) {
    const packageJsonPath = require(componentKitModuleName).packageJsonPath;
    const file = path.join(getProjectDirectory(), 'package.json');
    fs.copySync(packageJsonPath, file);
}

function readProjectFiles() {
    var filesToIngnore = ['package.json'];
    var results = [];

    return new Promise((resolve, reject) => {
        fs.readdir(getProjectDirectory(), (err, files) => {
            if (err) {
                reject(err);
            } else {
                files.forEach(file => {
                    if (!fs.lstatSync(path.join(getProjectDirectory(), file)).isDirectory()
                        && filesToIngnore.indexOf(file) < 0) {
                        results.push(file);
                    }
                });
                resolve(results);
            }
        });
    });
}

function createProjectFile(fileName) {
    var fullPath = path.join(getProjectDirectory(), fileName);
    fs.outputFileSync(fullPath, '');
}

function readProjectFile(fileName) {
    var fullPath = path.join(getProjectDirectory(), fileName);
    try {
        return {
            content: fs.readFileSync(fullPath, 'utf8'),
            fileName: fileName
        }
    } catch(e) {
        return {
            content: '',
            fileName: ''
        };
    }
}

function deleteProjectFile(fileName) {
    fs.removeSync(path.join(getProjectDirectory(), fileName));
}

function copyFilesToProjectDirectory(paths) {
    for(var i = 0; i < paths.length; i++) {
        var newFilePath =  path.join(getProjectDirectory(), path.basename(paths[i]));
        fs.copySync(paths[i], newFilePath);
    }
}

module.exports = {
    writeIndexFile: writeIndexFile,
    writeWebpackConfigFile: writeWebpackConfigFile,
    writeFileContent: writeFileContent,
    getStarterFileTemplate: getStarterFileTemplate,
    cleanProjectDirectory: cleanProjectDirectory,
    writePackageJson: writePackageJson,
    readProjectFiles: readProjectFiles,
    createProjectFile: createProjectFile,
    readProjectFile: readProjectFile,
    deleteProjectFile: deleteProjectFile,
    copyFilesToProjectDirectory: copyFilesToProjectDirectory
};