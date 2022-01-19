import * as types from '../constants';

// Initial State
const initialState = {

};
// Redux: Counter Reducer
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            let new_state = {
                ...action.payload,

            }
            return new_state;
        }
        case types.LOGOUT: {
            return {};
        }
        default: {
            return state;
        }
    }
};
// Exports
export default loginReducer;