import React, { Component } from 'react'
import axios from 'axios'
import Booking from '../components/booking/BookingTour'
import Reload from '../components/loading/Reload'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as providerActions from '../actions/provider.actions'
import * as tourDetailActions from '../actions/tourDetail.actions'
import storeConfig from '../config/storage.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BookingContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId : null,
            nameUserBooking :'',
            emailUserBooking : '',
            phoneUserBooking : '',
            addressUserBooking : '',
            totalPrice : 0,
            numberOfCustomer : 1,
            paymentMethods : '',
            listCustomer : [], 
            note : ''
        }
    }
    isvalidNameBooking = (nameBooking) => {
        if(nameBooking === '')
            return false
        return true
    }

    isvalidEmail = (email) => {
        if(email === '')
            return false
        return true
    }

    isvalidPhone= (phone) => {
        if(phone === '')
            return false
        return true
    }
    isvalidAddress = (address) => {
        if(address === '')
            return false
        return true
    }
    isvaliTotalPrice = (totalPrice) => {
        if(totalPrice < 0 || totalPrice == 0)
            return false
        return true
    }
    isvalidPaymentMethod = (paymentMethod) => {
        if(paymentMethod === '')
            return false
        return true
    }
    isvalidListCustomer = (listCustomer) => {
        if(listCustomer.lenght === 0)
            return false
        return true
    }

    componentWillMount() {
        this.props.actions.auth()
        this.props.providerActions.getAllProvider()
        this.props.tourDetailActions.getTourDetail(this.props.match.params.idbooking)
        this.setState({totalPrice :  this.props.tourDetail.price})
        if(storeConfig.getUser()){
            this.setState({userId : storeConfig.getUser().id}) 
        }
        else{
            const Id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            this.setState({userId : Id}) 
        }
    }
    submitBookingform = async () => {
        if(!this.isvalidNameBooking(this.state.nameUserBooking)){
            toast.error("Tên Booking không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvalidEmail(this.state.emailUserBooking)){
            toast.error("Email không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvalidPhone(this.state.phoneUserBooking)){
            toast.error("Số điện thoại không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvalidAddress(this.state.addressUserBooking)){
            toast.error("Thông tin địa chỉ không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvaliTotalPrice(this.state.totalPrice)){
            toast.error("Lỗi tính toán giá booking", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvalidPaymentMethod(this.state.paymentMethods)){
            toast.error("Vu lòng chọn phương thức thanh toán", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }
        if(!this.isvalidListCustomer(this.state.listCustomer)){
            toast.error("Vui lòng nhập thông tin khách hàng tham gia tour", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return;
        }        
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let res 
        try {
            res = await axios.post("http://localhost:8080/booking/addbooking", {
                user_id : this.state.userId,
                tour_id : this.props.match.params.idbooking,
                name_user_booking : this.state.nameUserBooking,
                email_user_booking : this.state.emailUserBooking,
                phone_user_booking : this.state.phoneUserBooking,
                address_user_booking : this.state.addressUserBooking,
                total_price : this.state.totalPrice,
                number_of_customer : this.state.numberOfCustomer,
                payment_methods : this.state.paymentMethods,
                list_customer : this.state.listCustomer,
                token : token,
                note : this.state.note

            })
        } catch (err) {
            if (err.response !== undefined) {
                if (err.response.data.msg === "save booking fail" || err.response.data.msg === "Invalid data"){
                    toast.error("Đặt tour không thành công - Qúy khách vui lòng thử lại", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000
                      });
                }
            }
            console.log(err)
            return;
        }
        console.log(res.data)
        this.props.history.push(`/confirmbooking/${token}-${this.props.match.params.idbooking}`)
    }
    render(){
        if(this.props.tourDetail){
             return(
                 <div>
                    <ToastContainer/>
                    <Booking
                        history = {this.props.history}
                        islogin = {this.props.islogin}
                        logout={() => this.props.actions.logout()}
                        allProvider = {this.props.allProvider}
                        tourDetail = {this.props.tourDetail}
                        setNameUserBooking = {(value) => this.setState({nameUserBooking :value})}
                        setEmailUserBooking = {(value) => this.setState({emailUserBooking :value})}
                        setPhoneUserBooking = {(value) => this.setState({phoneUserBooking :value})}
                        setAddressUserBooking = {(value) => this.setState({addressUserBooking :value})}
                        setTotalPrice = {(value) => this.setState({totalPrice :value})}
                        setNumberOfCustomer = {(value) => this.setState({numberOfCustomer :value})}
                        setListCustomer = {(value) => this.setState({listCustomer :value})}
                        setPaymentMethods = {(value) => this.setState({paymentMethods : value})}
                        totalPrice = {this.state.totalPrice}
                        listCustomer = {this.state.listCustomer}
                        setNote = {(value) => this.setState({note : value})}
                        submitBookingform = {() => this.submitBookingform()}
                     />
                 </div>
            
          )
        }
        else {
            return(
                <Reload />
            )
        }
       
    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    allProvider : state.providerReducers.provider.allprovider,
    tourDetail : state.tourDetailReducers.tourdetail.tourDetail
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
)  (BookingContainer);