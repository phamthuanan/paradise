import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import TourCard from './TourCard'
import SearchTourSidebar from './SearchTourSidebar'
import NewLetter from '../newletter/Newletter'
const Tour = ({history, islogin}) => {
    return (
        <div>
            <Header 
                history ={history}
                islogin = {islogin}
            />
            <Breadcrumb name = 'Danh sách tour'/>
            <div class="tour-list-area pd-top-120 list_tour">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-lg-8 order-lg-12">
                            <div class="row ">
                                <div class="col-lg-4 col-sm-6">
                                    <TourCard />
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <TourCard />
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <TourCard />
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <TourCard />
                                </div>
                            </div>
                            <div class="col-lg-12 text-center">
                                <div class="tp-pagination text-center d-inline-block mt-4">
                                    <ul>
                                        <li><a class="prev page-numbers" href="#"><i class="la la-long-arrow-left"></i></a></li>
                                        <li><span class="page-numbers">1</span></li>
                                        <li><span class="page-numbers current">2</span></li>
                                        <li><a class="page-numbers" href="#">3</a></li>
                                        <li><a class="page-numbers" href="#">4</a></li>
                                        <li><a class="next page-numbers" href="#"><i class="la la-long-arrow-right"></i></a></li>
                                    </ul>                          
                                </div>
                            </div>
                        </div>
                        <SearchTourSidebar />
                    </div>
                </div>
            </div>
            <NewLetter/>
            <Footer/>
        </div>
    )
}

export default Tour
