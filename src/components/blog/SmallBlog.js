import React from 'react'
import {Link} from 'react-router-dom'

const SmallBlog = ({image,datepost, nameBlog, id}) => {
    return (
        <div class="media">
            <img src={"http://localhost:8080/blog/" + image} alt="widget" style = {{width : '109px', height : '77px', borderRadius : '10px'}}/>
            <div class="media-body">
                <span class="post-date">{(new Date(datepost).getDate()) + "/" + (new Date(datepost).getMonth() + 1) + "/" + (new Date(datepost).getFullYear())}</span>
                <h6 class="title"><Link to= {'/blog/' + id}>{nameBlog}</Link></h6>
            </div>
        </div>
    )
}

export default SmallBlog

