import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'

const  Contact = ({history,islogin,logout,onSubmitContact,name,phone, email, messenges, setName, setPhone, setEmail, setMessenges, allProvider}) => {
        return(
            <div>
                <Header
                    history ={history}
                    islogin = {islogin}
                    logout = {() => logout()}
                    allProvider = {allProvider}
                />
                <Breadcrumb name = 'Liên hệ'/>
                <div class="contact-area pd-top-108">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section-title text-lg-center text-left">
                                    <h2 class="title">Liên hệ chúng tôi!</h2>
                                    <p>Bạn có cần chúng tôi hay bạn cần nhu cần gì đặt biệt cần liên hệ trực tiếp với chúng tôi. Đừng ngần ngại, hãy hiện hệ và gửi thôn tin cho chúng tôi.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-5 offset-xl-1 col-lg-6">
                                <div class="thumb">
                                    <img src="../assets/img/others/11.png" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <form class="tp-form-wrap">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="single-input-wrap style-two">
                                                <span class="single-input-title">Tên</span>
                                                <input type="text" value = {name} onChange = { (e) => setName(e.target.value)}/>
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="single-input-wrap style-two">
                                                <span class="single-input-title">Số điện thoại</span>
                                                <input type="text" value = {phone} onChange = {(e) => setPhone(e.target.value)}/>
                                            </label>
                                        </div>
                                        <div class="col-lg-12">
                                            <label class="single-input-wrap style-two">
                                                <span class="single-input-title">Email</span>
                                                <input type="text" value = {email} onChange= {(e) => setEmail(e.target.value)}/>
                                            </label>
                                        </div>
                                        <div class="col-lg-12">
                                            <label class="single-input-wrap style-two">
                                                <span class="single-input-title">Tin nhắn</span>
                                                <textarea value = {messenges} onChange = {(e) => setMessenges(e.target.value)}></textarea>
                                            </label>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-yellow" type="button" onClick = {(e) => onSubmitContact(e)}>Gửi</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-info-area pd-top-120">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-8 order-lg-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1227235628935!2d106.80443711431768!3d10.878269360281362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2sKTX%20Khu%20A%20%C4%90HQG%20TP.HCM!5e0!3m2!1svi!2s!4v1604936078518!5m2!1svi!2s" width="600" height="450"></iframe>
                            </div>
                            <div class="col-xl-3 col-lg-4 order-lg-1">
                                <div class="contact-info bg-gray">
                                    <p>
                                        <i class="fa fa-map-marker"></i> 
                                        <span>Khu phố 6, phường Linh Trung , quận Thủ Đức, TP Hồ Chí Minh</span>
                                    </p>
                                    <p>
                                        <i class="fa fa-clock-o"></i> 
                                        <span>Giờ làm việc 9:00 to 7:00 Chủ nhật 10:00 to 5:00</span>
                                    </p>
                                    <p>
                                        <i class="fa fa-envelope"></i> 
                                        <span>Email: <span>Travelpoint@gmail.com</span></span>
                                    </p>
                                    <p>
                                        <i class="fa fa-phone"></i> 
                                        <span>
                                            Số di động: <span>(+88) 0172 570051</span> <br/>
                                            Điện thoại: <span>(+88) 07 528 7584</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewLetter/>
                <Footer/>
            </div>
        );
}

export default Contact;