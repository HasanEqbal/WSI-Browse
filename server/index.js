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

const webpackConfig = require('../webpack.client');
const webpackCompiler = webpack(webpackConfig);
const app = express();

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

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.send('dist/index.html')
});

app.listen(3000, () => {
  console.log(`Running environment: ${process.env.NODE_ENV}`)
  console.log('Listening on Port:  3000');
});
