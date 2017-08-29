var devConfig = require('./webpack.dev.config.js');
var prodConfig = require('./webpack.prod.config.js');

var config; 

switch (process.env.npm_lifecycle_event){
    case 'build':
        config = prodConfig;
        break;
    case 'serve-dev':
        config = devConfig;
        break;
    case 'serve-build':
        config = prodConfig;
        break;
    default:
        config = devConfig;
        break;
}

console.log(config);

module.exports = config;