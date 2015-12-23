module.exports = {
    entry: ['./src/client.js'],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.sass$/, loader: 'style!css!sass?indentedSyntax' }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static'
    }
}
