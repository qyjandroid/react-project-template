const merge=require("webpack-merge");
const baseConfig=require("./webpack.base");
const variable =require("./webpackUtils/variable") ;

const config = {
    mode: "production",
    cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
    optimization: {
        minimize: true,//开启压缩
        splitChunks: {
            chunks: "all", // 匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
            automaticNameDelimiter: "-",
            cacheGroups: {
                // 项目第三方组件
                vendor: {
                    name: false,
                    enforce: true, // ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    // filename: "vendor.[hash].js"
                    minChunks: 2
                },
                // 项目公共组件
                default: {
                    minSize: 0, // 分离后的最小块文件大小默认3000
                    name: "common", // 用以控制分离后代码块的命名
                    minChunks: 3, // 最小共用次数
                    priority: 10, // 优先级，多个分组冲突时决定把代码放在哪块
                    reuseExistingChunk: true
                }
            }
        }
    }
};

export default merge(baseConfig, config);