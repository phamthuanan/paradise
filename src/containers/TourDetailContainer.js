import React from "react"
import TourDetail from '../components/tour/TourDetail'
import { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'

class TourDetailContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
    }

    render(){
        return(
            <TourDetail
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
) (TourDetailContainer);