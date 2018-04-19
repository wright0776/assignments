import { createStore, combineReducers } from 'redux';
import badgeReducer from './badges';

const store = createStore(combineReducers({ badges: badgeReducer }));

// store.subscribe(() => {
//     console.log(store.getState())
// })

export default store;