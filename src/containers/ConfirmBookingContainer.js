import React, { Component } from 'react'
import ComfirmBooking from '../components/booking/ComfirmBooking'
import Reload from '../components/loading/Reload'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as tourDetailActions from '../actions/tourDetail.actions'
import * as bookingActions from '../actions/booking.actions'

class ConfirmBookingContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        var text = this.props.match.params.token
        var id = text.split("-")
        this.props.bookingActions.getBooking(id[0])
        this.props.tourDetailActions.getTourDetail(id[1])

        
    }

    render(){
        if(this.props.booking && this.props.tourDetail){
                return(
                <ComfirmBooking
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.actions.logout()}
                    allProvider = {this.props.allProvider}
                    booking = {this.props.booking}
                    tourDetail = {this.props.tourDetail}
                />
            )
        }
        else{
            return(
                <Reload / >
            )
        }
        
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    tourDetail : state.tourDetailReducers.tourdetail.tourDetail,
    booking : state.bookingReducers.booking.booking
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch),
        tourDetailActions : bindActionCreators(tourDetailActions, dispatch),
        bookingActions : bindActionCreators(bookingActions,dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ConfirmBookingContainer);