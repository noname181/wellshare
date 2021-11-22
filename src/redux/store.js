// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// Imports: Redux Root Reducer
import rootReducer from './reducers/index';


// Redux: Store
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        createLogger(),
    ),
);

// Exports
export default store
