import React from 'react'
import Tour from '../components/tour/Tour'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
class TourContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
    }
    
    render(){
        return(
            <Tour
                history = {this.props.history}
                islogin =  {this.props.islogin}
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
) (TourContainer);