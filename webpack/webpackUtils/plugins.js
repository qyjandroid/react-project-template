import webpack from "webpack";
const CleanWebpackPlugin = require("clean-webpack-plugin") ;
const HtmlWebpackPlugin =require("html-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const variable =require("./variable") ;

const {PUBLIC_PATH,DIST_PATH,IS_DEV,SRC_PATH}=variable;

function getHTMLPlugins() {

    const indexHtmlPlugin = new HtmlWebpackPlugin({
        template: `${PUBLIC_PATH}/index.html`,
        filename: `${DIST_PATH}/index.html`,
        inject: false,
        hash: true, // 会在打包好的bundle.js后面加上hash串
        title: "",
        minify: {
            removeComments: true, // 删除注释
            collapseWhitespace: true,
            minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
            minifyJS: true // 压缩 HTML 中出现的 JS 代码
        },
        page: "index"
    });

    return [indexHtmlPlugin];
}

 function getPlugins() {
    // clean
    const cleanPlugin = new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["**/*", '!dll', '!dll/*.*']
    });

    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: IS_DEV ? '[name].css' : '[name].[contenthash:8].css',
        chunkFilename: IS_DEV ? '[name].chunk.css' : '[name].[contenthash:8].chunk.css',
        // 常遇到如下警告，Conflicting order. Following module has been added:…。
        // 此警告意思为在不同的js中引用相同的css时，先后顺序不一致。也就是说，在1.js中先后引入a.css和b.css，而在2.js中引入的却是b.css和a.css，此时会有这个warning。
        ignoreOrder: true,
    });

    const copyPlugin=new CopyPlugin({
        patterns: [
          { from: path.resolve(SRC_PATH,"assets"), to: path.resolve(DIST_PATH,"assets") },
        ],
    });

    return [
        cleanPlugin,
        copyPlugin,
        ...getHTMLPlugins(),
        miniCssPlugin
    ];
}

module.exports = {
    getPlugins
}