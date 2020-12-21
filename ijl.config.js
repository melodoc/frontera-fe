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
                test: /\.(jpe?g|gif|svg|png|woff|woff2|ttf|eot|wav|mp3)$/,
                loader: "file-loader",
                options: {
                  // Итоговое имя файла, расположенного рядом с бандлом
                  name: 'img/[name]--[hash:base64:5].[ext]'
              }
              },
              // {
              //   test: /\.svg$/,
              //   // import icon from './icon.svg' // icon === '<svg><path /></svg>'
              //   loader: 'svg-inline-loader',
              //   options: {
              //       // Удалять пустые теги
              //       removeTags: true,
              //       // Всегда удалять эти теги
              //       removingTags: ['title', 'desc'],
              //       // Удалять атрибуты с тэга svg
              //       removeSVGTagAttrs: false
              // }
            //} 
          ],
        },
    },
    navigations: {
      'frontera':'/frontera',
      'link.frontera.login':'/login',
    },
    config: {
        'frontera.login': '/api/login'
    }
}
