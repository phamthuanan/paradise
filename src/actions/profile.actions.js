import axios from 'axios'
import storeConfig from '../config/storage.config'
import { profileTypes } from '../constants/action.types'
export const auth = () => async (dispatch, getState) => {
    if(storeConfig.getUser() === null){
        dispatch(setAuthFail())
        return false
    }
    const user = storeConfig.getUser()
    try {
        await axios.post('http://localhost:8080/auth', {
            email: user.email,
            token: storeConfig.getToken(),
        })
    }
    catch (err) {
        dispatch(setAuthFail())
        return false
    }
    dispatch(setAuthSuccess())
    return true
}
export const setAuthSuccess = () => ({
    type: profileTypes.SET_AUTH_LOGIN_SUCCESS
})
export const setAuthFail = () => ({
    type: profileTypes.SET_AUTH_LOGIN_FAIL
})

export const setUpdateInforSuccess = () => ({
    type:  profileTypes.UPDATE_INFOR_USER_SUCCESS
})
export const setUpdateInforFail = () => ({
    type:  profileTypes.UPDATE_INFOR_USER_FAIL
})
export const resetProfile = () => ({
    type:  profileTypes.RESET_PROFILE
})
export const updateInfor = (email, name, phone, address, avatar, file ) => async (dispatch, getState) => {
    const data = new FormData()
    data.append("file", file);
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("address", address);
    data.append("avatar", avatar);
        await axios.post('http://localhost:8080/user/updateinfor', data, {})
            .then(res =>{
                console.log(res.data)
                storeConfig.clear()
                storeConfig.setToken(res.data.token)
                storeConfig.setUser(res.data.user)
                dispatch(setUpdateInforSuccess())
                return true
            }).catch(err =>{
               console.log(err)
                dispatch(setUpdateInforFail())  
                return false
            })
    
   
}