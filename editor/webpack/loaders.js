'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader?tsconfig=./editor/tsconfig.json',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css',
};

exports.scss = {
  test: /\.scss$/,
  loader: 'style-loader!css!sass',
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json',
};

exports.svg = {
  test: /\.svg(\?v=\d+\.\d+\.\d+|\?wi2r8m)?$/,
  loader: 'url?limit=10000&mimetype=image/svg+xml',
};

exports.eot = {
  test: /\.eot(\?v=\d+\.\d+\.\d+|\?wi2r8m)?$/,
  loader: 'file',
};

exports.woff = {
  test: /\.(woff|woff2|woff(\?wi2r8m)|woff2(\?wi2r8m))$/,
  loader: 'url?prefix=font/&limit=5000',
};

exports.ttf = {
  test: /\.ttf(\?v=\d+\.\d+\.\d+|\?wi2r8m|\?v=\d+\.\d+)?$/,
  loader: 'url?limit=10000&mimetype=application/octet-stream',
};

exports.png = {
  test: /\.png$/,
  loader: 'url-loader',
  query: { mimetype: 'image/png' },
};

exports.gif = {
  test: /\.gif$/,
  loader: 'url-loader',
  query: { mimetype: 'image/gif' },
};
