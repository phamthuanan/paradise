import React, { Component } from 'react'

class Profile extends Component{

    render(){
        return(
            <div class="user-details">
                <h3 class="user-details-title">Thông tin cá nhân</h3>
                <div class="tp-img-upload">
                    <div class="tp-avatar-preview">
                        <div id="tp_imagePreview" style={{backgroundImage: "url(../assets/img/team/1.png)"}}>
                        </div>
                    </div>
                    <div class="tp-avatar-edit">
                        <input type='file' id="tp_imageUpload" accept=".png, .jpg, .jpeg" />
                        <label class="btn btn-transparent" for="tp_imageUpload"><i class="fa fa-picture-o"></i>Đổi ảnh đại diện</label>
                        <h4 class="name">Phạm Thuận An</h4>
                    </div>
                </div>
                <form class="tp-form-wrap">
                <div class="row">
                    <div class="col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title">Họ</span>
                            <input type="text" name = "firstname"/>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title">Tên</span>
                            <input type="text" name = 'lastname'/>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title">Mô tả bản thân</span>
                            <textarea name = "introduce"></textarea>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title">Email</span>
                            <input type="text" name = "email"/>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title">Điện thoại</span>
                            <input type="text" name = "phonenumber" />
                        </label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-yellow mt-3 text-center" >Lưu</button>
                    </div>
                </div>
            </form>
            </div>
);
    };
}

export default Profile;