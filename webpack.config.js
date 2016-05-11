const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

/* Checks whether we're on dev or prod */
const TARGET = process.env.npm_lifecycle_event;


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['app', 'node_modules']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.pcss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss'
                ],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel?cacheDirectory'
                ],
                include: PATHS.app
            }
        ]
    },
    postcss: [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('postcss-cssnext')(),
        require('rucksack-css')(),
        require('postcss-size')(),
        require('lost')(),
        require('postcss-reporter')()
    ]
}

// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if(TARGET === 'build') {
    module.exports = merge(common, {});
}
