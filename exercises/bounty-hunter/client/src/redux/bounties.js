import axios from 'axios';

const initialState = {
    data: [],
    loading: true,
    errMsg: ''
}

const bountiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOUNTIES':
            return {
                ...state,
                data: action.bounties,
                loading: false
            }
        case 'POST_BOUNTY':
            return {
                ...state,
                data: action.bounty,
                loading: false
            }
        case 'GET_BOUNTY':
            return {
                ...state,
                data: action.bounty,
                loading: false
            }
        case 'DELETE_BOUNTY':
            return {
                data: state.data.filter(id => action.id !== id),
                loading: false
            }
        case 'EDIT_BOUNTY':
            return {
                data: state.data.map(bounty => action.id === bounty.id ? action.newBounty : bounty)
            }
        case 'ERR_MSG':
            return {
                ...state,
                data: action.errMsg,
                loading: false
            }
        default:
            return state;
    }
}

const url = 'http://localhost:8080'

export const getBounties = () => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: 'GET_BOUNTIES',
                    bounties: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: 'Sorry, data not available right now.'
                })
            })
    }
}

export const postBounty = () => {
    return dispatch => {
        axios.post(url)
            .then(response => {
                dispatch({
                    type: 'POST_BOUNTY',
                    bounty: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "Sorry, can't post a new bounty right now."
                })
            })
    }
}

export const getBounty = (id) => {
    return dispatch => {
        axios.get(url + id)
            .then(response => {
                dispatch({
                    type: 'GET_BOUNTY',
                    bounty: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "This bounty either does not exist or is unavailable right now."
                })
            })
    }
}

export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete(url + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_BOUNTY',
                    bounty: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "Either this bounty does not exist or is unavailable for deletion."
                })
            })
    }
}

export const editBounty = (id) => {
    return dispatch => {
        axios.put(url + id)
            .then(response => {
                dispatch({
                    type: 'EDIT_BOUNTY',
                    bounty: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "Sumthin ain't werkin!"
                })
            })
    }
}