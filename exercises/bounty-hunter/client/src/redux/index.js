import {createStore} from 'react-redux';

import bountiesReducer from './bounties';

const store = createStore({bounties: bountiesReducer});

store.subscribe(()=>console.log(store.getState()));

export default store;