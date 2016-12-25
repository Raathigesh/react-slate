const path = require('path');
const express = require('express');
const webpackDevServerApp = require('./webpackServer');
const {
  writeWebpackConfigFile,
  writeIndexFile,
  writeIndexFileContent,
  getStarterFileTemplate,
  cleanProjectDirectory,
  writePackageJson,
  readProjectFiles,
  createProjectFile,
  readProjectFile,
  deleteProjectFile
} = require('../lib/fileHandler');
const { initialize, onCreateProject } = require('../lib/middleMan/server');
const {
  installModuleToProjectDirectory,
  unInstallModuleToProjectDirectory,
  readDependencies,
  getComponentKitDetails
} = require('../lib/moduleHandler');
var request = require('superagent');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
var serverApp = require('http').Server(app);

var {read, changeActiveKit} = require('../lib/configReader');
var projectConfig = read();
const { getProjectDirectory } = require('../lib/locationService');
let availableComponentKits = null;

initialize(serverApp, {
  onCreateProject: (data) => {
    writePackageJson(projectConfig.activeComponentKit);
    writeIndexFile(require(projectConfig.activeComponentKit).packageJsonPath);
  },
  onConnection: (socket) => {
    socket.emit('initialConfig', projectConfig);
    socket.emit('componentKit', require(projectConfig.activeComponentKit).kit);
    socket.emit('packageInfo', readDependencies());
    readProjectFiles().then((files) => {
      socket.emit('projectFileInfo', {
        files: files,
        entryFile: path.basename(require(projectConfig.activeComponentKit).starterFilePath)
      });
    });
    request
      .get('http://localhost:3334/apis')
      .send()
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (!err) {
          availableComponentKits = JSON.parse(res.text);
          socket.emit('componentKitInfo', getComponentKitDetails(readDependencies(), availableComponentKits));
        }
      });
    socket.emit('readProjectFile', readProjectFile(path.basename(require(projectConfig.activeComponentKit).starterFilePath)));
  },
  onCodeChange: (data) => {
    // TODO - change from index file content to just file content
    writeIndexFileContent(data.fileName, data.content);
  },
  onKitChange: (kit, socket) => {
    cleanProjectDirectory();
    changeActiveKit(kit);
    projectConfig = read();
    socket.emit('componentKit', require(projectConfig.activeComponentKit).kit);
    writePackageJson(projectConfig.activeComponentKit);
    writeIndexFile(require(projectConfig.activeComponentKit).starterFilePath);
    readProjectFiles().then((files) => {
      socket.emit('projectFileInfo', {
        files: files,
        entryFile: path.basename(require(projectConfig.activeComponentKit).starterFilePath)
      });
    });
  },
  onModuleInstall: (moduleName, socket) => {
    installModuleToProjectDirectory(moduleName)
      .then((detail) => {
        socket.emit('message', {
          messageType: 'success',
          message: 'Installed ' + detail.name + '@' + detail.version
        });
        socket.emit('packageInfo', readDependencies());
      })
      .catch(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Installation of ' + moduleName + ' failed'
        });
      });
  },
  onModuleUninstall: (moduleName, socket) => {
    unInstallModuleToProjectDirectory(moduleName)
      .then(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Uninstalled ' + moduleName
        });
        socket.emit('packageInfo', readDependencies());
      })
      .catch(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Uninstallation of ' + moduleName + ' failed'
        });
      });
  },
  onComponentKitUninstall: (moduleName, socket) => {
    unInstallModuleToProjectDirectory(moduleName)
      .then(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Uninstalled ' + moduleName
        });
        socket.emit('packageInfo', readDependencies());
        socket.emit('componentKitInfo', getComponentKitDetails(readDependencies(), availableComponentKits));
      })
      .catch(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Uninstallation of ' + moduleName + ' failed'
        });
      });
  },
  onComponentKitInstall: (moduleName, socket) => {
    installModuleToProjectDirectory(moduleName)
      .then((detail) => {
        socket.emit('message', {
          messageType: 'success',
          message: 'Installed ' + detail.name + '@' + detail.version
        });
        socket.emit('packageInfo', readDependencies());
        socket.emit('componentKitInfo', getComponentKitDetails(readDependencies(), availableComponentKits));
      })
      .catch(() => {
        socket.emit('message', {
          messageType: 'error',
          message: 'Installation of ' + moduleName + ' failed'
        });
      });
  },
  onCreateNewFile: (fileName, socket) => {
    createProjectFile(fileName);
    readProjectFiles().then((files) => {
      socket.emit('projectFileInfo', {
        files: files,
        entryFile: path.basename(require(projectConfig.activeComponentKit).starterFilePath)
      });
    });
  },
  onReadFile: (fileName, socket) => {
    socket.emit('readProjectFile', readProjectFile(fileName));
  },
  onDeleteFile: (fileName, socket) => {
    deleteProjectFile(fileName);
    readProjectFiles().then((files) => {
      socket.emit('projectFileInfo', {
        files: files,
        entryFile: path.basename(require(projectConfig.activeComponentKit).starterFilePath)
      });
    });
  }
});

 const config = getWebpackConfig();
 webpackDevServerApp(config);

serverApp.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

function getWebpackConfig() {
  return require(projectConfig.activeComponentKit).webpackConfig(getProjectDirectory());
}
