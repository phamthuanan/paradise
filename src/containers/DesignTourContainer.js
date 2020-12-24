import React from 'react'
import DesignTour from '../components/tour/DesignTour'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Component } from 'react'
import * as userActions from '../actions/user.action'

class DesignTourContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameTour : '',
            dateDepart : new Date(),
            dateReturn : new Date(),
            qualityCustomers : 1,
            provider : '',
            notification: ''
        }
    }

    componentWillMount() {
        this.props.actions.auth()
    }

    isvalidNameTour = (nameTour) => {
        if(nameTour === '')
            return false
        return true
    }

    isvalidDate = (departDate,returnDate) => {
        if(departDate > returnDate)
            return false
        return true
    }

    isvalidProvider = (provider) => {
        if(provider === '')
            return false
        return true
    }

    designTourSubmit = (e) =>{
        e.preventDefault();
        if(!this.isvalidNameTour(this.state.nameTour)){
            this.setState({notification : 'Tên tour không hợp lệ'})
            return
        }
        else this.setState({notification : ''})

        if(!this.isvalidDate(this.state.dateDepart, this.state.dateReturn)){
            this.setState({notification : 'Ngày khởi hàng và ngày kết thúc không hợp lệ'})
            return
        }
        else this.setState({notification : ''})

        if(!this.isvalidProvider(this.state.provider)){
            this.setState({notification : 'Nhà cung cấp dịch vụ không hợp lệ'})
            return
        }
        else this.setState({notification : ''})

    }
    render(){
        return(
            <DesignTour
                history = {this.props.history}
                islogin = {this.props.islogin}
                setNameTour = {(value) => this.setState({nameTour: value})}
                departDate = {this.state.dateDepart}
                setDepartDate = {(value) => this.setState({dateDepart: value})}
                returnDate = {this.state.dateReturn}
                setReturnDate = {(value) => this.setState({dateReturn: value})}
                qualityCustomer = {this.state.qualityCustomers}
                setQualityCustomer = {(value) => this.setState({qualityCustomers: value})}
                setProvider = {(value) => this.setState({provider: value})}
                notification = {this.state.notification}
                designTourSubmit = {(e) => this.designTourSubmit(e)}
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
) (DesignTourContainer)