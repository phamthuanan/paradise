import React, { useState } from "react"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'

import "react-datepicker/dist/react-datepicker.css";

const ComfirmBooking = ({history,islogin}) => {
    return (
        <div>
            <Header
                history = {history}
                islogin = {islogin}
            />
            <Breadcrumb name="Xác nhận đặt tour"/>
            <div className="page-comfirm-booking-tour pd-top-100">
                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <div className="container">
                            <ul className="lineProcessbookingtour">
                                <li className="partlineProcessBookingTour">
                                    <span className="numprocess">1</span>
                                    <span> Nhập thông tin đặt tour</span>
                                    <hr className="lineProcess"/>
                                </li>
                                <li className="partlineProcessBookingTour">
                                    <span className="numprocess">2</span>
                                    <span> Xác nhận đặt tour</span>
                                    <hr className="lineProcess"/>
                                </li>
                                <li>
                                    <span className="numprocess" style={{backgroundColor:"gray"}}>3</span>
                                    <span> Thanh toán</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-12">
                    <div className="container">
                        <div class="alert alert-success" role="alert" style={{textAlign:"center"}}>
                        Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xl-6">
                                <h3 className="title-confirm">PHIẾU XÁC NHẬN ĐẶT TOUR</h3>
                                <div className="confirmation">
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Mã tour:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Tên tour:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Lộ trình:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày đi:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày về:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Nơi khởi hành:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xl-6">
                                <h3 className="title-confirm">THÔNG TIN LIÊN LẠC</h3>
                                <div className="confirmation">
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Họ và tên:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Địa chỉ:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Số điện thoại:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Email:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Số khách:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        1 (Người lớn: 1  Trẻ em: 0  Trẻ nhỏ: 0  Em bé: 0)
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ghi chú:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        Thời hạn thanh toán 16/11/2020 11:53:11.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-12">
                                <h3 className="title-confirm" style={{textAlign:"center"}}>CHI TIẾT BOOKING</h3>
                            </div>
                            <div className="col-md-12 col-xl-12">
                                <div className="confirmation">
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Số booking:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        <span style={{color:"orange", fontWeight:"bold"}}>201114160265</span> (Quý khách vui lòng nhớ số booking (Booking No) để thuận tiện cho các giao dịch sau này)
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Trị giá booking:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày booking:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        NDSGN6125-013-191120XE-D-F
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Hình thức thanh toán:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        Tiền mặt
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Tình trạng:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        Đang chờ thanh toán
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ghi chú:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        <span style={{color:"orange", fontWeight:"bold"}}>16/11/2020 11:53:11 (Theo giờ Việt Nam)</span> (Nếu quá thời hạn trên mà quý khách chưa thanh toán. Booking sẽ bị hủy)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-12">
                                <h3 className="title-confirm" style={{textAlign:"center"}}>DANH SÁCH KHÁCH HÀNG</h3>
                            </div>
                            <div className="col-md-12 col-xl-12">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col">Họ và tên</th>
                                        <th scope="col">Ngày sinh</th>
                                        <th scope="col">Giới tính</th>
                                        <th scope="col">Độ tuổi</th>
                                        <th scope="col">Trị giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Phạm Thuận An</td>
                                            <td>14/04/1999</td>
                                            <td>Nam</td>
                                            <td>Người lớn</td>
                                            <td>3,750,000 đ</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5" style={{textAlign:"right"}}>Tổng giá trị: <span style={{color:"orange", fontWeight:"bold"}}>3,750,000 đ</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-12" role="alert">
                    <div className="container">
                        <div className="row">
                            <div className="alert alert-info col-md-12 col-xl-12" style={{textAlign:"center"}}>
                            Chúc quý khách một chuyến du lịch thật vui vẻ và bổ ích<br/>

                            Quý khách vui lòng kiểm tra email để nhận phiếu xác nhận đặt dịch vụ thành công
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewLetter/>
            <Footer/>
        </div>
        
    )
}

export default ComfirmBooking
