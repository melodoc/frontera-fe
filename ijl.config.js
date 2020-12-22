const pkg = require('./package');

const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    "apiPath": "stubs/api",
    webpackConfig: {
        output: {
            publicPath: `/static/frontera/${pkg.version}/`
        },
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [
                { loader: 'style-loader', },
                {
                  loader: 'css-loader',
                  options: {
                    modules:true,
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          'postcss-preset-env',
                          {
                            // Options
                          },
                        ],
                        
                      ],
                    },
                  },
                },
              ],
            },
          ],
        },
    },
    config: {
        'frontera.login': '/api/login'
    }
};
