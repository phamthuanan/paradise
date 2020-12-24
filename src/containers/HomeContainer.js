import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
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
        return(
            <Home
                history = {this.props.history}
                islogin = {this.props.islogin}
                setDestination = {(value) => this.setState({destination : value})}
                departDate = {this.state.departDate}
                setDepartDate = {(value) => this.setState({departDate: value})}
                returnDate = {this.state.returnDate}
                setReturnDate = {(value) => this.setState({returnDate: value})}
            />
        )
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)