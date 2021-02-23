import {act} from "react-dom/test-utils";
import _ from 'lodash';

export const multipleRequest = (mock, responses) =>
    act(async () => {
        await mock.onAny().reply((config) => {
            if(responses.length === 0) {
                return[500, {}];
            }
            console.log({responses});
            const [method, url, params, ...response] = responses.shift()
            const match =
                config.url.includes(url) &&
                config.method.toUpperCase() === method &&
                (!config.params || _.isEqual(config.params, params))
            if (match) {
                return response
            }

            return [500, {}]
        })
    });