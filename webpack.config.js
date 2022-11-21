const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV ?? 'development',

    target: devMode ? 'web' : 'browserslist',
    
    devtool: devMode ? 'eval-cheap-module-source-map' : false,

    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },

    devServer: {
        open: true,
        port: 3000,
        hot: true,
        compress: true,
        client: { overlay: true, },
    },

    plugins: [
                new HtmlWebpackPlugin({
                    title: 'SongBird',
                    inject: true,
                    template: './src/index.html', 
                    filename: 'index.html',
                }),

                new MiniCssExtractPlugin({ filename: 'style.css', }),
             ],

    module: {
                rules: [
                        {
                            test: /\.m?js$/i,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                },
                            },
                        },

                        {
                            test: /\.html$/i,
                            loader: "html-loader",
                        },

                        {
                            test: /\.(sa|sc|c)ss$/i,
                            use: [
                                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                                "css-loader",
                                "sass-loader",
                                {
                                    loader: "postcss-loader",
                                    options: { 
                                        postcssOptions: {
                                            plugins: [ ['postcss-preset-env', {}] ],
                                        },
                                    },

                                },
                            ],
                        },

                        {
                            test: /\.woff2?$/i,
                            type: 'asset/resource',
                        },

                        {
                            test: /\.(ico|svg|png|jpe?g|webp|gif)$/i,
                            type: 'asset/resource',
                        },

                        {
                            test: /\.mp3$/i,
                            type: 'asset/resource',
                        },
                    ],
            },
};