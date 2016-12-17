const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
//const config = require('./webpack.config.js');
const { writeWebpackConfigFile, writeIndexFile, writeIndexFileContent, getStarterFileTemplate } = require('../lib/fileHandler');
const { initialize, onCreateProject } = require('../lib/middleMan/server');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
var serverApp = require('http').Server(app);

var projectConfig = require('../lib/configReader')();
const { getProjectDirectory } = require('../lib/locationService');

initialize(serverApp, {
  onCreateProject: (data) => {
    //writeWebpackConfigFile(projectConfig.activeComponentKit);
    writeIndexFile(require(projectConfig.activeComponentKit).starterFilePath);
  },
  onConnection: (socket) => {    
    socket.emit('initialConfig', projectConfig);
    socket.emit('componentKit', require(projectConfig.activeComponentKit).kit);
    socket.emit('starterTemplate', getStarterFileTemplate(projectConfig.activeComponentKit));
  },
  onCodeChange: (content) => {
    console.log('code change........')
    writeIndexFileContent(content);
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