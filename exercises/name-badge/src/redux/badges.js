const initialState = {
    data: [{
        firstName: 'Matthew',
        lastName: 'Wright',
        email: 'matdog@mat.com',
        placeOfBirth: 'Las Vegas',
        phone: '801-999-999',
        favoriteFood: 'pasketti',
        aboutYoself: ''
    }]
}

const badgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BADGE':
            return {
                data: [...state.data, action.badge]
            }
        case 'REMOVE_BADGE': 
            return {
                data: state.data.filter((badge,i) => i !== action.index)
            }
        case 'EDIT_BADGE':
            return {
                data: state.data.map((badge,i) => {
                    if(i === action.index){
                        return action.newBadge;
                    } else {
                        return badge;
                    }
                })
            }
        default: 
            return state;
    }
}

export const addBadge = badge => {
    return {
        type: 'ADD_BADGE',
        badge
    }
}

export const removeBadge = index => {
    return {
        type: 'REMOVE_BADGE',
        index
    }
}

export const editBadge = (index, newBadge) => {
    return {
        type: 'EDIT_CAT',
        index,
        newBadge
    }
}

export default badgeReducer;