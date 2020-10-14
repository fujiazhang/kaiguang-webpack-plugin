const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const KaiguangPlugin = require('./plugins/kaiguang-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'test')
    },
    plugins: [
        new CleanWebpackPlugin(), //自动清除输出目录
        new KaiguangPlugin({})
    ]
}
