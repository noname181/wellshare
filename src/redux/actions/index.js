import * as types from '../constants';

export const login = (payload) => {
    return {
        type: types.LOGIN,
        payload
    }
}

