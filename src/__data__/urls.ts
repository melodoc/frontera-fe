import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('frontera');

export const baseUrl = ['frontera'];

export const URLs = {
    login: {
        url: navigations['link.frontera.login']
    },
    
}