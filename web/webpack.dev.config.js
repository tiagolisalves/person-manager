var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'src/index.html' });

const src = './src';

module.exports = {
    entry: src + '/app.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
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
            }, 
            {
                test: /\.css$/,
                use:  [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}