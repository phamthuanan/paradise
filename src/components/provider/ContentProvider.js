import React, { Component } from 'react'
import {Link} from "react-router-dom"


class ContentProvider extends Component{

    render(){
        return(
            <div className="page-company-detail pd-top-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Giới thiệu</h1>
                                </div>
                                <div className="col-md-7">
                                <p>{this.props.provider.introduce}</p>
                                    <h4>Thông tin liên hệ</h4>
                                    <ul className='info-contact-company'>
                                        <li><i class="fas fa-map-marker-alt"></i> Địa chỉ {this.props.provider.address}</li>
                                        <li><i class="fas fa-phone"></i> Điện thoại {this.props.provider.phone}</li>
                                        <li><i class="fas fa-fax"></i> Fax {this.props.provider.fax}</li>
                                        <li><i class="fas fa-envelope"></i> Email {this.props.provider.email}</li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                <img src={this.props.provider.images['0']} alt="images-info-company" className="img-info-company"/>
                                </div>
                            </div>
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Dịch vụ du lịch</h1>
                                </div>
                                <div className="col-md-5">
                                <img src={this.props.provider.images['1']} alt="images-info-company" className="img-info-company"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className='info-contact-company'>
                                        {this.props.provider.service.map((item, index) => {
                                            return(
                                                <li key = {index}><i class="fas fa-plus-circle"></i> {item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="row component-info-company">
                                <div className="col-md-12">
                                    <h1>Thành tích và giải thưởng</h1>
                                </div>
                                <div className="col-md-7">
                                    <ul className='info-contact-company'>
                                        <li><i class="fas fa-check-circle"></i> Mỗi năm tiếp đón khoảng hơn <span className="hightlightnumbercustomer">{this.props.provider.traveler} Triệu </span>lượt khách trong và ngoài nước</li>
                                        <li><i class="fas fa-check-circle"></i> Doanh thu mỗi năm thu về khoảng hơn <span className="hightlightnumbercustomer">{this.props.provider.revenue} nghìn </span>tỷ VNĐ</li>
                                        <h4>Các giải thưởng đạt được</h4>
                                            <ul className='info-contact-company'>
                                                {this.props.provider.prize.map((item, index) => {
                                                    return(
                                                        <li key = {index}><i class="fas fa-trophy"></i> {item}</li>
                                                    )
                                                })}
                                            </ul>
                            
                                    </ul>
                                    
                                </div>
                                <div className="col-md-5">
                                <img src={this.props.provider.images['2']} alt="images-info-company" className="img-info-company"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            <aside class="sidebar-area">
                                <div class="widget widget_search bg-none pd-none">
                                    <form class="search-form">
                                        <div class="form-group">
                                            <input type="text" placeholder="Search"/>
                                        </div>
                                        <button class="submit-btn" type="submit"><i class="ti-search"></i></button>
                                    </form>
                                </div>
                                <div class="widget widget_categories mb-0">
                                    <h2 class="widget-title">Công ty</h2>
                                    <ul>
                                        {this.props.allProvider.map((item, index) => {
                                            return(
                                                <li key = {index}><Link to ={'/company/' + item._id} >{item.name}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ContentProvider