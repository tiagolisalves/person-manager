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
            }, 
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            }



        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}