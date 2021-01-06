import { homeTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const tour = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_TOUR: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const tourDiscount = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_DISCOUNT_TOUR: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}

const blog = (state = { data : []}, action ) => {
    switch (action.type) {
        case homeTypes.SET_BLOG:
            
            return {
                ...state,
                data : action.data
            }
    
        default:
            return state
    }
}

export default combineReducers({
    tour, 
    tourDiscount,
    blog
})