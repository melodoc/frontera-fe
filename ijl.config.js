const pkg = require('./package');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    "apiPath": "stubs/api",
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
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
                        modules: {
                            mode: 'local',
                            exportGlobals: true,
                            localIdentName: isProd ?
                                '[hash:base64]'
                                : '[path]--[name]__[local]--[hash:base64:3]',
                            localIdentContext: path.resolve(__dirname, 'src'),
                            exportLocalsConvention: "camelCase",
                        },
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
    navigations: {
      'frontera':'/frontera',
      'link.frontera.login':'/login',
      'link.frontera.lang':'/lang',
      'link.frontera.themes':'/themes',
      'link.frontera.personalizing':'/personalizing',
      'link.frontera.suggestions':'/suggestions',
      'link.frontera.home':'/home',
      'link.frontera.registration':'/registration',
      'link.frontera.resetpassword':'/resetpassword',
      'link.frontera.coursepage':'/coursepage',
    },
    config: {
        'frontera.api': '/api'
    }
};
