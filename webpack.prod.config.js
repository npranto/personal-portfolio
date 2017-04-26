console.log('RUNNING IN PRODUCTION...');

// requiring dependencies used inside webpack.config.js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractSass = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// storing vendor packages and libraries
const VENDOR_LIBS = [
    'react',
    'react-dom',
    'react-router-dom',
    'react-tooltip',
    'emailjs-com'
]

// configuration for development
const config = {
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: 'babel-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.jsx$/,
              use: 'babel-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: "file-loader?name=/assets/images/[name]_[hash].[ext]",
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    node: {
        console: true,
        fs: true,
        net: true,
        tls: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/assets/images/favicon/favicon.svg',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icon-[name]-[hash]/',
            // Emit all stats of the generated icons
            emitStats: false,
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
              android: false,
              appleIcon: false,
              appleStartup: false,
              coast: false,
              favicons: true,
              firefox: true,
              opengraph: false,
              twitter: false,
              yandex: false,
              windows: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new ExtractSass('styles.bundle.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

const webpackProdConfig = module.exports = config;
