import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'

class Company extends Component{

    render(){
        return(
            <div>
            <Header/>
            <Breadcrumb name="Công ty du lịch lữ hành"/>
            <div className="page-company-detail pd-top-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Giới thiệu</h1>
                                </div>
                                <div className="col-md-7">
                                <p>Vietravel là công ty lữ hành lớn tại Việt Nam, chuyên tổ chức các tour du lịch nước ngoài, với gần 2000 tuyến khắp năm châu. Bạn sẽ có cơ hội khám phá những miền đất mới tại các nước trên thế giới như ở Đông Nam Á, châu Á, châu Âu, châu Mỹ.. Với lịch trình sắp xếp hợp lý, khởi hành đúng thời gian, tính chuyên nghiệp và dịch vụ chất lượng,
                                     Vietravel là TA uy tín mà khách hàng có thể yên tâm lựa chọn.</p>
                                    <h4>Thông tin liên hệ</h4>
                                    <ul className='info-contact-company'>
                                        <li><i class="fas fa-map-marker-alt"></i> Địa chỉ</li>
                                        <li><i class="fas fa-phone"></i> Điện thoại</li>
                                        <li><i class="fas fa-fax"></i> Fax</li>
                                        <li><i class="fas fa-envelope"></i> Email</li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                <img src="../assets/img/gallery/8.png" alt="images-info-company" className="img-info-company"/>
                                </div>
                            </div>
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Dịch vụ du lịch</h1>
                                </div>
                                <div className="col-md-5">
                                <img src="../assets/img/gallery/8.png" alt="images-info-company" className="img-info-company"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className='info-contact-company'>
                                        <li><i class="fas fa-plus-circle"></i> Cung cấp đa dạng các loại hình du lịch</li>
                                        <li><i class="fas fa-plus-circle"></i> Cung cấp các tour trong nước, tour nước ngoài, tour doanh nghiệp</li>
                                        <li><i class="fas fa-plus-circle"></i> Cung cấp dịch vụ vé máy bay, xe, visa, khách sạn</li>
                                        <li><i class="fas fa-plus-circle"></i> Cung cấp các tour ngắn và dài hạn</li>
                                        <li><i class="fas fa-plus-circle"></i> Cung cấp các loại tour theo yêu cầu của khách hàng</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Thành tích và giải thưởng</h1>
                                </div>
                                <div className="col-md-7">
                                    <ul className='info-contact-company'>
                                        <li><i class="fas fa-check-circle"></i> Mỗi năm tiếp đón khoảng hơn <span className="hightlightnumbercustomer">3 Triệu </span>lượt khách trong và ngoài nước</li>
                                        <li><i class="fas fa-check-circle"></i> Doanh thu mỗi năm thu về khoảng hơn <span className="hightlightnumbercustomer">30 nghìn </span>tỷ VNĐ</li>
                                        <h4>Các giải thưởng đạt được</h4>
                                            <ul className='info-contact-company'>
                                                <li><i class="fas fa-trophy"></i> Giải thưởng WTA (World Travel Awards) năm 2015</li>
                                                <li><i class="fas fa-trophy"></i> Giải thưởng MTAA (Mekong Tourism Alliance Awards) năm 2015</li>
                                                <li><i class="fas fa-trophy"></i> Đạt danh hiệu “Thương hiệu Quốc gia” lần III năm 2016</li>
                                                <li><i class="fas fa-trophy"></i> Đạt danh hiệu “Thương hiệu Quốc gia” lần IV 2018</li>
                                                <li><i class="fas fa-trophy"></i> Giải thưởng WTA (World Travel Awards) năm 2019 </li>
                                            </ul>
                            
                                    </ul>
                                    
                                </div>
                                <div className="col-md-5">
                                <img src="../assets/img/gallery/8.png" alt="images-info-company" className="img-info-company"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            <aside class="sidebar-area">
                                <div class="widget widget_search bg-none pd-none">
                                    <form class="search-form">
                                        <div class="form-group">
                                            <input type="text" placeholder="Search"/>
                                        </div>
                                        <button class="submit-btn" type="submit"><i class="ti-search"></i></button>
                                    </form>
                                </div>
                                <div class="widget widget_categories mb-0">
                                    <h2 class="widget-title">Công ty</h2>
                                    <ul>
                                        <li><Link to="/company">Vietravel</Link></li>
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
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <NewLetter/>
            <Footer/>
            </div>
            
        )
    }
}

export default Company