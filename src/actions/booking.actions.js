import axios from 'axios'
import { bookingTypes } from '../constants/action.types'
export const getBooking = (token) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/booking/getbookingbytoken/' + token)
    }
    catch (err) {
        return
    }
    dispatch(setBooking(res.data.data))
    
}


export const setBooking = (booking) => ({
    type: bookingTypes.SET_BOOKING,
    booking
})


