var kit = require('./components');
var webpack = require('./webpack');
var path = require('path');

module.exports = {
    kit: kit,
    webpackConfig: webpack,
    entryFilePath: path.join(__dirname, './index.jsx'),
    packageJsonPath: path.join(__dirname, './package.json'),
    files: [
        path.join(__dirname, './index.html')
    ]
};
