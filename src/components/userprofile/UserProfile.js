import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import Profile from './Profile'
import ChangePass from './ChangePass'
import ListTourBought from './ListTourBought'
import ListTourDesign from './ListTourDesign'

class UserProfile extends Component{

    render(){
        return(
            <div>
                <Header 
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                />
                <Breadcrumb name = "Thông tin tài khoản" />
                <div class="user-profile-area pd-top-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul class="nav nav-tabs tp-tabs style-two">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#tabs_1"><i class="fa fa-user"></i>Thông tin cá nhân</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#tabs_2"><i class="fas fa-key"></i>Đổi mật khẩu</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"  data-toggle="tab" href="#tabs_3"><i class="fas fa-paper-plane"></i>Danh sách tour đã đặt</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"  data-toggle="tab" href="#tabs_4"><i class="fas fa-pen-nib"></i>Dang sách tour thiết kế</a>
                                            </li>
                                            <li class="text-center">
                                                <button class="btn btn-yellow" type = "button" onClick={() => {
                                                              
                                                                this.props.logout();
                                                                this.props.history.push("/");
                                                                }}>
                                                                
                                                                <i class="fa fa-sign-in" aria-hidden="true"></i> <span>Đăng xuất</span></button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-xl-8 col-lg-9 offset-xl-1">
                                        <div class="tab-content user-tab-content">
                                            <div class="tab-pane fade show active" id="tabs_1" >
                                                <Profile/>
                                            </div>
                                            <div class="tab-pane fade" id="tabs_2" >
                                                <ChangePass/>
                                            </div>
                                            <div class="tab-pane fade " id="tabs_3" >
                                                <ListTourBought/>
                                            </div>
                                            <div class="tab-pane fade" id="tabs_4" >
                                                <ListTourDesign/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewLetter/>
                <Footer/>
            </div>
            
        );
    };
}

export default UserProfile;