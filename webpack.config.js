
const path = require('path');

module.exports = {

    mode: 'development',

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                      loader: "babel-loader", // babel を利用する
                      options: { // babel のオプションを指定する
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react" // React の JSX を解釈
                        ]
                      }
                    }
                  ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    },
                    },
                ],
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        static: {
          directory: __dirname,
        },
        compress: true,
    },

    target:['web', 'es5'] // default

}