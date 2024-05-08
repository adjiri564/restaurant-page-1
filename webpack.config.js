const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[id].css'}),
    ],
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
