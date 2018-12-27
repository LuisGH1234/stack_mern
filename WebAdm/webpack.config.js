module.exports = {
    entry: ['babel-polyfill', './src/app/index.js'],
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ],
                test: /\.css$/
            }
        ]
    },
    devServer: {
        allowedHosts: [
            'localhost'
        ]
    }
}