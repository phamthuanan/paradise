import React, {useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const DesignTour = (
    {history,islogin,logout, setNameTour, departDate,returnDate,setDepartDate, setReturnDate,setProvider,
      designTourSubmit, allProvider, location,province, setDescription,setMessages,setPlaceDepart, route,setRoute  }
    ) =>{

    const [Location, setLocation] = useState('0')

    const [tags, setTag] = useState([0]);
    const addInputRouteTour = () => {
        var newInput = tags.length;
        setTag([...tags, newInput]);
        addRoute()
    }
    const addRoute = () =>{
        setRoute([
            ...route,{
                location_id: Location
            }
            
        ])
        console.log(Location + ' ' + route)
    }
        return(
            <div>
                <Header
                    history = {history}
                    islogin = {islogin}
                    logout = {()=>logout()}
                    allProvider = {allProvider}
                />
                <Breadcrumb name="Thiết kế Tour"/>
                    <div className="component-design-tour">
                        <form>
                            <div className="container form-design-tour">
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-md-6 col-xl-6">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xl-12" style={{margin: "30px 0px 50px 0px"}}>
                                                <h1 style={{fontSize:"auto",textAlign:"center"}}>Thiết kế tour</h1>
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-12 col-xl-12 col-md-12">
                                                <input type="text" placeholder="Nhập tên tour" className="form-control" onChange={(e) => setNameTour(e.target.value)}/>
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-6 col-xl-6 col-md-6">
                                                <label for="departdate">Ngày khởi hành</label>
                                                <DatePicker 
                                                    selected={departDate}
                                                    onChange = {(date)=>{setDepartDate(date)}}
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    className="departing-date form-control"
                                                    id="departdate"
                                                />
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-6 col-xl-6 col-md-6">
                                                <label for="returndate">Ngày kết thúc</label>
                                                <DatePicker 
                                                    selected={returnDate}
                                                    onChange = {(date)=>{setReturnDate(date)}}
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    className="returning-date form-control"
                                                    id="returndate"
                                                />
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-6 col-xl-6 col-md-6">
                                                <label for="company">Nơi khởi hành</label>
                                                <select id="company" class="form-control" onChange = {(e) => setPlaceDepart(e.target.value)} >
                                                    <option value="0">Chọn nơi khởi hành</option>
                                                    { province.map((item, index) => {
                                                        return(
                                                            <option key = {index} value={item._id}>{item.name_province}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-6 col-xl-6 col-md-6">
                                                <label for="company">Nhà cung cấp dịch vụ</label>
                                                <select id="company" class="form-control" onChange = {(e) => setProvider(e.target.value)}>
                                                    <option value="0">Chọn nhà cung cấp dịch vụ</option>
                                                    {allProvider.map((item, index) => {
                                                        return(
                                                            <option value={item._id} key = {index}>{item.name}</option>
                                                        )
                                                    }
                                                    )}
                                                    
                                                </select>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xl-12">
                                                <h3 style={{color: "black"}}>Tạo lộ trình</h3>
                                            </div>
                                            { 
                                                tags.map((tag, index) => (
                                                    <div className="col-md-12 col-sm-12 col-xl-12">
                                                        <div class="row" style={{border: "solid gray 1px",padding: "20px 0px 15px 20px",borderRadius: "10px", marginBottom: "20px"}}>
                                                            <div><span style={{padding: "5px 12px 5px 12px",backgroundColor:" #f3941e",color: "white"}}>{index + 1}</span></div>
                                                            <div className="col-11">
                                                                <div className="form-group col-12">
                                                                    <select id="company" class="form-control" onChange ={(e) =>setLocation(e.target.value)}>
                                                                        <option value = '0'>Chọn Địa điểm</option>
                                                                        {location.map((item, index) => {
                                                                            return(
                                                                                <option value={item._id} key = {index}>{item.name_location}</option>
                                                                            )
                                                                        })}
                                                                        
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className="col-lg-12" style={{paddingTop: "30px", paddingBottom: "50px"}}>
                                                <button class="btn btn-blue" type = "button" onClick={() => addInputRouteTour()}>+ Thêm lộ trình</button>
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12">
                                                <label for="description">Mô tả tour</label>
                                                <textarea className="form-control" id="description" rows="7" onChange = {(e) => setDescription(e.target.value)}/>
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12">
                                                <label for="mess">Lời nhắn</label>
                                                <textarea className="form-control" id="mess" rows="7" onChange = {(e) => setMessages(e.target.value)}/>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="agree" onClick = {() => addRoute()} required/>
                                                <label class="form-check-label" for="agree"><b>TÔI XÁC NHẬN THIẾT KẾ TOUR</b></label>
                                            </div>
                                            <hr style={{width:"100%"}}/>
                                            <div className="col-12" style={{textAlign: "center"}}>
                                                <button class="btn btn-yellow" style={{width: "100%"}} onClick={(e) => designTourSubmit(e)}> Tạo tour</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                <NewLetter/>
                <Footer/>
            </div>
        )
}

export default DesignTour;