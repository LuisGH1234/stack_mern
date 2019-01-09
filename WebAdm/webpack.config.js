module.exports = {
    entry: {
        bundle: ['babel-polyfill', './src/app/index.js']
    },
    output: {
        path: __dirname + '/src/public/',
        filename: '[name].js'
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
                    { 
                        loader: "css-loader", 
                        options: {
                            sourceMap: true
                        }
                    },
                    { 
                        loader: "sass-loader",
                        options: {
                            //includePaths: ['src/app/sass/style.scss', 'src/public/css/style.css'],
                            implementation: require('sass'),
                            sourceMap: true
                            //fiber: Fiber
                        }
                    }
                ],
                test: /\.scss$/
            }
        ]
    },
    devServer: {
        allowedHosts: [
            'localhost'
        ]
    }
}