import React, { Component } from 'react'
import storeConfig from '../../config/storage.config'
import Reload from '../loading/Reload'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserProfile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          notiUpdateInfor: "",
          oldPassword: "",
          newPassword: "",
          confirm: "",
          tours : [],
          providers : [],
          providersOfTourDesign : [],
          notiUpdatePassword: ''
        };
      }
      componentWillMount() {
        if (this.props.isupdate) {
            this.setState({ notiUpdateInfor: "UPDATE SUCCESS" });
            toast.success("Cập nhật thành công", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
        } else if (this.props.isupdate === false) {
            this.setState({ notiUpdateInfor: "UPDATE FAIL" });
            toast.error("Lỗi cập nhật", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
        }else {
            this.setState({ notiUpdateInfor: "" });
          }
        for(var i = 0 ; i < this.props.historyBuyTour.length ; i++){
            this.getTour(this.props.historyBuyTour[i].tour_id)
        }
        for(var j = 0 ; j < this.props.tourDesigns.length ; j++){
            this.getNameProviderOfTourDesign(this.props.tourDesigns[j].provider_id)
        }
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.isupdate === true) {
            this.setState({ notiUpdateInfor: "UPDATE SUCCESS" });
            toast.success("Cập nhật thành công", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
        } else if (nextProps.isupdate === false) {
            this.setState({ notiUpdateInfor: "UPDATE FAIL" });
            toast.error("Lỗi cập nhật", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
        }else {
            this.setState({ notiUpdateInfor: "" });
         }
         if(nextProps.notiupdatePassword !== this.props.notiupdatePassword && nextProps.notiupdatePassword === true) {
            this.setState({
              notiUpdatePassword: "Update password success"
            })
            this.setState({
              oldPassword: '',
              newPassword: '',
              confirm: ''
            })
            this.props.resetUpdatePassword()
          } 
          if(nextProps.notiupdatePassword !== this.props.notiupdatePassword && nextProps.notiupdatePassword === false) {
            this.setState({
              notiUpdatePassword: "Update password fail"
            })
            this.props.resetUpdatePassword()
          } 

      }
      handleUpdatePassword() {
        if(this.state.newPassword.length < 6) {
            this.setState({notiUpdatePassword: 'New Password invalid'})
            toast.error("Mật khẩu mới không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
          return
        } else {
            this.setState({notiUpdatePassword: ''})
          }
        if(this.state.confirm.length < 6) {
            this.setState({notiUpdatePassword: 'Confirm Password invalid'})
            toast.error("Xác nhận mật khẩu không hợp lệ", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000
              });
          return
        }else {
            this.setState({notiUpdatePassword: ''})
          }
        this.props.updatePassword(this.state.oldPassword, this.state.newPassword)
      }

     getTour = async (tourId) => {
        let res
        try {
            res = await axios.get("http://localhost:8080/tour/" + tourId);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({tours: [...this.state.tours, res.data.data]}) 
        this.getNameProvider(res.data.data.provider_id)
      }
      getNameProvider = async (nameProviderId) => {
        let res
        try {
            res = await axios.get("http://localhost:8080/provider/name/" + nameProviderId);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({providers: [...this.state.providers, res.data.name]}) 
      }

      getNameProviderOfTourDesign = async (nameProviderId) => {
        let res
        try {
            res = await axios.get("http://localhost:8080/provider/name/" + nameProviderId);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({providersOfTourDesign: [...this.state.providersOfTourDesign, res.data.name]}) 
      }

    render(){
        
        if(this.state.tours.length === this.props.historyBuyTour.length && this.state.providers.length === this.props.historyBuyTour.length
            && this.state.providersOfTourDesign.length === this.props.tourDesigns.length){
            return(
            <div>
                <Header 
                    history = {this.props.history}
                    islogin = {this.props.islogin}
                    logout={() => this.props.logout()}
                    allProvider = {this.props.allProvider}
                />
                <Breadcrumb name = "Thông tin tài khoản" />
                <ToastContainer/>
                <div class="user-profile-area pd-top-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul class="nav nav-tabs tp-tabs style-two">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#tabs_1"><i class="fa fa-user"></i>Thông tin cá nhân</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#tabs_2"><i class="fas fa-key"></i>Đổi mật khẩu</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"  data-toggle="tab" href="#tabs_3"><i class="fas fa-paper-plane"></i>Danh sách tour đã đặt</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"  data-toggle="tab" href="#tabs_4"><i class="fas fa-pen-nib"></i>Dang sách tour thiết kế</a>
                                            </li>
                                            <li class="text-center">
                                                <button class="btn btn-yellow" type = "button" onClick={() => {
                                                              
                                                                this.props.logout();
                                                                this.props.history.push("/");
                                                                }}>
                                                                
                                                                <i class="fa fa-sign-in" aria-hidden="true"></i> <span>Đăng xuất</span></button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-xl-8 col-lg-9 offset-xl-1">
                                        <div class="tab-content user-tab-content">
                                            <div class="tab-pane fade show active" id="tabs_1" >
                                            <div class="user-details">
                                                <h3 class="user-details-title">Thông tin cá nhân</h3>
                                                <div class="tp-img-upload">
                                                    <div class="tp-avatar-preview">
                                                          <img src = {"http://localhost:8080/avatar/" +storeConfig.getUser().avatar} alt = "avatar" style = {{width: '192px', height : '192px'}}/>   
                                                        
                                                    </div>
                                                    <div class="tp-avatar-edit">
                                                        <input type='file' id="tp_imageUpload" accept=".png, .jpg, .jpeg" onChange = {(event) => this.props.setFile(event.target.files[0])}/>
                                                        <label class="btn btn-transparent" for="tp_imageUpload" onClick = { () => document.getElementById('tp_imageUpload').style.display = 'block'}><i class="fa fa-picture-o"></i>Đổi ảnh đại diện</label>
                                                        <h4 class="name">Phạm Thuận An</h4>
                                                    </div>
                                                </div>
                                                <div class="tp-form-wrap">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="single-input-wrap style-two">
                                                            <span class="single-input-title">Họ và tên</span>
                                                            <input type="text" name = "fullname" value = {this.props.name} onChange ={(event) => this.props.setName(event.target.value)}/>
                                                        </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="single-input-wrap style-two">
                                                            <span class="single-input-title">Email</span>
                                                            <input type="text" name = 'Email' value = {this.props.email} onChange ={(event) => this.props.setEmail(event.target.value)}/>
                                                        </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="single-input-wrap style-two">
                                                            <span class="single-input-title">Điện thoại</span>
                                                            <input type="text" name = "phone" value = {this.props.phone} onChange ={(event) => this.props.setPhone(event.target.value)}/>
                                                        </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="single-input-wrap style-two">
                                                            <span class="single-input-title">Địa chỉ</span>
                                                            <input type="text" name = "address" value = {this.props.address} onChange ={(event) => this.props.setAddress(event.target.value)}/>
                                                        </label>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-yellow mt-3 text-center" onClick = {() =>{
                                                            document.getElementById('tp_imageUpload').style.display = 'none'
                                                            this.props.updateInfor()
                                                        } }>Lưu</button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="tab-pane fade" id="tabs_2" >
                                                <div class="user-settings">
                                                    <h3 class="user-details-title">Thay đổi mật khẩu</h3>
                                                    <div class="row">
                                                        <div class="col-lg-7">
                                                            <label class="single-input-wrap style-two">
                                                                <span class="single-input-title mb-3">Đổi mật khẩu</span>
                                                                <input type="password" placeholder="Nhập mật khẩu hiện tại" value = {this.state.oldPassword} onChange = {e => this.setState({oldPassword : e.target.value})} />
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <label class="single-input-wrap style-two">
                                                                <input type="password" placeholder="Nhập mật khẩu mới" value = {this.state.newPassword} onChange = {e => this.setState({newPassword: e.target.value})}/>
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <label class="single-input-wrap style-two">
                                                                <input type="password" placeholder="Nhập lại mật khẩu mới" value = {this.state.confirm} onChange = {e => this.setState({ confirm: e.target.value})}/>
                                                            </label>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-yellow mt-3 text-center" onClick = {() => this.handleUpdatePassword()}>Lưu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade " id="tabs_3" >
                                                <div class="user-recent-view">
                                                    <h3 class="user-details-title">Các tour đã đặt</h3>
                                                    <div class="row">
                                                        {this.props.historyBuyTour.map((item, index) =>{
                                                            return(
                                                                <div class="col-sm-6">
                                                                    <div class="single-destinations-list style-two">
                                                                        <div class="thumb">
                                                                            <img src={"http://localhost:8080/tour/" + this.state.tours[index].image_cover} alt="list" />
                                                                            </div>
                                                                            <div class="details">
                                                                                <p class="location"><img src="../assets/img/icons/1.png" alt="map"/>{this.state.tours[index].place_depart}</p>
                                                                                <h4 class="title"><Link to = {`/confirmbooking/${item.token}-${this.state.tours[index]._id}`}>{this.state.tours[index].name_tour}</Link></h4>
                                                                                <ul class="tp-list-meta ">
                                                                                    <li><i class="fa fa-calendar-o"></i>{new Date(item.date_booking).getDate() + '/' +(new Date(item.date_booking).getMonth() + 1) + '/' + new Date(item.date_booking).getFullYear() }</li>
                                                                                    <li><i class="far fa-copyright"></i> {this.state.providers[index]} </li> 
                                                                                    <li><i class="fas fa-spinner"></i> {item.status_booking} </li>
                                                                                    
                                                                                </ul>
                                                                                <div class="tp-price-meta">
                                                                                    <h2>{item.total_price} <small>VNĐ</small></h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="tabs_4" >
                                                <h3 className="user-details-title">Danh sách tour thiết kế</h3>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Mã Tour</th>
                                                        <th scope="col">Lộ trình</th>
                                                        <th scope="col">Thời gian</th>
                                                        <th scope="col">Nhà cung cấp</th>
                                                        <th scope="col">Giá</th>
                                                        <th scope="col">Trạng thái</th>
                                                        <th scope="col"><i class="fas fa-cog"></i></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.props.tourDesigns.map((item, index) => {
                                                            console.log('hello' + item.confirm)
                                                            return(
                                                                <tr key = {index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{item._id}</td>
                                                                    <td>{item.name_tour}</td>
                                                                    <td>{new Date(item.time_start).getDate() + '/' + (new Date(item.time_start).getMonth() + 1) + '/' + new Date(item.time_start).getFullYear() + ' - ' +
                                                                     new Date(item.time_end).getDate() + '/' + (new Date(item.time_end).getMonth() + 1) + '/' + new Date(item.time_end).getFullYear()}</td>
                                                                    <td>{this.state.providersOfTourDesign[index]}</td>
                                                                    <td>{item.price}</td>
                                                                    <td>{item.status ? 'Đã duyệt' : 'Đang chờ duyệt'}</td>
                                                                    { item.confirm === true ? (<td><Link to ={"/tour/" + item._id} className="btn btn-yellow" style = {{marginBottom :'10px'}}>Đặt tour</Link> <button className="btn btn-danger">Hủy tour</button></td>):
                                                                    item.confirm === false ? "Tour bị từ chối" : "Đang chờ xác nhận" 
                                                                    }
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                 </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewLetter/>
                <Footer/>
            </div>
            
        );
        }
        else{
            return (
                <Reload />
            )
        }
        
    };
}

export default UserProfile;