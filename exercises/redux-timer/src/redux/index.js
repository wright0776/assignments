import {createStore} from 'redux';

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const stop = () => {
    return {
        type: 'STOP'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

function reducer (state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state +10;
        case 'STOP':
            return state;
        case 'RESET': 
            return state = 0;
        default: 
            return state;
    }
}

export default createStore(reducer);