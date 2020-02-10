const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'dist')
    },

    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './html/index.html'
        }),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            {
                from : './img/cards__img',
                to: 'img/cards__img',
            },

            {
                from : './img/menu__logo-img',
                to: 'img/menu__logo-img',
            }
        ])
    ],

    

}