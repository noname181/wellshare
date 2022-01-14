import * as types from '../constants';

const login = (payload) => {
    return {
        type: types.LOGIN,
        payload
    }
}

export default {
    login
}