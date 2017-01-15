var fs = require('fs-extra');
var path = require('path');
var { getDataJsonPath } = require('../locationService');

function readProjectConfig() {
    return fs.readJsonSync(getDataJsonPath(), {throws: false});
}

function changeActiveKit(name) {
    console.log(name)
    var file = getDataJsonPath();
    console.log(file)
    var dataObj = fs.readJsonSync(file, {throws: false});
    dataObj.activeComponentKit = name;
    fs.writeJSONSync(file, dataObj);
}

module.exports = {
    readProjectConfig: readProjectConfig,
    changeActiveKit: changeActiveKit
};