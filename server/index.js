import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import proxy from 'express-http-proxy';
import webpack from 'webpack';
import cors from 'cors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import axios from 'axios';

const webpackConfig = require('../webpack.client');
const webpackCompiler = webpack(webpackConfig);
const app = express();
const path = require('path');
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware(webpackCompiler, {
    index: false
  }));
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

app.get('/getproducts', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let getResponse = await axios.get("https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json");
  res.json(getResponse.data)
  next();
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../src')
  })
});

app.listen(3000, () => {
  console.log(`Running environment: ${process.env.NODE_ENV}`)
  console.log('Listening on Port:  3000');
});
