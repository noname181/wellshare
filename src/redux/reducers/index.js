// Imports: Dependencies
import { combineReducers } from 'redux'
import loginReducer from './loginReducer'


// Redux: Root Reducer
const rootReducer = combineReducers({
    loginReducer,
});
// Exports
export default rootReducer