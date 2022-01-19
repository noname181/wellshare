// Imports: Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// Imports: Redux Root Reducer
import rootReducer from './reducers/index';

const persistConfig = {
    key: "storage",
    storage: AsyncStorage,
    whitelist: ["auth"], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = compose(
    applyMiddleware(thunk, createLogger())
    // ,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
const store = createStore(pReducer, {}, middleware);
const persistor = persistStore(store);
export { persistor, store };

// // Redux: Store
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunk,
//         createLogger(),
//     ),
// );

// // Exports
// export default store
