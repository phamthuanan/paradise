import React, { Component } from 'react'
import CompanyDetail from '../components/provider/Company'
import Reload from '../components/loading/Reload'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'

class CompanyDetailContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getProvider(this.props.match.params.idcompany)
        this.props.providerActions.getAllProvider()
    }
    componentWillReceiveProps(){
        this.props.providerActions.getProvider(this.props.match.params.idcompany)
    }
    render(){
        if(this.props.provider !== null && this.props.allProvider !== null){
            return(
            <CompanyDetail
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout={() => this.props.actions.logout()}
                provider = {this.props.provider}
                allProvider = {this.props.allProvider}
            />
            )
        }
        else{
            return (
                <Reload />
            )
        }
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    provider : state.providerReducers.provider.data,
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
) (CompanyDetailContainer)