import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {

    return (
        <footer class="footer-area footer-background " style={{backgroundImage: "url(../assets/img/bg/2.png)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget widget">
                            <div class="about_us_widget">
                                <a href="index.html" class="footer-logo"> 
                                    <img src="../assets/img/logo.png" alt="footer logo"/>
                                </a>
                                <p>Chúng tôi luôn mong muốn luôn luôn cung cấp cho bạn những dịch vụ và trải nghiệm hoàn hảo và thú vị nhất.</p>
                                <ul class="social-icon">
                                    <li>
                                        <a class="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i class="fa fa-facebook  "></i></a>
                                    </li>
                                    <li>
                                        <a class="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i class="fa fa-twitter  "></i></a>
                                    </li>
                                    <li>
                                        <a class="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i class="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget widget ">
                            <div class="widget-contact">
                                <h4 class="widget-title">Liên hệ</h4>
                                <p>
                                    <i class="fa fa-map-marker"></i> 
                                    <span>Quận Thủ Đức, TP Hồ Chí Minh</span>
                                </p>
                                <p class="location"> 
                                    <i class="fa fa-envelope-o"></i>
                                    <span>travelpoint@gmail.com</span>
                                </p>
                                <p class="telephone">
                                    <i class="fa fa-phone base-color"></i> 
                                    <span>
                                        +088 012121240
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="footer-widget widget">
                            <h4 class="widget-title">Liên kết</h4>
                            <ul class="widget_nav_menu">
                                <li><Link to ="/">Trang chủ</Link></li>
                                <li><Link to = "/tour">Tour</Link></li>
                                <li><Link to = "/company">Công ty lữ hành</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Liên hệ</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget widget">
                            <h4 class="widget-title">Instagram Gallery</h4>
                            <ul class="widget-instagram-feed">
                                <li><a href="#"><img src="../assets/img/instagram/1.png" alt="img"/></a></li>
                                <li><a href="#"><img src="../assets/img/instagram/2.png" alt="img"/></a></li>
                                <li><a href="#"><img src="../assets/img/instagram/3.png" alt="img"/></a></li>
                                <li><a href="#"><img src="../assets/img/instagram/4.png" alt="img"/></a></li>
                                <li><a href="#"><img src="../assets/img/instagram/5.png" alt="img"/></a></li>
                                <li><a href="#"><img src="../assets/img/instagram/6.png" alt="img"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-inner">
                <div class="copyright-text">
                    &copy; Bản quyền bởi <a href="https://codingeek.net/" target="_blank"><i class="fa fa-heart"></i><span>Codingeek.</span></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
