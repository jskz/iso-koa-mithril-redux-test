module.exports = {
    entry: ['./client.js'],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static'
    }
}
