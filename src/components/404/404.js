import React from 'react'

const Page404 = () => {
    return(
            <div class="error-page-area text-center" style={{backgroundImage: "url(../assets/img/bg/6.png)"}}>
                <div class="container">
                    <div class="logo-wrapper">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-6 error-page-wrap">
                            <div class="error-page-info">
                                <h1>404</h1>
                                <div class="error-page-info-details">
                                    <h2>KHÔNG TÌM THẤY TRANG</h2>
                                    <p>Xin lỗi vì trang bạn yêu cầu không được tìm thấy. Vui làm quay về trang chủ hoặc liệ hệ với chúng tôi thông qua email travelpoint@gmail.com</p>
                                    <a class="btn btn-yellow" href="/">Về trang chủ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Page404;