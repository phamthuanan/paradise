import React, { Component } from 'react'
import ComfirmBooking from '../components/booking/ComfirmBooking'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'

class ConfirmBookingContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
    }

    render(){
        return(
            <ComfirmBooking
                history = {this.props.history}
                islogin = {this.props.islogin}
            />
        )
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ConfirmBookingContainer);