import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('frontera');

export const baseUrl = ['frontera'];

export const URLs = {
    login: {
        url: navigations['link.frontera.login']
    },
    init: {
        url: navigations['link.frontera.init']
    },
    suggestions: {
        url: navigations['link.frontera.suggestions']
    },
    home: {
        url: navigations['link.frontera.home']
    },
    registration: {
        url: navigations['link.frontera.registration']
    },
    resetpassword: {
        url: navigations['link.frontera.resetpassword']
    },
}

const productLink = navigations['link.frontera.product.view'].replace('{{id}}', '12345')

console.log({productLink})