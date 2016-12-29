const path = require('path');
const express = require('express');
const app = express();
const { initializeMessageHandler } = require('./messageHandler');
const createWebpackDevServer = require('./webpackServer');
const  serverApp = require('http').Server(app);

initializeMessageHandler(serverApp);

const port = process.env.PORT ? process.env.PORT : 3000;
serverApp.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
