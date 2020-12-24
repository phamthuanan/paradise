import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
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
                />
                <Breadcrumb name = 'Chi tiết tour'/>
                <div class="tour-details-area mg-top--70">
                    <div class="tour-details-gallery">
                        <div class="container-bg bg-dark-blue" style={{height:"560px"}}>
                            <div class="container">
                                <div class="gallery-filter-area row">
                                    <div className="col-xl-12">
                                        <h3 style={{color: "white", fontSize: "30px"}}><i class="fas fa-map-marker-alt"></i> Tên Tour</h3>
                                    </div>
                                    <div className="col-sm-12 col-md-8 col-xl-8">
                                    <Carousel controls={false}>
                                        <Carousel.Item interval={1000}>
                                            <img
                                            className="d-block w-100"
                                            src="../assets/img/banner/1.jpg"
                                            alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img
                                            className="d-block w-100"
                                            src="../assets/img/banner/2.jpg"
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="../assets/img/banner/1.jpg"
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-xl-4">
                                    <ul class="tp-list-meta list-info-tour-detail">
                                        <li><i class="fa fa-calendar-o"></i><b>Ngày khởi hành:</b>  1/12/2020</li>
                                        <li><i class="fa fa-calendar-o"></i><b>Ngày kết thúc:</b>  1/12/2020</li>
                                        <li><i class="fa fa-clock-o"></i><b>Số ngày:</b> 4 ngày</li>
                                        <li><i class="fas fa-couch"></i><b>Số chỗ còn:</b> 5 chỗ</li>
                                        <li><b>Giá</b> <span style={{color: "orange", fontSize:"30px", fontWeight: "bold"}}>3,000,000</span> <small>VNĐ</small></li>
                                    </ul>
                                    <div style={{textAlign:"center"}}>
                                    <Link to = "/bookingtour/123" class="btn btn-yellow" >Đặt tour <i class="fa fa-paper-plane"></i></Link>
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
                                    <p>From its distinct half-hour time zone to its occasional June snowshower, Newfoundland runs on its own time. By August, the summer crowds have dwindled, berries hang ripe and heavy on their stems, and the landscape is ablaze with wildflowers. Join us at the peak of Newfoundland’s late summer season as we wind our way through the famously Celtic stretch of coastline known as the Irish Loop, exploring its unique history, folklore, cuisine, and breathtaking seaside scenery. We’ll enjoy dinners made from freshly foraged ingredients on a quiet dock, chat with a boat-builder in the midst of making a vessel, and learn how to craft heritage cheese from local experts while surrounded by an adorable, bleating tribe of tiny baby goats. As we make our way along the Loop, we’ll encounter countless characters, places, and stories that give this corner of the island its charm, tenacity, and unique flair.</p>
                                    <p> This trip is offered by Atlas Obscura. Once you've reserved your spot, our team will be in touch to help you prepare for the trip. Please note that flights to and from St. John's are not included in the trip cost. This trip is limited by 12 travelers.</p>
                                    <div class="package-included-area">
                                        <h4 class="single-page-small-title">Dịch vụ bao gồm</h4>
                                        <div class="row">
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/15.png" alt="icons"/>
                                                    <h6>Đồ ăn</h6>
                                                    <p>3 breakfasts, 3 dinners</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/16.png" alt="icons"/>
                                                    <h6>Chỗ ở</h6>
                                                    <p>3 nights in a hotel</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/17.png" alt="icons"/>
                                                    <h6>Phương tiện</h6>
                                                    <p>2 boat rides, 1 car ride</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/18.png" alt="icons"/>
                                                    <h6>Đồ uống</h6>
                                                    <p>Water, tea, coffee, beer</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/19.png" alt="icons"/>
                                                    <h6>Vé</h6>
                                                    <p>Entrance fee</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="single-package-included">
                                                    <img src="../assets/img/icons/20.png" alt="icons"/>
                                                    <h6>Trang thiết bị</h6>
                                                    <p>Outdoor gear, safety</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package-included-location">
                                        <h4 class="single-page-small-title">Lịch trình</h4>
                                        <div class="row" style={{marginBottom: "30px"}}>
                                            <div class="col-lg-12 col-md-12">
                                                <div class=" row">
                                                    <div class="p-list col-xl-1">
                                                        <div class="list" style={{backgroundColor:"#f3941e"}}>1</div>
                                                        <p>Ngày 1</p>
                                                    </div>
                                                    <div className="line-schedue" style={{borderRight: "solid gray 2px"}}></div>
                                                    <div class="thumb col-xl-3">
                                                        <img src="../assets/img/blog/8.png" alt="blog"/>
                                                    </div>
                                                    <div class="single-blog-details col-xl-7">
                                                        <h4 class="title">Welcome to St. John's</h4>
                                                        <p class="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                                        <Accordion>
                                                            <div>
                                                            <div>
                                                                <Accordion.Toggle as={Button} variant="link" className="btn-read-more" style={{padding: "0px"}} eventKey="0">
                                                                <span>Xem thêm<i class="la la-arrow-right"></i></span>
                                                                </Accordion.Toggle>
                                                            </div>
                                                            <Accordion.Collapse eventKey="0">
                                                                <p>Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                                            </Accordion.Collapse>
                                                            </div>
                                                            
                                                        </Accordion>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style={{marginBottom: "30px"}}>
                                            <div class="col-lg-12 col-md-12">
                                                <div class=" row">
                                                    <div class="p-list col-xl-1">
                                                        <div class="list" style={{backgroundColor:"#f3941e"}}>2</div>
                                                        <p>Ngày 2</p>
                                                    </div>
                                                    <div className="line-schedue" style={{borderRight: "solid gray 2px"}}></div>
                                                    <div class="thumb col-xl-3">
                                                        <img src="../assets/img/blog/8.png" alt="blog"/>
                                                    </div>
                                                    <div class="single-blog-details col-xl-7">
                                                        <h4 class="title">Welcome to St. John's</h4>
                                                        <p class="content">Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moree</p>
                                                        <Accordion>
                                                            <div>
                                                            <div>
                                                                <Accordion.Toggle as={Button} variant="link" className="btn-read-more" style={{padding: "0px"}} eventKey="0">
                                                                <span>Xem thêm<i class="la la-arrow-right"></i></span>
                                                                </Accordion.Toggle>
                                                            </div>
                                                            <Accordion.Collapse eventKey="0">
                                                                <p>Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                                            </Accordion.Collapse>
                                                            </div>
                                                            
                                                        </Accordion>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <div class=" row">
                                                    <div class="p-list col-xl-1">
                                                        <div class="list" style={{backgroundColor:"#f3941e"}}>3</div>
                                                        <p>Ngày 3</p>
                                                    </div>
                                                    <div className="line-schedue" style={{borderRight: "solid gray 2px"}}></div>
                                                    <div class="thumb col-xl-3">
                                                        <img src="../assets/img/blog/8.png" alt="blog"/>
                                                    </div>
                                                    <div class="single-blog-details col-xl-7">
                                                        <h4 class="title">Welcome to St. John's</h4>
                                                        <p class="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                                        <Accordion>
                                                            <div>
                                                            <div>
                                                                <Accordion.Toggle as={Button} variant="link" className="btn-read-more" style={{padding: "0px"}} eventKey="0">
                                                                <span>Xem thêm<i class="la la-arrow-right"></i></span>
                                                                </Accordion.Toggle>
                                                            </div>
                                                            <Accordion.Collapse eventKey="0">
                                                                <p>Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show moreAfter a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                                            </Accordion.Collapse>
                                                            </div>
                                                            
                                                        </Accordion>
                                                    </div>
                                                </div>
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
        )
    }
}

export default TourDetail
