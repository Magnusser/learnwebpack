const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 9000,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/.src/index.html'
        })
    ],
}