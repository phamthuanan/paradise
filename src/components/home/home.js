import React from 'react'
import Header from '../header/Header'
import Banner from './Banner'
import SearchTour from './SeacrhTour'
import IntroPage from './IntroPage'
import TourCard from '../tour/TourCard'
import Footer from '../footer/Footer'
import NewLetter from '../newletter/Newletter'
import CardTourDiscount from '../tour/CardTourDiscount'

const Home = ({history,islogin, setDestination, setDepartDate, setReturnDate,departDate, returnDate}) => {
    return (
        <div>
            <Header
                history = {history}
                islogin = {islogin}
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
                            <div class="col-xl-4 col-lg-4 col-sm-12">
                                <div class="d-list-slider-item">
                                    <CardTourDiscount />
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-sm-12">
                                <div class="d-list-slider-item">
                                    <CardTourDiscount />
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-sm-12">
                                <div class="d-list-slider-item">
                                    <CardTourDiscount />
                                </div>
                            </div>
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
                        <div class="col-lg-3 col-sm-6">
                            <TourCard />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TourCard />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TourCard />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TourCard />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TourCard />
                        </div>
                    </div>
                    <div className = 'col-xl-12' style={{textAlign: "center"}}>
                        <a className="btn btn-yellow" href ="/tour">Xem thêm</a>
                    </div>
                </div>
            </div>
            <div class="blog-area pd-top-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="single-blog single-blog-wrap style-two">
                                <div class="thumb single-blog-left-wrap">
                                    <img src="../assets/img/blog/10.png" alt="blog"/>
                                </div>
                                <div class="single-blog-details single-blog-right-wrap">
                                    <a class="tag" href="#e">Europe</a>
                                    <p class="date">19 September 2019</p>
                                    <h4 class="title">Why You Shouldn’t Ride Elephants In France.</h4>
                                    <p class="content">Kava contains 30 demos as for now, and we’re planning to release more! Except demos, Kava theme has more and more features for.. users, business, companies, developers, bloggers and other categories of users. Even if you are an absolute beginner</p>
                                    <a class="btn btn-yellow" href="#e"><span>Read More<i class="la la-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/11.png" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#e">Europe</a>
                                                <p class="date">19 September 2019</p>
                                                <h4 class="title">Why You Shouldn’t Ride Elephants In Thailand</h4>
                                                <a class="btn btn-yellow" href="#fie"><span>Read More<i class="la la-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/12.png" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#fie">Europe</a>
                                                <p class="date">18 September 2019</p>
                                                <h4 class="title">10 Best Highways for Romantic Long Drive</h4>
                                                <a class="btn btn-yellow" href="#file"><span>Read More<i class="la la-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/13.png" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#fiel">Europe</a>
                                                <p class="date">18 September 2019</p>
                                                <h4 class="title">Rock Climbing Limestone Cliffs At Railay Beach</h4>
                                                <a class="btn btn-yellow" href="#file"><span>Read More<i class="la la-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-blog style-three">
                                        <div class="thumb">
                                            <img src="../assets/img/blog/14.png" alt="blog"/>
                                        </div>
                                        <div class="single-blog-details-wrap">
                                            <div class="single-blog-details text-center">
                                                <a class="tag" href="#file">Europe</a>
                                                <p class="date">19 September 2019</p>
                                                <h4 class="title">Magic In The Sky: Chasing Iceland’s Lights</h4>
                                                <a class="btn btn-yellow" href="#file"><span>Read More<i class="la la-arrow-right"></i></span></a>
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
