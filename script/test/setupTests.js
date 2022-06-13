import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
    adapter: new Adapter(),
    setupFilesAfterEnv: ['jest-enzyme'],
    testEnvironment: 'enzyme',
});

// Mocking window.scrollTo();
window.scrollTo = (x, y) => {
    document.documentElement.scrollTop = y;
};
