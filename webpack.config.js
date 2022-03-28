const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

    module.exports = {
        entry: {
            app: ['./src/index.tsx'],
            vendor: ['react', 'react-dom']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].bundle.js',
            clean: true,
            publicPath: '/'
        },
        mode: "production",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        performance : {
            hints : false
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ]
        },

        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html"
            })
        ]
    };