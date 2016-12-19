const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
//const config = require('./webpack.config.js');
const {
  writeWebpackConfigFile,
  writeIndexFile,
  writeIndexFileContent,
  getStarterFileTemplate,
  cleanProjectDirectory,
  writePackageJson
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
    console.log('ON CREATE PROJECT');
    //writeWebpackConfigFile(projectConfig.activeComponentKit);
    writePackageJson();
    writeIndexFile(require(projectConfig.activeComponentKit).starterFilePath);
  },
  onConnection: (socket) => {
    socket.emit('initialConfig', projectConfig);
    socket.emit('componentKit', require(projectConfig.activeComponentKit).kit);
    socket.emit('starterTemplate', getStarterFileTemplate(projectConfig.activeComponentKit));
    socket.emit('packageInfo', readDependencies());
    request
      .get('http://localhost:3334/apis')
      .send()
      .set('Accept', 'application/json')
      .end((err, res) => {
        availableComponentKits = JSON.parse(res.text);
        socket.emit('componentKitInfo', getComponentKitDetails(readDependencies(), availableComponentKits));
      });
  },
  onCodeChange: (content) => {
    console.log('code change........')
    writeIndexFileContent(content);
  },
  onKitChange: (kit, socket) => {
    changeActiveKit(kit);
    projectConfig = read();
    socket.emit('componentKit', require(projectConfig.activeComponentKit).kit);
    socket.emit('starterTemplate', getStarterFileTemplate(projectConfig.activeComponentKit));
    cleanProjectDirectory();
    writePackageJson();
    writeIndexFile(require(projectConfig.activeComponentKit).starterFilePath);
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
  }
});


if (isDeveloping) {
  const config = getWebpackConfig();
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: '.',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  /* app.get('*', function response(req, res) {
     console.log(path.join(__dirname, 'preview.html'));
     res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'preview.html')));
     res.end();
   });*/
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'preview.html'));
  });
}

serverApp.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

function getWebpackConfig() {
  return require(projectConfig.activeComponentKit).webpackConfig(getProjectDirectory());
}