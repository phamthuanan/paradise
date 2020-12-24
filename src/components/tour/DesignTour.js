import React, {useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const DesignTour = (
    {history,islogin, setNameTour, departDate,returnDate,setDepartDate, setReturnDate,setQualityCustomer, setProvider,
        qualityCustomer, notification, designTourSubmit }
    ) =>{

    const [Province, setProvince] = useState('0');
    const [Location, setLocation] = useState('0')
    const [tags, setTag] = useState([0]);
    const addInputRouteTour = () => {
        var newInput = tags.length;
        setTag([...tags, newInput]);
    }
        return(
            <div>
                <Header
                    history = {history}
                    islogin = {islogin}
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
                                            {  notification !== ''  &&
                                                <div class="alert alert-danger col-md-12 col-sm-12 col-xl-12" role="alert">
                                                {notification}
                                                </div>
                                            }
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
                                                <label for="returndate">Ngày khởi hành</label>
                                                <DatePicker 
                                                    selected={returnDate}
                                                    onChange = {(date)=>{setReturnDate(date)}}
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    className="returning-date form-control"
                                                    id="returndate"
                                                />
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-3 col-xl-3 col-md-3">
                                                <label for="quality">Số lượng người</label>
                                                <input 
                                                type="number" 
                                                id="quality" 
                                                onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()} 
                                                className="form-control" 
                                                max="100" min="1"
                                                value={qualityCustomer}
                                                onChange={(e) => setQualityCustomer(e.target.value)}
                                                />
                                            </div>
                                            <div className=" form-group col-sm-12 col-xl-9 col-xl-9 col-md-9">
                                                <label for="company">Nhà cung cấp dịch vụ</label>
                                                <select id="company" class="form-control" onChange={(e) => setProvider(e.target.value)}>
                                                    <option value="0">Chọn nhà cung cấp dịch vụ</option>
                                                    <option value="1">...</option>
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
                                                                <select id="company" class="form-control" value = {Province} onChange ={(e) =>setProvince(e.target.value)}>
                                                                    <option value = '0'>Chọn Tỉnh, TP</option>
                                                                    <option value="1">...</option>
                                                                </select>
                                                                </div>
                                                                <div className="form-group col-12">
                                                                    <select id="company" class="form-control" value = {Location} onChange ={(e) =>setLocation(e.target.value)}>
                                                                        <option value = '0'>Chọn Địa điểm</option>
                                                                        <option value="1">...</option>
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