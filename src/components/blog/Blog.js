import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import SingleBlog from './SingleBlog'
import SmallBlog from './SmallBlog'

class Blog extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            pagination: []
        }
    }
    componentWillMount() {
        let tmp = [];
        for (let i = 1; i <= this.props.totalpage; i++) {
          tmp.push(i);
        }
        this.setState({ pagination: tmp });
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.totalpage !== this.props.totalpage) {
          let tmp = [];
          for (let i = 1; i <= nextProps.totalpage; i++) {
            tmp.push(i);
          }
          this.setState({ pagination: tmp });
        }
      }
      renderPagination() {
        if (this.state.pagination.length === 0) {
          return null;
        } else {
          return (
            <ul className="pagination pagination-custom">
              <li onClick={() => this.props.backPage()}>
                <Link to="/blog">&laquo;</Link>
              </li>
              {this.state.pagination.map((element, index) => {
                if (this.props.page === element) {
                  return (
                    <li
                      className="active"
                      onClick={() => this.props.setPage(element)}
                    >
                      <Link to="/blog">{element}</Link>
                    </li>
                  );
                } else {
                  return (
                    <li onClick={() => this.props.setPage(element)}>
                      <Link to="/blog">{element}</Link>
                    </li>
                  );
                }
              })}
              <li onClick={() => this.props.nextPage()}>
                <Link to="/blog">&raquo;</Link>
              </li>
            </ul>
          );
        }
      }
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
                                    {this.props.blog.map((item, index) => {
                                        return(
                                             <div class="col-lg-6 col-md-6">
                                                <SingleBlog
                                                    key = {index}
                                                    id = {item._id}
                                                    datepost = {item.date_post}
                                                    nameBlog = {item.name_blog}
                                                    intro = {item.introduce_summary}
                                                    image = {item.images_cover}
                                                />
                                            </div>
                                        )
                                    })}
                                    <div className = "col-12">
                                        {this.renderPagination()}
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
                                            {this.props.blogcategory.map((item, index) => {
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


export default Blog;