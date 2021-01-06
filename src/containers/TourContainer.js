import React from 'react'
import Tour from '../components/tour/Tour'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as tourActions from '../actions/tour.actions'
import * as providerActions from '../actions/provider.actions'

class TourContainer extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.tourActions.getTour()
        this.props.tourActions.getLocation()
        this.props.providerActions.getAllProvider()
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.page !== this.props.page) {
            this.props.tourActions.getTour()
        }
    }
    
    render(){
        return(
            <Tour
                history = {this.props.history}
                islogin =  {this.props.islogin}
                logout={() => this.props.actions.logout()}
                location = {this.props.location}
                tour = {this.props.tour}
                totalpage = {this.props.totalpage}
                page = {this.props.page}
                backPage={() => this.props.tourActions.backPage()}
                nextPage={() => this.props.tourActions.nextPage()}
                setPage={(page) => this.props.tourActions.setPage(page)}
                setSearchText={(value) => this.props.tourActions.setSearchText(value)}
                setDateDepart={(value) => this.props.tourActions.setDateDepart(value)}
                searchTextSubmit={() => this.props.tourActions.searchTextSubmit()}
                dateDepart = {this.props.dateDepart}
                allProvider = {this.props.allProvider}
                setNameProvider = {(name) => this.props.providerActions.setNameProvider(name)}
                nameProvider = {this.props.nameProvider}
                
            />
        )
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    location: state.tourReducers.location.data,
    tour: state.tourReducers.tour.data, 
    totalpage: state.tourReducers.tour.totalpage,
    page: state.tourReducers.tour.page,
    dateDepart : state.tourReducers.tour.datedepart,
    allProvider : state.providerReducers.provider.allprovider,
    nameProvider : state.providerReducers.provider.nameprovider
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        tourActions : bindActionCreators(tourActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (TourContainer);