import React, {useState} from 'react'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
const SearchTourSidebar = () => {
    const [DepartDate, setDepartDate] = useState(new Date());
    const [ReturnDate, setReturnDate] = useState(new Date());
    return (

        <div class="col-xl-3 col-lg-4 order-lg-1">
            <div class="sidebar-area sidebar-area-inner-page">
                <div class="widget tour-list-widget">
                    <div class="widget-tour-list-meta">
                        <div class="single-widget-search-input-title"><i class="ti-location-pin"></i>Điểm đến</div>
                        <div class="single-widget-search-input">
                        <select class="select w-100" style={{padding: "11px" ,border: "none",color: "gray",marginLeft: "5px"}}>
                            <option value="0">Chọn điểm đến</option>
                            <option value="2">Event Travel</option>
                            <option value="3">Weekend Break</option>
                            <option value="4">Package Holiday</option>
                            <option value="5">Business Travel</option>
                        </select>
                        </div>
                        <div class="single-widget-search-input-title"><i class="fa fa-calendar-minus-o"></i> Ngày khởi hành</div>
                        <div class="single-widget-search-input">
                        <DatePicker 
                            selected={DepartDate}
                            onChange = {(date)=>{setDepartDate(date)}}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            className="departing-date"
                        />
                        </div>
                        <div class="single-widget-search-input-title"><i class="fa fa-calendar-minus-o"></i> Ngày kết thúc</div>
                        <div class="single-widget-search-input">
                        <DatePicker 
                            selected={ReturnDate}
                            onChange = {(date)=>{setReturnDate(date)}}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            className="returning-date"
                        />
                        </div>
                        <div style={{textAlign:"center"}}>
                            <a class="btn btn-yellow" href="#file"><i class="ti-search" style={{fontSize: "13px"}}></i> Tìm kiếm</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default SearchTourSidebar
