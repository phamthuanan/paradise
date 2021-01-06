import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import SingleBlog from './SingleBlog'
import SmallBlog from './SmallBlog'

class Blog extends Component {
    
    render() {
        return (
            <div>
                <Header
                    history ={this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.logout()}
                    allProvider = {this.props.allProvider}
                />
                <Breadcrumb name = 'Blog' />
                <div class="blog-area pd-top-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row ">
                                    <div class="col-lg-6 col-md-6">
                                        <SingleBlog/>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <SingleBlog/>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <SingleBlog/>
                                    </div>
                                </div>
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


export default Blog;