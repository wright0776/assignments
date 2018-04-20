const redux = require('redux');

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                contacts: [...state.contacts, action.contact]
            }
        case 'REMOVE_CONTACT':
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name )
            }
        default: 
            return state;
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = contact => {
    store.dispatch({
        type: 'ADD_CONTACT',
        contact
    });
}

const removeContact = name => {
    store.dispatch({
        type: 'REMOVE_CONTACT',
        name
    });
}

addContact({
    name: "Philip",
    phone: "444-444-4444",
    email: "phil@fill.com"
});
addContact({
    name: "Dill",
    phone: "444-555-4444",
    email: "dill@fill.com"
});
removeContact('Philip');
addContact({
    name: "Will",
    phone: "555-999-0000",
    email: "will@fill.com"
})