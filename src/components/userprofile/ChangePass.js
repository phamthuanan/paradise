import React, { Component } from 'react'

class ChangePass extends Component{

    render(){
        return(
            <div class="user-settings">
                <h3 class="user-details-title">Thay đổi mật khẩu</h3>
                <div class="row">
                    <div class="col-lg-7">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title mb-3">Đổi mật khẩu</span>
                            <input type="password" placeholder="Nhập mật khẩu hiện tại" />
                        </label>
                    </div>
                    <div class="col-lg-7">
                        <label class="single-input-wrap style-two">
                            <input type="password" placeholder="Nhập mật khẩu mới"/>
                        </label>
                    </div>
                    <div class="col-lg-7">
                        <label class="single-input-wrap style-two">
                            <input type="password" placeholder="Nhập lại mật khẩu mới"/>
                        </label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-yellow mt-3 text-center" >Lưu</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangePass;