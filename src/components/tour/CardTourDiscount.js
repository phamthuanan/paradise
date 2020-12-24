import React, { Component } from 'react'

class CardTourDiscount extends Component{

    render(){
        return(
            <div class="single-destinations-list text-center">
                <div class="thumb">
                    <span class="d-list-tag">Khuyến mãi</span>
                    <img src="../assets/img/destination-list/1.png" alt="list" />
                    <div class="d-list-btn-wrap">
                        <div class="d-list-btn">
                            <a class="btn btn-yellow" href="#fle">Đặt tour <i class="fa fa-paper-plane"></i></a>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <h4 class="title"><i class="fas fa-map-marker-alt"></i> Đà Lạt</h4>
                    <p class="content">Đà Lạt - Nha Trang - Vũng Tàu</p>
                    <ul class="tp-list-meta border-bt-dot">
                        <li><i class="fa fa-calendar-o"></i> 1/12/2020</li>
                        <li><i class="fa fa-clock-o"></i> 4 ngày</li>
                        <li><i class="fas fa-couch"></i> 5 chỗ</li>
                    </ul>
                    <div class="tp-price-meta tp-price-meta-cl">
                        <p>Giá</p>
                        <h2>2,500,000 <small>VNĐ</small></h2>
                        <del>3,000,000<span>VNĐ</span></del>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTourDiscount;