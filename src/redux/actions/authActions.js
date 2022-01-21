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

const update_auth = (payload) => {
    return {
        type: types.UPDATE_AUTH,
        payload
    }
}

export default {
    login,
    logout,
    update_auth
}