const path = require('path')
const baseConfig = require('../webpack.config')
const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname, "../scripts/react-music-widget.js"),
    output: {
        publicPath: "/react-music-widget/",
        path: path.resolve(__dirname, "../react-music-widget/"),
        filename: 'index.js'
    },
})