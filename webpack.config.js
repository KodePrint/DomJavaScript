const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/images/[hash].[ext][query]'
    },
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            // Regla para archivos
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // Regla para el css
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader'
                ],
            },
            // Regla para importar imagenes
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            // Para importar fonts woff y woff2
            // {
            //     test: /\.(woff|woff2|ttf)$/i,
            //     type:'asset/resource',
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit:10000,
            //             mimetype: "application/font-woff",
            //             name: "[name].[ext]",
            //             outputPath: "./assets/fonts/",
            //             publicPath: "./assets/fonts/",
            //             esModule: false,
            //         },
            //     },
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new Dotenv(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        })
    ],
    // Resolviendo el problema de utils
    resolve: {
        fallback: {
            util:require.resolve("util/")
        }
    },
};