import { tourTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const location = (state = { data : []}, action ) => {
    switch (action.type) {
        case tourTypes.SET_LOCATION:
            
            return {
                ...state,
                data : action.data
            }
    
        default:
            return state
    }
}

const province = (state = { province : []}, action ) => {
    switch (action.type) {
        case tourTypes.SET_PROVINCE:
            
            return {
                ...state,
                province : action.province
            }
    
        default:
            return state
    }
}

const tour = (state = {
    data: [], page: 1, totalpage: null, searchtext: '', datedepart : new Date()
}, action) => {
    switch (action.type) {
        case tourTypes.SET_TOUR: {
            return {
                ...state,
                data: action.data
            }
        }
        case tourTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case tourTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case tourTypes.RESET_TOUR: {
            return { data: [], page: 1, totalpage: null}
        }
        case tourTypes.SET_SEARCH_TEXT: {
            return {
                ...state, 
                searchtext: action.searchtext
            }
        }
        case tourTypes.SET_DATE_DEPART: {
            return {
                ...state, 
                datedepart: action.datedepart
            }
        }
        
        default: return state
    }
}
export default combineReducers({
    location,
    province,
    tour
})