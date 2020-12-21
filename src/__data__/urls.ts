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
}