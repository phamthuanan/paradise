import { tourDetailTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const tourdetail = (state = {tourDetail: null, tourrelated: []}, action) => {
    switch (action.type) {
        case tourDetailTypes.SET_TOUR_DETAIL: {
            return {
                ...state,
                tourDetail: action.tourDetail
            }
        }
        case tourDetailTypes.SET_TOUR_RELATED: {
            return {
                ...state,
                tourrelated: action.tourrelated
            }
        }
        default: return state
    }
}
export default combineReducers({
    tourdetail,
})