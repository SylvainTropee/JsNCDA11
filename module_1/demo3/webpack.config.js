const path = require('path')

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module : {
        rules:[{
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    }
}