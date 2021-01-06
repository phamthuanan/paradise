import React, { Component } from 'react'
import Blog from '../components/blog/Blog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
class BlogContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
    }

    render(){
        return(
            <Blog
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout={() => this.props.actions.logout()}
                allProvider = {this.props.allProvider}
            />
        )
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (BlogContainer)