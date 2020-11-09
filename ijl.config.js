const pkg = require('./package')

module.exports = {
    "apiPath": "stubs/api",
    "webpackConfig": {
        "output": {
            "publicPath": `/static/intro/${pkg.version}/`
        }
    },
}
