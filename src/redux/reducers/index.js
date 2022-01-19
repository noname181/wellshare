// Imports: Dependencies
import { combineReducers } from 'redux'
import auth from './auth'


// Redux: Root Reducer
const rootReducer = combineReducers({
    auth,
});
// Exports
export default rootReducer