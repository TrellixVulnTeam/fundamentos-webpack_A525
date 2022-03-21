const modoDev = process.env.NODE_ENV !== "production"
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    }
}