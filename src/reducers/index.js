import { combineReducers } from 'redux'
import userReducers from './user.reducers'
import profileReducers from './profile.reducers'
import homeReducers from './home.reducers'
import tourReducers from './tour.reducers'
import providerReducers from './provider.reducers'
import tourDetailReducers from './tourDetail.reducers'
import bookingReducers from './booking.reducers'
import blogReducers from './blog.reducers'
export default combineReducers({
    userReducers,
    profileReducers,
    homeReducers,
    tourReducers,
    providerReducers,
    tourDetailReducers,
    bookingReducers,
    blogReducers
})