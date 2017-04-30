const path = require('path');
const config = {
    entry: path.resolve(__dirname, 'resources/assets/js/main.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        inline: true,
        publicPath: "http://localhost:8080/public/js/"
    }
};

module.exports = config;
