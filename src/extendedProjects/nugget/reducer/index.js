import { combineReducers } from 'redux';
import { SET_RECEPIES, SET_FAVOURITE_RECEPIES, REMOVE_FAVOURITE_RECEPIES } from '../actions'

function recepies ( state = [], action ){
    switch (action.type) {
        case SET_RECEPIES:
            return action.items;    
        default:
            return state;
    }
}

function favouriteRecepies ( state = [], action ){
    switch (action.type) {
        case SET_FAVOURITE_RECEPIES:
            state = [...state , action.item]
            return state;
        case REMOVE_FAVOURITE_RECEPIES:
            return state.filter( (items) => items !== action.item)
        default:
            return state;
    }
}

const rootReducer = combineReducers( { recepies, favouriteRecepies} )
export default rootReducer;