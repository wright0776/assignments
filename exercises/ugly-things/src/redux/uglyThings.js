const initialState = {
    things: []
}

const thingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_THING':
            return { things: [...state.things, action.thing] }
        case 'REMOVE_THING':
            return { things: state.things.filter((thing, i) => i !== action.index) }
        case 'EDIT_THING':
            return { things: state.things.map((thing, i) => action.index === i ? action.newThing : thing) }
        default:
            return state;
    }
}

export const addThing = (thing) => {
    return {
        type: 'ADD_THING',
        thing
    }
}

export const removeThing = (index) => {
    return {
        type: 'REMOVE_THING',
        index
    }
}

export const editThing = (index, newThing) => {
    return {
        type: 'EDIT_THING',
        index,
        newThing
    }
}

export default thingsReducer;