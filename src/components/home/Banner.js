import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {

    return (
        <div class="banner-area">
            <div class="banner-slider">
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="../assets/img/banner/1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                        <p className="tittleBanner">Hot tour</p>
                        <h2 className="nameBanner">Côn <br/> Đảo</h2>
                        </div>
                        <div className=" col-sm-5 col-xl-4 ">
                        <p className='titlePromtion'>Giá</p>
                        <h3 className="infoPromote">3,500,000<small>VNĐ</small></h3>
                        <p className='titlePromtion'>4 Ngày</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>5 sao</p>
                        <h3 className="infoPromote">Khách sạn</h3>
                        <p className='titlePromtion'>Tự chọn khách sạn</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>Ngày</p>
                        <h3 className="infoPromote">15</h3>
                        <p className='titlePromtion'>Tháng 12 và sau nữa</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="../assets/img/banner/2.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                        <p className="tittleBanner">Hot tour</p>
                        <h2 className="nameBanner">Đảo <br/> Mykonos</h2>
                        </div>
                        <div className=" col-sm-5 col-xl-4 ">
                        <p className='titlePromtion'>Giá</p>
                        <h3 className="infoPromote">7,890,000<small>VNĐ</small></h3>
                        <p className='titlePromtion'>6 Ngày</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>5 sao</p>
                        <h3 className="infoPromote">Khách sạn</h3>
                        <p className='titlePromtion'>Tự chọn khách sạn</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>Ngày</p>
                        <h3 className="infoPromote">20</h3>
                        <p className='titlePromtion'>Tháng 12 và sau nữa</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/img/banner/1.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                        <p className="tittleBanner">Hot tour</p>
                        <h2 className="nameBanner">Côn <br/> Đảo</h2>
                        </div>
                        <div className=" col-sm-12 col-xl-4 ">
                        <p className='titlePromtion'>Giá</p>
                        <h3 className="infoPromote">3,500,000<small>VNĐ</small></h3>
                        <p className='titlePromtion'>4 Ngày</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>5 sao</p>
                        <h3 className="infoPromote">Khách sạn</h3>
                        <p className='titlePromtion'>Tự chọn khách sạn</p>
                        </div>
                        <div className="col-sm-3 col-xl-4">
                        <p className='titlePromtion'>Ngày</p>
                        <h3 className="infoPromote">15</h3>
                        <p className='titlePromtion'>Tháng 12 và sau nữa</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
        
    )
}

export default Banner
