import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';
import fs from 'fs';
import glob from 'glob';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';
=======
import { fileURLToPath } from "url";
import fs from 'fs';
import glob from 'glob';
>>>>>>> 01dd9ac5db1eb2d460e26ad31242fc8c288117d1

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
export default {
=======
const PATHS = {
    src: path.join(__dirname, "src/views"),
};

let views = fs.readdirSync ('./src/views');
let htmlPlugins - [];
for (let view of views) {
    htmlPlugins.push(new HtmlWebpackPlugin({
    filename: view,
    template: './src/views/' + view
    }));
}
module.exports = {
>>>>>>> 01dd9ac5db1eb2d460e26ad31242fc8c288117d1
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
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.nunjucks$/i,
                use: ['simple-nunjucks-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`src/views/**/*`, { nodir: true }),
        // }),
    ],
}
