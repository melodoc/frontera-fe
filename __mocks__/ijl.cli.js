const { navigations, features, config } = require('../ijl.config');

module.exports = {
    getNavigations: () => {
        return {
            ...navigations,
        };
    },
    getNavigationsValue: key => navigations[key],
    getFeatures: () => ({ ...features }),
    getConfigValue: key => config[key],
};
