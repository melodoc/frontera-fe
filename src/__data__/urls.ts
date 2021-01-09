import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('frontera');

export const baseUrl = ['frontera'];

export const URLs = {
    login: {
        url: navigations['link.frontera.login']
    },
    lang: {
        url: navigations['link.frontera.lang']
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