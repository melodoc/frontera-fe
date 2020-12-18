const pkg = require('./package');

module.exports = {
    "apiPath": "stubs/api",
    "webpackConfig": {
        "output": {
            "publicPath": `/static/frontera/${pkg.version}/`
        },
    },
    config: {
        'frontera.login': '/api/login'
    }
}
