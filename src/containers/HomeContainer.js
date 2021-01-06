import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Reload from '../components/loading/Reload'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.actions'
import * as providerActions from '../actions/provider.actions'
import Home from '../components/home/home'
import axios from 'axios'
class HomeContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            destination : 'Chọn điểm đến',
            departDate : new Date(),
            returnDate : new Date()
        }
    }
    
    componentWillMount() {
        this.props.actions.auth()
        this.props.homeActions.getTour()
        this.props.homeActions.getDiscountTour()
        this.props.providerActions.getAllProvider()
    }
    onSubmitSearch = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost/user/searchtour", {
                destination : this.state.destination,
                departDate :this.state.departDate,
                returnDate :  this.state.returnDate

            })
            this.props.history.push("/tour")
        } catch (error) {
            
        }
    }
    
    render(){
        if(this.props.discountTour !== null && this.props.tour !== null){
             return(
            <Home
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout={() => this.props.actions.logout()}
                setDestination = {(value) => this.setState({destination : value})}
                departDate = {this.state.departDate}
                setDepartDate = {(value) => this.setState({departDate: value})}
                returnDate = {this.state.returnDate}
                setReturnDate = {(value) => this.setState({returnDate: value})}
                tour = {this.props.tour}
                discountTour = {this.props.discountTour}
                allProvider = {this.props.allProvider}

            />)
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
    tour : state.homeReducers.tour.data,
    discountTour : state.homeReducers.tourDiscount.data,
    allProvider : state.providerReducers.provider.allprovider

})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions : bindActionCreators(homeActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)