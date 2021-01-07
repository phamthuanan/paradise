import React from 'react'
import {Redirect} from 'react-router-dom'
import DesignTour from '../components/tour/DesignTour'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Component } from 'react'
import axios from 'axios'
import storeConfig from '../config/storage.config'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as tourActions from '../actions/tour.actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DesignTourContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameTour : '',
            dateDepart : new Date(),
            dateReturn : new Date(),
            provider : '',
            route : [],
            messages : '',
            description : '',
            place_depart : '',
            notification: ''
        }
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        this.props.tourActions.getLocation()
        this.props.tourActions.getProvince()

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
    isvalidPlaceDepart = (placeDepart) => {
        if(placeDepart === '')
            return false
        return true
    }

    designTourSubmit = async (e) =>{
        e.preventDefault();
        if(!this.isvalidNameTour(this.state.nameTour)){
            toast.error("Tên tour không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return
        }

        if(!this.isvalidDate(this.state.dateDepart, this.state.dateReturn)){
            toast.error("Ngày khởi hành và ngày kết thúc không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return
        }

        if(!this.isvalidProvider(this.state.provider)){
            toast.error("Nhà cung cấp dịch vụ không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return
        }
        else this.setState({notification : ''})
        if(!this.isvalidPlaceDepart(this.state.place_depart)){
            toast.error("Nơi khởi hành không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return
        }
        let res 
        try {
            res = await axios.post("http://localhost:8080/user/createtourdesign",{
                user_id : storeConfig.getUser().id,
                name_tour : this.state.nameTour,
                provider_id : this.state.provider,
                description : this.state.description,
                time_start : this.state.dateDepart,
                time_end : this.state.dateReturn,
                place_depart : this.state.place_depart,
                messages : this.state.messages,
                route : this.state.route
            })
            
        } catch (error) {
            if (error.response.data.msg === "design tour fail"){
                toast.error("Thiết kế tour không thành công - Quý khách vui lòng thử lại", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 5000
                  });
            }
            return 
        }

        toast.success("Thiết kế tour thành công", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
        this.setState({
            nameTour : '',
            dateDepart : new Date(),
            dateReturn : new Date(),
            provider : '',
            route : [],
            messages : '',
            description : '',
            place_depart : ''
        })
    }
    render(){
        if(storeConfig.getUser()){
                return(
                    <div>
                        <ToastContainer/>
                        <DesignTour
                            history = {this.props.history}
                            islogin = {this.props.islogin}
                            logout={() => this.props.actions.logout()}
                            setNameTour = {(value) => this.setState({nameTour: value})}
                            departDate = {this.state.dateDepart}
                            setDepartDate = {(value) => this.setState({dateDepart: value})}
                            returnDate = {this.state.dateReturn}
                            setReturnDate = {(value) => this.setState({dateReturn: value})}
                            setDescription = {(value) => this.setState({description : value})}
                            setMessages = {(value) => this.setState({messages : value})}
                            setProvider = {(value) => this.setState({provider: value})}
                            setPlaceDepart = {(value) => this.setState({place_depart : value})}
                            designTourSubmit = {(e) => this.designTourSubmit(e)}
                            allProvider = {this.props.allProvider}
                            location = {this.props.location}
                            province = {this.props.province}
                            route = {this.state.route}
                            setRoute = {(value) => this.setState({route : value})}
                        />
                    </div>
                
            )
        }
        else{
            return( <Redirect to={"/"} /> ) 
                
                
        }
       
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    location : state.tourReducers.location.data,
    province : state.tourReducers.province.province
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        providerActions : bindActionCreators(providerActions, dispatch),
        tourActions : bindActionCreators(tourActions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (DesignTourContainer)