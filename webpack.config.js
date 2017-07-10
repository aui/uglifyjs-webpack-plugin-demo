const os = require('os');
const path = require('path');
const webpack = require('webpack');
const findCacheDir = require('find-cache-dir');
const UglifyjsWebpackPlugin = require('./lib/uglifyjs-webpack-plugin');

module.exports = (env) => {
    const options = {
        parallel: {
            cache: findCacheDir({ name: 'uglifyjs-webpack-plugin-demo' }),
            workers: Math.max(os.cpus().length - 1, 1)
        }
    };
    if (env.cache) {
        const cache = ({"true": true, "false": false})[env.cache];
        if (!cache) {
            options.parallel.cache = false;
        }
    }

    if (env.parallel === 'false') {
        options.parallel.workers = 1;
    }

    console.log(
`-----------------------------------

[DEMO ${env.id}] UglifyjsWebpackPlugin Options: ${JSON.stringify(options, null, 4)}
`
    );
    const now = Date.now();
    return {
        context: __dirname,
        entry: {
            jquery: './src/jquery.js',
            angular: './src/angular.js',
            react: './src/react.js',
            vue: './src/vue.js',
            lodash: './src/lodash.js',
            backbone: './src/backbone.js',
            ember: './src/ember.js',
            underscore: './src/underscore.js'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[hash].js'
        },
        plugins: [
            new UglifyjsWebpackPlugin(options),
            function() {
                this.plugin('done', () => {
                    
                });
            }
        ]
    }
};