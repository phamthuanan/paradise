import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

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
            address : '',
            notificationRegister: '',
            notificationLogin : ''
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
            this.setState({ notificationRegister: "Email không hợp lệ" })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidPassword(this.state.password)) {
            this.setState({ notificationRegister: 'Mật khẩu không hợp lệ - Mật khẩu phải từ 8 ký tự' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidName(this.state.name)) {
            this.setState({ notificationRegister: 'Tên không hợp lệ' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidPhone(this.state.phone)) {
            this.setState({ notificationRegister: 'Số điện thoại không hợp lệ' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidAddress(this.state.address)) {
            this.setState({ notificationRegister: 'Địa chỉ không hợp lệ' })
            return
        } else {
            this.setState({ notificationRegister: '' })
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
            if (err.response.data.msg === "Email đã được đăng ký tài khoản")
                this.setState({ notificationRegister: 'Email đã được đăng ký tài khoản' })
            else
                this.setState({ notificationRegister: 'Đăng ký không thành công' })
            return
        }
        this.setState({ notificationRegister: 'Đăng ký thành công' })

    }

    loginSubmit = async (event) => {
        event.preventDefault();
        if (!this.isvalidEmail(this.state.emailLogin)) {
            this.setState({ notificationLogin: "Email không hợp lệ" })
            return
        } else {
            this.setState({ notificationLogin: '' })
        }
        if (!this.isvalidPasswordLogin(this.state.passwordLogin)) {
            this.setState({ notificationLogin: "Vui lòng nhập mật khẩu" })
            return
        } else {
            this.setState({ notificationLogin: '' })
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
                if (err.response.data.msg === "no_registration_confirmation")
                    this.setState({ notificationLogin: 'Tài khoản chưa được kích hoạt' })
                else {
                    this.setState({ notificationLogin: 'Email or password không hợp lệ' })
                }
            }
            else {
                this.setState({ notificationLogin: 'Đăng nhập không thành công' })
            }
            return
        }
        console.log(res)
        this.props.actions.loginSuccess(res.data.token, res.data.user)
        this.props.history.push('/')

    }


    render(){
        return(
            <SignInSignUp
                history = {this.props.history}
                setEmailogin={(value) => this.setState({ emailLogin: value })}
                setPasswordlogin={(value) => this.setState({ passwordLogin: value })}
                setEmail={(value) => this.setState({ email: value })}
                setName={(value) => this.setState({ name: value })}
                setAddress={(value) => this.setState({ address: value })}
                setPhone={(value) => this.setState({ phone: value })}
                notificationRegister={this.state.notificationRegister}
                notificationLogin={this.state.notificationLogin}
                setPassword={(value) => this.setState({ password: value })}
                registerSubmit={(e) => this.registerSubmit(e)}
                loginSubmit={(e) => this.loginSubmit(e)}
            />
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



