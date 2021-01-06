import axios from 'axios'
import { providerTypes } from '../constants/action.types'

export const getProvider = (providerId) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/provider/' + providerId)
    }
    catch (err) {
        console.log(err)
        return
    }
    console.log(res.data.data)
    dispatch(setProvider(res.data.data))
    
}

export const getAllProvider = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/provider')
    }
    catch (err) {
        return
    }
    console.log(res.data.data)
    dispatch(setAllProvider(res.data.data))
}

export const setAllProvider = (allprovider) => ({
    type: providerTypes.SET_ALL_PROVIDER,
    allprovider
})
export const setProvider = (data) => (
    {
    type: providerTypes.SET_PROVIDER,
    data
})
export const getNameProvider = (nameProviderId) => async (dispatch, getState) => {
    let res 
        try {
            res = await axios.get("http://localhost:8080/provider/name/" + nameProviderId);
        } catch (err) {
          console.log(err);
          return;
        }
    dispatch(setNameProvider(res.data.name))
    
}

export const setNameProvider = (nameprovider) => (
    {
    type: providerTypes.SET_NAME_PROVIDER,
    nameprovider
})