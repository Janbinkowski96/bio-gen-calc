const webpack = require('webpack');

const config = {
    entry:  __dirname + '/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.css']
    },
};
module.exports = config;