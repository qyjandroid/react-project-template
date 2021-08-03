const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const variable =require("./webpackUtils/variable") ;
const resolveConfig = require("./webpackUtils/resolve");
const {SRC_PATH, DIST_PATH, IS_DEV, IS_PRO, getCDNPath}=variable;


const config = {
    entry: {
        index: path.join(SRC_PATH, "index.tsx")
    },
    output: {
        path: DIST_PATH,
        filename: IS_DEV ? "[name].bundle.js" : "[name].[contenthash:8].bundle.js",
        publicPath: getCDNPath(),
        globalObject: 'this', 
        chunkFilename: IS_DEV ? "[name].chunk.js" : "[name].[contenthash:8].chunk.js",
    },
    //loader的执行顺序默认从右到左，多个loader用[],字符串只用一个loader，也可以是对象的格式
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                include: [SRC_PATH],
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: require("os").cpus().length * 2,
                            parallel: true
                        }
                    },
                    {
                        loader: "babel-loader", // 这是一个webpack优化点，使用缓存
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$|\.scss$/i,
                include: [SRC_PATH],
                exclude: /node_modules/, // 取消匹配node_modules里面的文件
                use: [
                    IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: !IS_PRO,
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                type: 'asset',
            }
        ]
    },
    resolve: resolveConfig
};

module.exports =config;