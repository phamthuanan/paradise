import axios from 'axios'
import { tourTypes } from '../constants/action.types'

export const getLocation = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/location/all')
    }
    catch (err) {
        return
    }
    dispatch(setLocation(res.data.data))
}

export const getProvince = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/province/all')
    }
    catch (err) {
        return
    }
    dispatch(setProvince(res.data.data))
}

export const getTour = () => async (dispatch, getState) => {
    
    let res
    try {
        res = await axios.post('http://localhost:8080/tour/alltour', {
            page: getState().tourReducers.tour.page,
            searchtext: getState().tourReducers.tour.searchtext,
            datedepart : null
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setTour(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}

export const setTour = (data) => ({
    type: tourTypes.SET_TOUR,
    data
})

export const setPage = (page) => ({
    type: tourTypes.SET_PAGE,
    page
})

export const setTotalPage = (totalpage) => ({
    type: tourTypes.SET_TOTAL_PAGE,
    totalpage
})

export const setLocation = (data) => ({
    type: tourTypes.SET_LOCATION,
    data
})

export const setProvince = (province) => ({
    type: tourTypes.SET_PROVINCE,
    province
})

export const setDateDepart = (datedepart) => ({
    type: tourTypes.SET_DATE_DEPART,
    datedepart
})

export const backPage = () => (dispatch, getState) => {
    let page = getState().tourReducers.tour.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().tourReducers.tour.page
    let totalpage = getState().tourReducers.tour.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}

 export const setSearchText = (searchtext) => ({
     type: tourTypes.SET_SEARCH_TEXT,
     searchtext
 })

 export const searchTextSubmit = () => async(dispatch, getState) => {
    dispatch(setPage(1))
    let res
    try {
        res = await axios.post('http://localhost:8080/tour/alltour', {
            page: 1,
            searchtext: getState().tourReducers.tour.searchtext,
            datedepart: getState().tourReducers.tour.datedepart
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setTour(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
 } 