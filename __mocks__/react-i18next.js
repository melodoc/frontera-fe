const locales = require('../locales/ru.json');

module.exports = {
    useTranslation: () => {
        return {
            t: key => {
                return locales[key];
            }
        }
    }
};