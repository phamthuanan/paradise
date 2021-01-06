import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as userActions from '../actions/user.action'

import SignInSignUp from '../components/signin.signup/SignInUp'

class SignInSignUpContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailLogin: '',
            passwordLogin : '',
            email : '',
            password : '',
            name : '',
            phone: '',
            address : ''
        }
    }

    componentWillMount(){
        this.props.actions.auth()
    }

    isvalidName = (name) => {
        if(name === '')
            return false
        return true
    }
    isvalidPassword = (password) => {
        if (password.length < 8)
            return false
        return true
    }
    isvalidPasswordLogin = (password) =>{
        if(password === '')
            return false
        return true
    }

    isvalidEmail = (email) => {
        if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1)
            return false
        return true
    }

    isvalidPhone(phone){
        if(phone === '')
            return false
        return true
    }
    isvalidAddress(address){
        if(address === '')
            return false
        return true
    }

    registerSubmit = async (event) => {
        event.preventDefault();
        if (!this.isvalidEmail(this.state.email)) {
            toast.error("Email không hợp lệ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return
        }
        if (!this.isvalidPassword(this.state.password)) {
            toast.error("Mật không hợp lệ -Mật khẩu phải từ 8 ký tự", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return
        } 
        if (!this.isvalidName(this.state.name)) {
            toast.error("Tên không hợp lệ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return
        }
        if (!this.isvalidPhone(this.state.phone)) {
            toast.error("Số điện thoại không hợp lệ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return
        }
        if (!this.isvalidAddress(this.state.address)) {
            toast.error("Địa chỉ không hợp lệ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            return
        }
        try {
            await axios.post('http://localhost:8080/user/register', {
                name: this.state.name, 
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address: this.state.address
            })
        }
        catch (err) {
            if (err.response.data.msg === "Email already exist"){
                toast.error("Email đã được đăng ký tài khoản", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                  });
            }
            else{
                toast.success("Đăng ký tài khoản thành công", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                  });
            }
            return
        }
        toast.success("Đăng ký tài khoản thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          });
        window.location.reload();
    }

    loginSubmit = async (event) => {
        event.preventDefault();
        if (!this.isvalidEmail(this.state.emailLogin)) {
            toast.error("Email không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            this.setState({ notificationLogin: "Email không hợp lệ" })
            return
        } else {
            this.setState({ notificationLogin: '' })
        }
        if (!this.isvalidPasswordLogin(this.state.passwordLogin)) {
            toast.error("Vui lòng nhập mật khẩu", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
            return
        }
        let res
        try {
            res = await axios.post('http://localhost:8080/user/login', {
                email: this.state.emailLogin,
                password: this.state.passwordLogin
            })
        }
        catch (err) {
            if (err.response !== undefined) {
                if (err.response.data.msg === "no_registration_confirmation"){
                    toast.error("Tài khoản chưa được kích hoạt", {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 5000
                      });
                }
                else {
                    toast.error("Email và mật khẩu không hợp lệ", {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 5000
                      });
                }
            }
            else {
                toast.success("Đăng nhập thành công", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 5000
                  });
            }
            return
        }
        this.props.actions.loginSuccess(res.data.token, res.data.user)
        this.props.history.push('/')

    }


    render(){
        return(
            <div>
                <ToastContainer/>
                <SignInSignUp
                    history = {this.props.history}
                    setEmailogin={(value) => this.setState({ emailLogin: value })}
                    setPasswordlogin={(value) => this.setState({ passwordLogin: value })}
                    setEmail={(value) => this.setState({ email: value })}
                    setName={(value) => this.setState({ name: value })}
                    setAddress={(value) => this.setState({ address: value })}
                    setPhone={(value) => this.setState({ phone: value })}
                    setPassword={(value) => this.setState({ password: value })}
                    registerSubmit={(e) => this.registerSubmit(e)}
                    loginSubmit={(e) => this.loginSubmit(e)}
                />
            </div>
           
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    null,
    mapDispatchToProps,
)(SignInSignUpContainer)



