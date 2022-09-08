const path = require("path");

module.exports = {
    test:()=>console.log('Test'),
    mode: "development",
    entry: path.join(__dirname, "../..", "src", "client", "js", "index.js"),
    output: {
        path: path.join(__dirname, "../..", "dist", "js"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                exclude: path.join(__dirname, "node_modules"),
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {}
                }]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }]
            }
        ],
    },
    resolve: {
        extensions: [".css", ".scss", ".js", ".jsx", ".json", ".otf"],
    },
    target: "web",
    context: __dirname,
    stats: {
        colors: true,
        reasons: true,
        chunks: true,
    },
};