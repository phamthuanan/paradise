import React from 'react'

const Newletter = () => {
    return (
        <div class="newslatter-area pd-top-120">
            <div class="container">
                <div class="newslatter-area-wrap border-tp-solid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
                            <div class="section-title mb-md-0">
                                <h2 class="title">Newsletter</h2>
                                <p>Sign up to receive the best offers</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
                            <div class="input-group newslatter-wrap">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Email" />
                                <div class="input-group-append">
                                    <button class="btn btn-yellow" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newletter
