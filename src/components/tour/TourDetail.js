import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import TourCard from './TourCard'
import Carousel from 'react-bootstrap/Carousel'
import {Accordion, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class TourDetail extends Component {
    render() {
        return (
            <div>
                <Header 
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.logout()}
                    allProvider = {this.props.allProvider}
                />
                <Breadcrumb name = 'Chi tiết tour'/>
                <div class="tour-details-area mg-top--70">
                    <div class="tour-details-gallery">
                        <div class="container-bg bg-dark-blue" style={{height:"560px"}}>
                            <div class="container">
                                <div class="gallery-filter-area row">
                                    <div className="col-xl-12">
                                        <h3 style={{color: "white", fontSize: "30px"}}><i class="fas fa-map-marker-alt"></i> {this.props.tourDetail.name_tour}</h3>
                                    </div>
                                    <div className="col-sm-12 col-md-8 col-xl-8">
                                    <Carousel controls={false}>
                                        {this.props.tourDetail.route.map((item, index) => {
                                            return(
                                                 <Carousel.Item interval={1000}
                                                    key = {index}>
                                                    <img
                                                    className="d-block w-100"
                                                    src={item.images}
                                                    alt="First slide"
                                                    />
                                                </Carousel.Item>
                                            )
                                        })}
                                       
                                       
                                    </Carousel>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-xl-4">
                                    <ul class="tp-list-meta list-info-tour-detail">
                                        <li><i class="fa fa-calendar-o"></i><b>Ngày khởi hành:</b>  {new Date(this.props.tourDetail.time_start).getDate() + '/' + new Date(this.props.tourDetail.time_start).getMonth() + 1 + '/' +  new Date(this.props.tourDetail.time_start).getFullYear()}</li>
                                        <li><i class="fa fa-calendar-o"></i><b>Ngày kết thúc:</b>  {new Date(this.props.tourDetail.time_end).getDate() + '/' + new Date(this.props.tourDetail.time_end).getMonth() + 1 + '/' +  new Date(this.props.tourDetail.time_end).getFullYear()}</li>
                                        <li><i class="fa fa-clock-o"></i><b>Số ngày:</b> 3 ngày</li>
                                        <li><i class="fas fa-couch"></i><b>Số chỗ còn:</b> {this.props.tourDetail.capacity} chỗ</li>
                                        <li><b>Giá</b> <span style={{color: "orange", fontSize:"30px", fontWeight: "bold"}}>{this.props.tourDetail.is_discount === true ? this.props.tourDetail.price * 0.8 : this.props.tourDetail.price }</span> <small>VNĐ</small></li>
                                    </ul>
                                    <div style={{textAlign:"center"}}>
                                    <Link to = {"/bookingtour/" + this.props.tourDetail._id} class="btn btn-yellow" >Đặt tour <i class="fa fa-paper-plane"></i></Link>
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tour-details-wrap">
                                    <h4 class="single-page-small-title">Giới thiệu tour</h4>
                                    <p>{this.props.tourDetail.description}</p>
                                   
                                    <div class="package-included-area">
                                        <h4 class="single-page-small-title">Dịch vụ bao gồm</h4>
                                        <div class="row">
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/15.png" alt="icons"/>
                                                    <h6>Đồ ăn</h6>
                                                    <p>3 sáng, trưa, tối</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/16.png" alt="icons"/>
                                                    <h6>Chỗ ở</h6>
                                                    <p>3 đêm tại khách sạn 4 sao</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/17.png" alt="icons"/>
                                                    <h6>Phương tiện</h6>
                                                    <p>Máy bay, xe du lịch</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/18.png" alt="icons"/>
                                                    <h6>Đồ uống</h6>
                                                    <p>Nước lọc, cà phê, trà</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/19.png" alt="icons"/>
                                                    <h6>Vé</h6>
                                                    <p>Trọn gói</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/20.png" alt="icons"/>
                                                    <h6>Trang thiết bị</h6>
                                                    <p>Thiết bị y tế và bảo hộ</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package-included-location">
                                        <h4 class="single-page-small-title">Lịch trình</h4>
                                        {this.props.tourDetail.route.map((item,index) => {
                                            return(
                                                <div key = {index} class="row" style={{marginBottom: "30px"}}>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class=" row">
                                                            <div class="p-list col-xl-1">
                                                                <div class="list" style={{backgroundColor:"#f3941e"}}>{++index}</div>
                                                                <p>Ngày {index}</p>
                                                            </div>
                                                            <div className="line-schedue" style={{borderRight: "solid gray 2px"}}></div>
                                                            <div class="thumb col-xl-3">
                                                                <img src={item.images} alt="blog"/>
                                                            </div>
                                                            <div class="single-blog-details col-xl-7">
                                                                <h4 class="title">{item.title}</h4>
                                                                <p class="content">{item.description}</p>
                                                                <Accordion>
                                                                    <div>
                                                                    <div>
                                                                        <Accordion.Toggle as={Button} variant="link" className="btn-read-more" style={{padding: "0px"}} eventKey="0">
                                                                        <span>Xem thêm<i class="la la-arrow-right"></i></span>
                                                                        </Accordion.Toggle>
                                                                    </div>
                                                                    <Accordion.Collapse eventKey="0">
                                                                        <p></p>
                                                                    </Accordion.Collapse>
                                                                    </div>
                                                                    
                                                                </Accordion>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row ">
                                        <div className="col-12">
                                            <h2>Các tour liên quan</h2>
                                        </div>
                                    {this.props.tourRelated.map((item, index) => {
                                        return(
                                            <div class="col-lg-3 col-sm-6"
                                                key = {index}>
                                                <TourCard 
                                                    nameTour = {item.name_tour}
                                                    departDate = {item.time_start}
                                                    capacity = {item.capacity}
                                                    price = {item.price}
                                                    image = {item.image_cover}
                                                    placeDepart = {item.place_depart}
                                                    id = {item._id}
                                                    providerId = {item.provider_id}
                                                />
                                            </div>
                                        )
                                    })}
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
}

export default TourDetail
