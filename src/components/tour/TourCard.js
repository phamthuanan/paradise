import React from 'react'

const TourCard = () => {
    return (
        <div class="single-destinations-list style-two">
            <div class="thumb">
                <img src="../assets/img/destination-list/4.png" alt="list" />
            </div>
            <div class="details">
                <p class="location"><img src="../assets/img/icons/1.png" alt="map"/>TP Hồ Chí Minh</p>
                <h4 class="title"><a href="/tourdetail"> Hồ Chí Minh - Vũng Tàu - Nha Trang</a></h4>
                <ul class="tp-list-meta ">
                    <li><i class="fa fa-calendar-o"></i> 1/12/2020</li>
                    <li><i class="fa fa-clock-o"></i> 4 ngày</li>
                    <li><i class="fas fa-couch"></i> 5 chỗ</li>
                </ul>
                <div class="tp-price-meta">
                    <h2>3,570,000 <small>VNĐ</small></h2>
                </div>
            </div>
        </div>
    )
}

export default TourCard
