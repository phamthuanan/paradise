import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import SmallBlog from './SmallBlog'
import {Link} from 'react-router-dom'

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
                                        <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[0]} alt="blog"/>
                                    </div>
                                    
                                    <div class="single-blog-details">
                                        <p class="date mb-0">{ 'Ngày '+(new Date(this.props.blogDetail.date_post).getDate()) + " tháng " + (new Date(this.props.blogDetail.date_post).getMonth() + 1) + " năm " + (new Date(this.props.blogDetail.date_post).getFullYear())}</p>
                                        <h3 class="title">{this.props.blogDetail.name_blog}</h3>
                                        <p class="content mb-0">{this.props.blogDetail.content.first_content}</p>
                                    </div>
                                </div>
                                {/*  details-blockquote-start  */}
                                <blockquote class="blockquote tp-blockquote bg-dark-blue">
                                <p class="mb-0">{this.props.blogDetail.content.content_highlight}</p>
                                </blockquote>
                                <h4 class="single-page-small-title mt-5">{this.props.blogDetail.content.title_highlight1}</h4>

                                {/*details-gallery-start*/}
                                <div class="gallery-area">
                                    <div class="containerss">
                                        <div class="gallery-filter-area row custom-gutter" style ={{position: 'relative', height: '388.047px'}}>
                                            <div class="gallery-sizer col-1"></div>
                                            {/*gallery-item*/}
                                            <div class="tp-gallery-item col-md-4 col-sm-6 mb-10" style ={{position: 'absolute', top: '0px', left : '0%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[1]} alt="images_gallery1"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '0px', left : '33.2666%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[2]} alt="images_gallery2"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '0px', left : '66.6541%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[3]} alt="images_gallery3"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '192px', left : '33.2666%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[4]} alt="images_gallery4"/>
                                                </div>
                                            </div>
                                            
                                            <div class="tp-gallery-item col-md-4 col-sm-6" style ={{position: 'absolute', top: '193px', left : '66.6541%'}}>
                                                <div class="tp-gallery-item-img">
                                                    <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[5]} alt="images_gallery5"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p>{this.props.blogDetail.content.content_para1}</p>
                               
                                <h4 class="single-page-small-title mt-5">{this.props.blogDetail.content.title_highlight2}</h4>
                                <div class="video-popup-wrap style-two">
                                    <div class="thumb">
                                        <img src={"http://localhost:8080/blog/" + this.props.blogDetail.content.images[6]} alt="video"/>
                                    </div>
                                    <div class="video-popup-btn">
                                        <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" class="video-play-btn mfp-iframe"><i class="fa fa-play"></i></a>
                                    </div>
                                </div>
                                
                                <p>{this.props.blogDetail.content.content_highlight2}</p>
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
                                                    <Link to = {"/blog/" + this.props.blogRelated[0]._id}>
                                                        <span class="slick-arrow float-left"><i class="la la-long-arrow-left"></i></span>
                                                        <span class="nav-post-text pl-2 float-left">Trước</span>
                                                        <h4 class="float-left">{this.props.blogRelated[0].name_blog}</h4>
                                                    </Link> 
                                                </div>
                                            </div>
                                            <div class="col-xl-5 col-lg-6 col-6  offset-xl-2">
                                                <div class="nav-next w-100">
                                                    <Link to = {"/blog/" + this.props.blogRelated[1]._id }>
                                                        <span class="pr-2 nav-post-text">Sau</span>
                                                        <span class="slick-arrow float-right"><i class="la la-long-arrow-right"></i></span>
                                                        <h4 class="float-right">{this.props.blogRelated[1].name_blog}</h4>
                                                    </Link> 
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
                                            {this.props.categoryBlog.map((item, index) => {
                                                return(
                                                    <li><a href="#">{item.name}</a> 10</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div class="widget widget-recent-post">
                                        <h2 class="widget-title">Bài đăng mới</h2>
                                        <ul>
                                        {this.props.newPost.map((item,index) => {
                                                return(
                                                    <li>
                                                        <SmallBlog
                                                            key = {index}
                                                            id = {item._id}
                                                            image = {item.images_cover}
                                                            nameBlog = {item.name_blog}
                                                            datepost = {item.date_post}
                                                        />
                                                    </li>
                                                )
                                            })}
                                            
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