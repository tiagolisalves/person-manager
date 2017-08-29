var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dist = './dist/';
const src = './src/';

var DefinePlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    }
});

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'src/index.html' });
var UglifyPlugin = new Webpack.optimize.UglifyJsPlugin();
var CommonsChunkPlugin = new Webpack.optimize.CommonsChunkPlugin({ names : ['vendor', 'manifest']});

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: src + 'app.js',
    },
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
        path: path.resolve(__dirname, dist)
    },
    devServer: {
        contentBase : dist
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [DefinePlugin, HTMLWebpackPluginConfig, UglifyPlugin, CommonsChunkPlugin]
}