import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {
    render() {
        return (
            <div class="single-blog">
                <div class="thumb">
                    <img src={"http://localhost:8080/blog/" + this.props.image} alt="blog"/>
                    <a class="tag" href="#">Europe</a>
                </div>
                <div class="single-blog-details">
                    <p class="date">{(new Date(this.props.datepost).getDate()) + "/" + (new Date(this.props.datepost).getMonth() + 1) + "/" + (new Date(this.props.datepost).getFullYear())}</p>
                    <h4 class="title"><Link to={"/blog/" + this.props.id}>{this.props.nameBlog}</Link></h4>
                    <p class="content">{this.props.intro}</p>
                    <Link class="btn-read-more" to = {"/blog/" + this.props.id}><span>Xem thêm<i class="la la-arrow-right"></i></span></Link>
                </div>
            </div>
        )
    }
}

export default SingleBlog