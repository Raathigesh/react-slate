var fs = require('fs-extra');
var path = require('path');
var { getProjectDirectory } = require('../locationService');
var Promise = require('bluebird');

function writeIndexFile(starterFilePath) {
    const file = path.join(getProjectDirectory(), 'index.jsx');
    fs.copy(starterFilePath, file, function (err) {
        console.log(err);
    })
}

function writeIndexFileContent(fileName, content) {
    const file = path.join(getProjectDirectory(), fileName);
    fs.outputFile(file, content, function (err) {
        console.log(err)
    });
}

function getStarterFileTemplate(componentKitModuleName) {
    return {
        content: fs.readFileSync(require(componentKitModuleName).starterFilePath, 'utf8'),
        fileName: ''
    };
}

function writeWebpackConfigFile(componentKitModuleName) {
    const configFilePath = require(componentKitModuleName).webpackFilePath;
    const file = path.join(getProjectDirectory(), 'webpack.config.js');
    fs.copy(configFilePath, file, function (err) {
        if (err) return console.error(err)
        console.log("success!")
    })
}

function cleanProjectDirectory() {
    fs.emptydirSync(getProjectDirectory());
}

function writePackageJson() {
    var packageContent = `
    {
        "name": "react-slate-generated-project",
        "version": "0.0.1",
        "description": "",
        "main": "",
        "scripts": {
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
        },
        "dependencies": {
        }
    }`;

    const file = path.join(getProjectDirectory(), 'package.json');
    fs.outputFile(file, packageContent, function (err) {
        console.log(err)
    });
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
    return {
        content: fs.readFileSync(fullPath, 'utf8'),
        fileName: fileName
    }
}

function deleteProjectFile(fileName) {
    fs.removeSync(path.join(getProjectDirectory(), fileName));
}

module.exports = {
    writeIndexFile: writeIndexFile,
    writeWebpackConfigFile: writeWebpackConfigFile,
    writeIndexFileContent: writeIndexFileContent,
    getStarterFileTemplate: getStarterFileTemplate,
    cleanProjectDirectory: cleanProjectDirectory,
    writePackageJson: writePackageJson,
    readProjectFiles: readProjectFiles,
    createProjectFile: createProjectFile,
    readProjectFile: readProjectFile,
    deleteProjectFile: deleteProjectFile
};