import React from "react"
import TourDetail from '../components/tour/TourDetail'
import { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as tourDetailActions from '../actions/tourDetail.actions'
import Reload from '../components/loading/Reload'

class TourDetailContainer extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    UNSAFE_componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        this.props.tourDetailActions.getTourDetail(this.props.match.params.tourId)
        this.props.tourDetailActions.getTourRelated(this.props.match.params.tourId)
    }

    componentWillReceiveProps() {
        this.props.tourDetailActions.getTourDetail(this.props.match.params.tourId)
        this.props.tourDetailActions.getTourRelated(this.props.match.params.tourId)
    }

    render(){
        if(this.props.tourDetail && this.props.tourRelated){
                 return(
            
            <TourDetail
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout={() => this.props.actions.logout()}
                allProvider = {this.props.allProvider}
                tourDetail = {this.props.tourDetail}
                tourRelated = {this.props.tourRelated}
            />
        )
            }
        else{
            return(
                 <Reload />
            )
           
        }
       
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    tourDetail : state.tourDetailReducers.tourdetail.tourDetail,
    tourRelated : state.tourDetailReducers.tourdetail.tourrelated,
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch),
        tourDetailActions : bindActionCreators(tourDetailActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (TourDetailContainer);