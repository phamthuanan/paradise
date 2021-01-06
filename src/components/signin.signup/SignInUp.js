import React, { Component } from 'react'
import {appendScript, removeScript} from '../utils/appendAndRemovelink'
class SignInUp extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        appendScript("../assets/style.css");
    }

    componentWillUnmount(){
        removeScript("../assets/style.css")
    }
     SignUp = () =>{
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");
    };
     SignIn = () =>{
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    };

    

    render(){
        
        return(
            <div className = "conpoment-signinup">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form>
                            <h3 className = "heading-signup">Đăng ký</h3>
                            <div class="social-container">
                                <a href="/" class="social"><i class="fa fa-facebook"></i></a>
                                <a href="/" class="social"><i class="fa fa-google"></i></a>
                                <a href="/" class="social"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <span>hay sử dụng một email để đăng ký</span>
                            <input type="email" name="email" placeholder="Email" onChange = {(e) => this.props.setEmail(e.target.value)}/>
                            <input type="password" name="password" placeholder="Mật khẩu" onChange = {(e) => this.props.setPassword(e.target.value)}/>
                            <input type="text" name="name" placeholder="Tên" onChange = {(e) => this.props.setName(e.target.value)}/>
                            <input type="text" name="phone" placeholder="Số điện thoại" onChange = {(e) => this.props.setPhone(e.target.value)}/>
                            <input type="text" name="adđress" placeholder="Địa chỉ" onChange = {(e) => this.props.setAddress(e.target.value)}/>
                            <button type ="button" onClick = {(e) => this.props.registerSubmit(e)}>Đăng ký</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form>
                            <h3 className="heading-signin">Đăng nhập</h3>
                            <div class="social-container">
                                <a href="/" class="social"><i class="fa fa-facebook"></i></a>
                                <a href="/" class="social"><i class="fa fa-google"></i></a>
                                <a href="/" class="social"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <span>hay sử dụng tài khoản của bạn</span>
                            <input type="email" name="email" placeholder="Email" onChange = {(e) => this.props.setEmailogin(e.target.value)}/>
                            <input type="password" name="password" placeholder="Mật khẩu" onChange = {(e) => this.props.setPasswordlogin(e.target.value)}/>
                            <a href="/">Quên mật khẩu</a>
                            <button type = "button" onClick = {(e) => this.props.loginSubmit(e)}>Đăng nhập</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h2>Hi!</h2>
                                <p>Để tiếp tục kết nối với chúng tôi. Hãy đăng nhận với thông tin của bạn</p>
                                <button class="ghost" onClick={this.SignIn}>Đăng nhập</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h2>Xin chào!</h2>
                                <p>Đăng ký tài khoản để cùng khám phá với chúng tôi</p>
                                <button class="ghost" onClick={this.SignUp}>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default SignInUp
