var path = require('path');
var config = {
    // 入口文件配置
    entry: {
        'bundle': './app/main.js',
        'other': './app/other.js'
    },
    // 入口文件输出配置 [name] 是取得 entry 的key 分别编译
    output: {
        path: 'build',
        filename: '[name].js'  //表每个包的相对路径
    },
    resolve: {
        // 自动补全后缀
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    }
}
module.exports = config;