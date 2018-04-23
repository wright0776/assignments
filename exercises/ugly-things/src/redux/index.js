import {createStore, combineReducers} from 'redux';

import thingsReducer from './uglyThings';

const store = createStore(combineReducers({uglyThings: thingsReducer}));

store.subscribe(() => console.log(store.getState()))

export default store;