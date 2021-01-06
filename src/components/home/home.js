import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Header from '../header/Header'
import Banner from './Banner'
import SearchTour from './SeacrhTour'
import IntroPage from './IntroPage'
import TourCard from '../tour/TourCard'
import Footer from '../footer/Footer'
import NewLetter from '../newletter/Newletter'
import CardTourDiscount from '../tour/CardTourDiscount'

const Home = ({history,islogin,logout, setDestination, setDepartDate, setReturnDate,departDate, returnDate, tour, discountTour,allProvider}) => {


    return (
        <div>
            <Header
                history = {history}
                islogin = {islogin}
                logout = {() =>logout()}
                allProvider = {allProvider}
            />
            <Banner />
            <SearchTour
                setDestination = {(value) => setDestination(value)}
                departDate = {departDate}
                setDepartDate = {(value) => setDepartDate(value)}
                returnDate = {returnDate}
                setReturnDate = {(value) => setReturnDate(value)}
             />
            <IntroPage />
            <div class="offer-area pd-top-70 List_tour_discount">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">HOT TOUR</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div class="container">
                        <div class="row">
                        {discountTour.map( (item, index) => {
                            
                            return (
                                 <div class="col-xl-4 col-lg-4 col-sm-12">
                                    <div class="d-list-slider-item">
                                        <CardTourDiscount
                                            key = {index}
                                            nameTour = {item.name_tour}
                                            departDate = {item.time_start}
                                            capacity = {item.capacity}
                                            price = {item.price}
                                            image = {item.image_cover}
                                            id = {item._id}
                                            providerId = {item.provider_id}
                                            
                                         />
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div class="holiday-plan-area tp-holiday-plan-area mg-top-96"  style={{backgroundImage: "url(../assets/img/bg/8.png)"}} >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-9">
                            <div class="section-title text-center">
                                <h2 class="title">Tour Du lịch</h2>
                                <p>Cùng chúng tôi trải nghiệm các tour du lịch thú vị và hấp dẫn nhất</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    {
                        tour.map((item,index) => {
                           
                            return(
                              <div class="col-lg-3 col-sm-6">
                                <TourCard 
                                    key = {index}
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
                        })
                    }
                    </div>
                    <div className = 'col-xl-12' style={{textAlign: "center"}}>
                        <Link className="btn btn-yellow" to ="/tour">Xem thêm</Link>
                    </div>
                </div>
            </div>
            <div class="blog-area pd-top-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="single-blog single-blog-wrap style-two">
                                <div class="thumb single-blog-left-wrap">
                                    <img src="../assets/img/blog/gia-tri-van-hoa-pho-co-hoi-an.jpg" alt="blog"/>
                                </div>
                                <div class="single-blog-details single-blog-right-wrap">
                                    <a class="tag" href="#e">Hội An</a>
                                    <p class="date">19/12/2020</p>
                                    <h4 class="title">Du lịch Hội An khám phá giá trị văn hóa khu phố cổ</h4>
                                    <p class="content">Kể từ khi Khu phố cổ Hội An được UNESCO công nhận là di sản văn hóa thế giới, Hội An trở thành một trong những điểm đến hấp dẫn nhất khu vực miền Trung. Du lịch Hội An làm say đắm lòng du khách bởi nét đẹp trường tồn cùng thời gian của các công trình kiến trúc, món ăn truyền thống, tâm hồn mộc mạc của người dân ở đây.</p>
                                    <Link class="btn btn-yellow" to="/blog/du-lich-hoi-an-kham-pha-pho-co"><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/10-dia-diem.jpg" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#e">Thế giới</a>
                                                <p class="date">16/10/2020</p>
                                                <h4 class="title">10 ĐIỂM ĐẾN HẤP DẪN NHẤT THẾ GIỚI</h4>
                                                <Link class="btn btn-yellow" to="/blog/10-diem-hap-dan-nhat-the-gioi"><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/48-gio-du-lich-ninh-thuan-vinh-vinh-hy.jpg" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#fie">Ninh Thuận</a>
                                                <p class="date">18/12/2020</p>
                                                <h4 class="title">48 giờ khám phá những địa điểm du lịch Ninh Thuận nổi tiếng</h4>
                                                <Link class="btn btn-yellow" to="/blog/40-gio-kham-pha-du-lich-ninh-thuan"><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/hon-dao-phu-quoc.jpg" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#fiel">Phú Quốc</a>
                                                <p class="date">15/12/2020</p>
                                                <h4 class="title">4 HÒN ĐẢO ĐẸP "NÍN THỞ" NỔI NHƯ CỒN TẠI PHÚ QUỐC</h4>
                                                <Link class="btn btn-yellow" to="/blog/4-hon-dao-dep-nin-tho-noi-tieng-nhu-con-tai-phu-quoc"><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/maroc.jpg" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#file">Ma Rốc</a>
                                                <p class="date">19/12/2020</p>
                                                <h4 class="title">LANG THANG XỨ SỞ 'NGHÌN LẺ MỘT ĐÊM'</h4>
                                                <Link class="btn btn-yellow" to="/blog/lang-thang-xu-so-nghin-le-mot-dem"><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
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
            <Footer />
        </div>
    )
}

export default Home
