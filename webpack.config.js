const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

    module.exports = {
        entry: {
            app: ['./src/index.ts'],
            vendor: ['react', 'react-dom']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].bundle.js',
            clean: true
        },
        watch: true,
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        devServer: {
            liveReload: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader"
                }
            ]
        },

        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html"
            })
        ]
    };