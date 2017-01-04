const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../helpers');
const path = require('path');

module.exports = {

    entry: {
        vendor: './public/libs/vendor.js',
        app: './src/main.ts'
    },

    include: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "public/libs")
    ],

    resolve: {
        extensions: ['', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.tsx$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules"),
                plugins: ['transform-runtime'],
                query: {
                    presets: ['es2015','stage-0', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    },


    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}