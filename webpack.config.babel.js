import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
    context: __dirname + '/app/src',
    entry: {
        'main': './main.ts',
        'vendor': './vendor.ts',
        'html': './index.html'
    },
    output: {
        path: __dirname + '/app/dist',
        filename: "bundle.js",
        publicPath: 'app/dist'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('assets/main.css', {
            allChunks: true
        })
    ],

    resolve: {
        extensions: ['', '.ts', '.js'],
        moduleDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },

            { test: /\.html$/, loader: 'file?name=[name].[ext]' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('main', 'css!resolve-url!sass?sourceMap') },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[hash].[ext]" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[hash].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[hash].[ext]" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: "file?name=assets/fonts/[hash].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[hash].[ext]" }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './app/dist'
    },

    devtool: '#inline-source-map'
};