const fs = require('fs');
const rimraf = require("rimraf");

rimraf.sync('./dist');
fs.mkdirSync('./dist');
fs.mkdirSync('./dist/server')
fs.mkdirSync('./dist/stats');
fs.writeFileSync('./dist/server/server-bundle.js', '');

