import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import SmallBlog from './SmallBlog'

class BlogDetail extends Component {
    
    render() {
        return (
            <div>
                <Header
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.logout()}
                    allProvider = {this.props.allProvider}
                />
                <Breadcrumb name = 'Blog chi tiết' />
                <div class="blog-area pd-top-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="single-blog mb-0">
                                    <div class="thumb">
                                        <img src="../assets/img/blog-details/1.png" alt="blog"/>
                                    </div>
                                    
                                    <div class="single-blog-details">
                                        <p class="date mb-0">19 September 2019</p>
                                        <h3 class="title">Why You Shouldn’t Ride Elephants France.</h3>
                                        <p class="content mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                {/*  details-blockquote-start  */}
                                <blockquote class="blockquote tp-blockquote bg-dark-blue">
                                <p class="mb-0">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
                                </blockquote>
                                {/*  details-blockquote-end */}
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                                <h4 class="single-page-small-title mt-5">Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa.</h4>

                                {/*details-gallery-start*/}
                                <div class="gallery-area">
                                    <div class="containerss">
                                        <div class="gallery-filter-area row custom-gutter" style ={{position: 'relative', height: '388.047px'}}>
                                            <div class="gallery-sizer col-1"></div>
                                            {/*gallery-item*/}
                                            <div class="tp-gallery-item col-md-4 col-sm-6 mb-10" style ={{position: 'absolute', top: '0px', left : '0%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src="../assets/img/blog-details/2.png" alt="images_gallery1"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '0px', left : '33.2666%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src="../assets/img/blog-details/3.png" alt="images_gallery2"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '0px', left : '66.6541%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src="../assets/img/blog-details/4.png" alt="images_gallery3"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '192px', left : '33.2666%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src="../assets/img/blog-details/5.png" alt="images_gallery4"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '193px', left : '66.6541%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src="../assets/img/blog-details/6.png" alt="images_gallery5"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                               
                                <h4 class="single-page-small-title mt-5">Praesent eu dolor eu orci vehicula euismod.</h4>
                                <div class="video-popup-wrap style-two">
                                    <div class="thumb">
                                        <img src="../assets/img/blog-details/7.png" alt="video"/>
                                    </div>
                                    <div class="video-popup-btn">
                                        <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" class="video-play-btn mfp-iframe"><i class="fa fa-play"></i></a>
                                    </div>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <div class="row tag-share-area">
                                    <div class="col-lg-6">
                                        <span class="mr-2">Share:</span>
                                        <ul class="social-icon style-two">
                                            <li>
                                                <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a class="pinterest" href="#"><i class="fa fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-xl-5 col-lg-6 offset-xl-1">

                                    </div>
                                </div>
                                <nav class="navigation post-navigation single-post-navigation">
                                    <div class="nav-links tp-control-nav">
                                        <div class="row">
                                            <div class="col-xl-5 col-lg-6 col-6 ">
                                                <div class="nav-previous w-100">
                                                    <a href="#">
                                                        <span class="slick-arrow float-left"><i class="la la-long-arrow-left"></i></span>
                                                        <span class="nav-post-text pl-2 float-left">Prev</span>
                                                        <h4 class="float-left">Why You Shouldn’t Ride Elephants In Thailand</h4>
                                                    </a> 
                                                </div>
                                            </div>
                                            <div class="col-xl-5 col-lg-6 col-6  offset-xl-2">
                                                <div class="nav-next w-100">
                                                    <a href="#">
                                                        <span class="pr-2 nav-post-text">Next</span>
                                                        <span class="slick-arrow float-right"><i class="la la-long-arrow-right"></i></span>
                                                        <h4 class="float-right">10 Best Highways for Romantic Long Drives</h4>
                                                    </a> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                   
                            </div>
                            <div class="col-lg-4">
                                <aside class="sidebar-area sidebar-area-4">
                                    <div class="widget widget_search bg-none pd-none">
                                        <form class="search-form">
                                            <div class="form-group">
                                                <input type="text" placeholder="Tìm kiếm"/>
                                            </div>
                                            <button class="submit-btn" type="submit"><i class="ti-search"></i></button>
                                        </form>
                                    </div>
                                    <div class="widget widget_categories">
                                        <h2 class="widget-title">Danh mục</h2>
                                        <ul>
                                            <li><a href="#">Bình Thuận</a> 33</li>
                                            <li><a href="#">Thành phố Hồ Chí Minh</a> 81</li>
                                            <li><a href="#">Hà Nội</a> 12</li>
                                            <li><a href="#">Quảng Ninh</a> 17</li>
                                            <li><a href="#">Huế</a> 21</li>
                                            <li><a href="#">Đà Lạt</a> 62</li>
                                        </ul>
                                    </div>
                                    <div class="widget widget-recent-post">
                                        <h2 class="widget-title">Bài đăng mới</h2>
                                        <ul>
                                            <li><SmallBlog/></li>
                                            <li><SmallBlog/></li>
                                            <li><SmallBlog/></li>
                                            
                                        </ul>
                                    </div>
                                    <div class="widget widget_tag_cloud">
                                        <h2 class="widget-title">Tags</h2>
                                        <div class="tagcloud">
                                            <a href="#">Nha Trang</a>
                                            <a href="#">Đà Lạt</a>
                                            <a href="#">Mùa đông</a>
                                            <a href="#">Du lịch sinh thái</a>
                                            <a href="#">Lặn biển</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                            
                <NewLetter/>
                <Footer/>
            </div>
        );
    }
}


export default BlogDetail;