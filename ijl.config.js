const pkg = require('./package')

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
          ],
        },
    },
}
