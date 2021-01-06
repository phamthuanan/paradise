import axios from 'axios'
import { tourDetailTypes } from '../constants/action.types'
export const getTourDetail = (id) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/tour/' + id)
    }
    catch (err) {
        return
    }
    dispatch(setTourDetail(res.data.data))
}


export const setTourDetail = (tourDetail) => ({
    type: tourDetailTypes.SET_TOUR_DETAIL,
    tourDetail
})

export const getTourRelated = (id) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/tour/related/' + id)
    }
    catch (err) {
        return
    }
    dispatch(setTourRelated(res.data.data))
}


export const setTourRelated = (tourrelated) => ({
    type: tourDetailTypes.SET_TOUR_RELATED,
    tourrelated
})


