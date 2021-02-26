import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('frontera');

export const URLs = {
    auth: {
        url: navigations['link.frontera.auth']
    },
    personalizations: {
        url: navigations['link.frontera.personalizations']
    },
    catalogCourses: {
        url: navigations['link.frontera.catalogCourses']
    },
    home: {
        url: navigations['link.frontera.home']
    },
    coursepage: {
        url: navigations['link.frontera.coursepage']
    },
}