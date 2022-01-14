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
            console.log(new_state)
            return new_state;
        }
        default: {
            return state;
        }
    }
};
// Exports
export default loginReducer;