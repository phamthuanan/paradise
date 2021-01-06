import { bookingTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const booking = (state = {booking: null, bookingbyuser : null}, action) => {
    switch (action.type) {
        case bookingTypes.SET_BOOKING: {
            return {
                ...state,
                booking: action.booking
            }
        }
        default: return state
    }
}
export default combineReducers({
    booking,
})