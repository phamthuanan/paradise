import axios from 'axios'
import { homeTypes } from '../constants/action.types'

export const getTour = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/tour/getTourHome')
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setTour(res.data.data))
}

export const setTour= (data) => ({
    type: homeTypes.SET_TOUR,
    data
})

export const getDiscountTour = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/tour/tourdiscount')
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setDiscountTour(res.data.data))
}

export const setDiscountTour= (data) => ({
    type: homeTypes.SET_DISCOUNT_TOUR,
    data
})

//export const getListBlog = () => async (dispatch, getState) => {
//    let res
//    try {
//        res = await axios.get('http://localhost:8080/tour/tourDiscount')
//    }
///    catch (err) {
//        console.log(err.response)
//       return
//    }
//    dispatch(setTour(res.data.data))
//}

//export const setListBlog= (data) => ({
//    type: homeTypes.SET_BLOG,
//    data
//})
