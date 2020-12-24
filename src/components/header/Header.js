import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import storeConfig from '../../config/storage.config'

class Header extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          email: "Account"
        };
      }

      componentWillMount() {
        if (storeConfig.getUser() !== null) {
          this.setState({
            email: storeConfig.getUser().email
          });
        }
      }

      componentWillReceiveProps(nextProps) {
        if (!nextProps.islogin) {
          this.setState({
            email: "Account"
          });
        } else {
          this.setState({
            email: storeConfig.getUser().email
          });
        }
      }

      handlelogin = () => {
          console.log(this.props.islogin)
        if (this.props.islogin) {
          return (
            <li className="notification">
                    <img src="../assets/img/team/1.png" alt="avatar" class='avatar-account '/>                  
                    <ul className = 'sub-profile'>
                        <li  onClick={() => {
                                    this.props.history.push("/profile/" + this.state.email);
                                }}> Tài Khoản
                        </li>
                        <li onClick={() => {
                                window.location.reload();
                                this.props.logout();
                                this.props.history.push("/");
                                }}> Đăng xuất <i class="fas fa-sign-out-alt"></i>
                        </li>
                    </ul>
            </li>
          );
        } else {
          return (
            <li className="notification">
                <Link to ="/signin_signup">
                    <i class="fa fa-user-o"></i>
                </Link>
            </li>
          );
        }
      };

    render(){
        return (
            <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
            <div className="container nav-container">
                <div className="responsive-mobile-menu">
                    <div className="mobile-logo">
                        <Link to="/">
                            <img src="../assets/img/sticky-logo.png" alt="logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </span>
                    </button>
                    <div className="nav-right-content">
                        <ul className="pl-0">
                            <li className="top-bar-btn-booking">
                                <Link to ="designtour" className = "btn btn-yellow">Thiết kế tour <i class="fas fa-pen-nib"></i></Link>
                            </li>
                            <li className="tp-lang">
                                
                                    <img src="../assets/viet-nam.png" alt="languages" className="select single-select"/>
                                
                            </li>
                            <li className="search">
                                <i className="ti-search"></i>
                            </li>
                            <li className="notification">
                                <a className="signUp-btn" href="#path">
                                    <i className="fa fa-user-o"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="tp_main_menu">
                    <div className="logo-wrapper desktop-logo">
                        <Link to = "/" className="main-logo">
                            <img src="../assets/img/logo.png" alt="logo" />
                        </Link>
                        <Link to = "/" className="sticky-logo">
                            <img src="../assets/img/sticky-logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/">Trang chủ</Link>
                            
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/tour">Tour</Link>
                            <ul className="sub-menu">
                                <li><Link to="/tour-trong-nuoc">Tour trong nước</Link></li>
                                <li><Link to="/tour-nuoc-ngoai">Tour nước ngoài</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/company">Công ty lữ hành</Link>
                            <ul className="sub-menu">
                                <li><Link to="/company/vietravel">Vietravel</Link></li>
                                <li><Link to="/company">SaiGonTourist</Link></li>
                                <li><Link to="/company">Fiditour</Link></li>
                                <li><Link to="/company">Du dịch Việt</Link></li>
                                <li><Link to="/company">Bến Thành Tourist</Link></li>
                                <li><Link to="/company">HaNoiTourist</Link></li>
                                <li><Link to="/company">EXOTISSIMO</Link></li>
                                <li><Link to="/company">VietNamTourism</Link></li>
                                <li><Link to="/company">TST Tourist</Link></li>
                                <li><Link to="/company">Buffalo Tours</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div class="nav-right-content">
                    <ul>
                        <li>
                            <Link to = "/designtour" className = "btn btn-yellow">Thiết kế tour <i class="fas fa-pen-nib"></i></Link>
                        </li>
                        <li className="tp-lang">
                            
                            <img src="../assets/viet-nam.png" alt="languages" className=""/>
                            
                        </li>
                        <li className="search">
                            <i className="ti-search"></i>
                        </li>
                        {this.handlelogin()}
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default Header 