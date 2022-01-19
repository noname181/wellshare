import * as types from '../constants';

const login = (payload) => {
    return {
        type: types.LOGIN,
        payload
    }
}

const logout = () => {
    return {
        type: types.LOGOUT,
    }
}

export default {
    login,
    logout
}