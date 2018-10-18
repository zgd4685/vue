const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
/*vue-loader依赖插件*/
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    entry: path.join(__dirname,"./src/entry.js"),
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,"./dist/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/,use: ["style-loader","css-loader"]},
            {test: /\.less$/,use: ["style-loader","css-loader","less-loader"]},
            {test: /\.vue$/,use: "vue-loader"},
            {test: /\.(woff|woff2|eot|ttf|otf)$/,use: "file-loader"}
        ]
    },
    resolve: {
        alias: {
            //"vue$": "vue/dist/vue.js"/*加载完整包路径*/
        }
    }
};