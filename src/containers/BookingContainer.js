import React, { Component } from 'react'
import Booking from '../components/booking/BookingTour'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'

class BookingContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
    }

    render(){
        return(
            <Booking
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
)  (BookingContainer);