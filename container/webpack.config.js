const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:3081/remoteEntry.js',
                cart: 'cart@http://localhost:3082/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};