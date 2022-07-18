/*
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer: {}
})*/

import {combineReducers, legacy_createStore as createStore} from 'redux';
import counterReducer from '../reducers/counterReducer';
import {loadState, saveState} from './localStorage';
import {throttle} from 'lodash';

export const rootReducer = combineReducers({
    counter: counterReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store


const persistedState = loadState();
const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

/*
store.subscribe(throttle(() => {
    saveState({
        counter: store.getState().counter
    });
}, 1000));
*/

export default store;