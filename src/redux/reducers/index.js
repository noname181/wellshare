// Imports: Dependencies
import { combineReducers } from 'redux'
import user_auth from './user_auth'


// Redux: Root Reducer
const rootReducer = combineReducers({
    user_auth,
});
// Exports
export default rootReducer