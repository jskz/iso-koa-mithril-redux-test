module.exports = {
    entry: [
        './src/client.js',
        './src/sass/style.sass'
    ],
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
