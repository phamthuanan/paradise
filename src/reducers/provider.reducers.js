import { providerTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const provider = (state = { data : null, allprovider : []}, action ) => {
    switch (action.type) {
        case providerTypes.SET_PROVIDER:
            
            return {
                ...state,
                data : action.data
            }
        
        case providerTypes.SET_ALL_PROVIDER:
        
            return {
                ...state,
                allprovider : action.allprovider
            }
        case providerTypes.SET_NAME_PROVIDER:
        
            return {
                ...state,
                nameprovider : action.nameprovider
            }
        default:
            return state
    }
}

export default combineReducers({
    provider
})