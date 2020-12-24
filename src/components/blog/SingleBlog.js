import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {
    render() {
        return (
            <div class="single-blog">
                <div class="thumb">
                    <img src="../assets/img/blog/1.png" alt="blog"/>
                    <a class="tag" href="#">Europe</a>
                </div>
                <div class="single-blog-details">
                    <p class="date">19 September 2019</p>
                    <h4 class="title"><Link to="/blog/123">Why You Shouldn Elephants France.</Link></h4>
                    <p class="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
                    <a class="btn-read-more" href="/blog/blogdetail"><span>Xem thêm<i class="la la-arrow-right"></i></span></a>
                </div>
            </div>
        )
    }
}

export default SingleBlog