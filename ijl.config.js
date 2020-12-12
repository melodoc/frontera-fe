const pkg = require('./package');
const path = require('path');

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
                'style-loader',
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
                          "postcss-preset-env",
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
            {
              test: /\.(png|jpg|svg|gif)$/,
              use: ["file-loader"]
              },
              {
              test: /\.(ttf|woff|woff2|eot)$/,
              use: ["file-loader"]
              }, 
          ],
        },
    },
}
