import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Routes from '../src/Routes';
import renderer from '../src/helpers/renderer';
import createStore from '../src/helpers/createStore';
import env from './env';
import data from '../src/product.json'

const webpackConfig = require('../webpack.client');
const webpackCompiler = webpack(webpackConfig);
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

app.get('/getproducts', function (req, res) {
  res.json(data);
})

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../wsi/src/index.html'))
});

app.listen(3000, () => {
  console.log(`Running environment: ${process.env.NODE_ENV}`)
  console.log('Listening on Port:  3000');
});
