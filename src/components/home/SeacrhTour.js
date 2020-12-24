import React from 'react'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
const SeacrhTour = ({setDestination, setDepartDate, setReturnDate,departDate, returnDate}) => {
   
    return (
        
        <div class="search-area tp-main-search-area">
            <div class="container">
                <div class="tp-main-search">
                    <div class="row">
                        <div class="col-lg-5 col-md-5">
                            <div class="tp-search-single-wrap">
                            <select  style={{padding: "11px" ,border: "none",color: "gray",marginLeft: "5px",width: "100%"}}
                                 onChange={(e) => setDestination(e.target.value)}
                            >
                                <option value="Chọn điểm đến">Chọn điểm đến</option>
                                <option value="2">Event Travel</option>
                                <option value="3">Weekend Break</option>
                                <option value="4">Package Holiday</option>
                                <option value="5">Business Travel</option>
                            </select>
                                <i class="ti-location-pin"></i>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 order-lg-5">
                            <div class="tp-search-single-wrap float-left">
                                <div class="tp-search-date tp-departing-date-wrap w-50 float-left">
                                    <DatePicker 
                                        selected={departDate}
                                        onChange = {(date)=>{setDepartDate(date)}}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        className="departing-date"
                                    />
                                    <i class="fa fa-calendar-minus-o"></i>
                                </div>
                                <div class="tp-search-date tp-returning-date-wrap w-50 float-left">
                                    <DatePicker 
                                        selected={returnDate}
                                        onChange = {(date)=>{setReturnDate(date)}}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        className="returning-date"
                                    />
                                    <img src="../assets/img/icons/2.png" alt="icons" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 order-12">
                            <a class="btn btn-yellow" href="#file"><i class="ti-search" style={{fontSize: "13px"}}></i> Tìm kiếm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeacrhTour
