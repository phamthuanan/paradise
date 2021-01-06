import React, { useEffect, useState } from "react"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'

import "react-datepicker/dist/react-datepicker.css";

const ComfirmBooking = ({history,islogin,logout, allProvider,booking,tourDetail }) => {
    const [numeAdult, setNumAdult] = useState(0)
    const [numChildren, setNumChildren] = useState(0)
    const [numKid, setKid] = useState(0)
    const [numeSmallKid, setNumeSmallKid] = useState(0)
    useEffect(() => {
        booking.list_customer.map(item => {
            switch (item.type_age) {
                case 'Người lớn':
                    setNumAdult(numeAdult + 1)
                    break;
                case 'Trẻ em':
                    setNumChildren(numChildren + 1)
                    break;
                case 'Trẻ nhỏ':
                    setKid(numKid + 1)
                    break;
                case 'Em bé':
                    setNumeSmallKid(numeSmallKid + 1)
                    break;
                default:
                    break;
            }
        })
       
    }, [])
    return (
        <div>
            <Header
                history = {history}
                islogin = {islogin}
                logout = {() => logout()}
                allProvider = {allProvider}
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
                        Đặt tour thành công.
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
                                        {tourDetail._id}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Tên tour:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {tourDetail.name_tour}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Lộ trình:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {tourDetail.name_tour}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày đi:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {new Date(tourDetail.time_start).getDate() + '/' + new Date(tourDetail.time_start).getMonth()+1 + '/' +new Date(tourDetail.time_start).getFullYear()}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày về:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {new Date(tourDetail.time_end).getDate() + '/' + new Date(tourDetail.time_end).getMonth()+1 + '/' +new Date(tourDetail.time_end).getFullYear()}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Nơi khởi hành:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {tourDetail.place_depart}
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
                                        {booking.name_user_booking}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Địa chỉ:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.address_user_booking}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Số điện thoại:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.phone_user_booking}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Email:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.email_user_booking}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Số khách:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.number_of_customer} (Người lớn: {numeAdult}  Trẻ em: {numChildren}  Trẻ nhỏ: {numKid}  Em bé: {numeSmallKid})
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ghi chú:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.note}
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
                                        <span style={{color:"orange", fontWeight:"bold"}}>{booking._id}</span> (Quý khách vui lòng nhớ số booking (Booking No) để thuận tiện cho các giao dịch sau này)
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Trị giá booking:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.total_price}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ngày booking:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {new Date(booking.date_booking).getDate() + '/' + new Date(booking.date_booking).getMonth()+1 + '/' +new Date(booking.date_booking).getFullYear()}
                                       
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Hình thức thanh toán:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.payment_methods}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Tình trạng:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        {booking.status_booking}
                                        </div>
                                    </div>
                                    <div className="row row-info-confirmation">
                                        <div className="col-sm-3 col-md-3">
                                            <span>Ghi chú:</span>
                                        </div>
                                        <div className="col-sm-9 col-md-9 font500">
                                        <span style={{color:"orange", fontWeight:"bold"}}>{new Date(tourDetail.time_start).getDate() + '/' + new Date(tourDetail.time_start).getMonth()+1 + '/' +new Date(tourDetail.time_start).getFullYear()} 11:11:59(Theo giờ Việt Nam)</span> (Nếu quá thời hạn trên mà quý khách chưa thanh toán. Booking sẽ bị hủy)
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
                                    {booking.list_customer.map((item, index) => {
                                        return(
                                            <tr key = {index}>
                                                <td>{item.name}</td>
                                                <td>{new Date(item.birthdate).getDate() + '/' + (new Date(item.birthdate).getMonth()+1) + '/' +new Date(item.birthdate).getFullYear()}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.type_age}</td>
                                                <td>{item.type_age === 'Người lớn' ? tourDetail.price : item.type_age === 'Trẻ em' ? tourDetail.price /1.3 : 0} VNĐ</td>
                                            </tr>
                                        )
                                    })}
                                        
                                        <tr>
                                            <td colSpan="5" style={{textAlign:"right"}}>Tổng giá trị: <span style={{color:"orange", fontWeight:"bold"}}>{booking.total_price} VNĐ</span></td>
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
