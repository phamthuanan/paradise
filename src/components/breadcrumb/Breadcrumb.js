import React from 'react'
import {Link} from 'react-router-dom'
const BreadcrumbTourList = (props) => {
    return (
        <div class="breadcrumb-area jarallax" style={{backgroundImage: "url(../assets/img/bg/1.png)"}} >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner">
                            <h1 class="page-title">{props.name}</h1>
                            <ul class="page-list">
                                <li><Link to="/">Trang chủ </Link></li>
                                <li> {props.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbTourList
