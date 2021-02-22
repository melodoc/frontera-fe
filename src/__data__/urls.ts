import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('frontera');

export const URLs = {
    login: {
        url: navigations['link.frontera.login']
    },
    personalizations: {
        url: navigations['link.frontera.personalizations']
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
    coursepage: {
        url: navigations['link.frontera.coursepage']
    },
}