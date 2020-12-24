import React, { useState } from "react"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingTour = ({history, islogin}) =>{

    const [birthDate, setBirthday] = useState(null);
    const [NumberCustomers, setNumberCustomer] = useState(['Người lớn']);
    const [NumberAdults, setNumberAdult] = useState(1);
    const [NumberChilds, setNumberChild] = useState(0);
    const [NumberKids, setNumberKid] = useState(0);
    const [NumberSmallKids, setNumberSmallKids] = useState(0);
    
    
    const HandleNumberAdultsChange = (event) =>{
        setNumberAdult(event.target.value);
        setNumberCustomer([...NumberCustomers, 'Người lớn']);
    }
    const HandleNumberChildsChange = (event) =>{
        setNumberChild(event.target.value);
        setNumberCustomer([...NumberCustomers, 'Trẻ em']);
    }
    const HandleNumberKidChange = (event) =>{
        setNumberKid(event.target.value);
        setNumberCustomer([...NumberCustomers, 'Trẻ nhỏ']);
    }
    const HandleNumberSmallKidChange = (event) =>{
        setNumberSmallKids(event.target.value);
        setNumberCustomer([...NumberCustomers, 'Em bé']);
    }
        return(
            <div>
                <Header
                    history = {history}
                    islogin = {islogin}
                />
                <Breadcrumb name="Đặt tour"/>
                <div className="Componnetbuytour pd-top-100">
                    <div className="row">
                        <div className="col-md-12 col-xl-12">
                            <div className="container">
                                <ul className="lineProcessbookingtour">
                                    <li className="partlineProcessBookingTour">
                                        <span className="numprocess">1</span>
                                        <span> Nhập thông tin đặt tour</span>
                                        <hr className="lineProcess"/>
                                    </li>
                                    <li className="partlineProcessBookingTour">
                                        <span className="numprocess" style={{backgroundColor:"gray"}}>2</span>
                                        <span> Xác nhận đặt tour</span>
                                        <hr className="lineProcess"/>
                                    </li>
                                    <li>
                                        <span className="numprocess" style={{backgroundColor:"gray"}}>3</span>
                                        <span> Thanh toán</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-12 component-infor-tour">
                            <div class="container">
                                <div className="row">
                                    <div className="title-infor-tour col-md-12 col-xl-12">
                                        <h3>Thông tin Tour</h3>
                                    </div>
                                    <div className="col-md-3 col-xl-3">
                                        <img src="../assets/img/gallery/10.png" alt="img-tour" className="img-tour-booking"/>
                                    </div>
                                    <div className="col-md-9 col-xl-9">
                                        <div className="name-tour">
                                            <span>Tên tour</span>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <ul className="info-tour">
                                                <li><i class="fas fa-barcode"></i> Mã tour</li>
                                                <li><i class="fa fa-calendar-o"></i> Ngày khởi hàng: 1/12/2020</li>
                                                <li><i class="fa fa-clock-o"></i> Số ngày: 4 ngày</li>
                                            </ul>
                                            <ul className="info-tour">
                                                <li><i class="fas fa-couch"></i> Số chỗ còn chận: 8</li>
                                                <li>Giá <span style={{color: "orange", fontSize:"30px", fontWeight: "bold"}}>3,000,000</span> <small>VNĐ</small></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="note-info">
                                        <p>Khách nữ từ 55 tuổi trở lên, khách nam từ 60 tuổi trở lên đi tour một mình và khách mang thai trên 4 tháng (16 tuần) vui lòng đăng ký tour trực tiếp tại văn phòng. Không áp dụng đăng ký tour online đối với khách từ 70 tuổi trở lên</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-12 component-price-tour">
                            <div class="container">
                                <div className="row">
                                    <div className="title-infor-tour col-md-12 col-xl-12">
                                        <h3>Bảng giá tour</h3>
                                    </div>
                                    <div className="col-md-12 col-xl-12">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                <th scope="col">Người lớn ( Từ 12 tuổi trở lên)</th>
                                                <th scope="col">Trẻ em ( Từ 5 đến dưới 12 tuổi)</th>
                                                <th scope="col">Trẻ nhỏ ( Từ 2 đến dưới 5 tuổi)</th>
                                                <th scope="col">Em bé ( Dưới 2 tuổi)</th>
                                                <th scope="col">Phụ thu</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2,700,500 đ</td>
                                                    <td>1,970,000 đ</td>
                                                    <td>0 đ</td>
                                                    <td>0 đ</td>
                                                    <td>600,000 đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-12">
                            <form>
                                <div class="container">
                                    <div className="row component-info-customer">
                                        <div className="title-infor-tour col-md-12 col-xl-12">
                                            <h3>Thông tin liên lạc</h3>
                                        </div>
                                        <div className="col-md-12 col-xl-12">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label for="name">Họ và tên</label>
                                                        <input type="text" className="form-control" id="name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="phone">Điện thoại</label>
                                                        <input type="text" className="form-control" id="phone"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="Email">Email</label>
                                                        <input type="email" className="form-control" id="email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="address">Địa chỉ</label>
                                                        <input type="text" className="form-control" id="address"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <h4>Số lượng người tham gia</h4>
                                                        </div>
                                                        <div className="form-group col-md-3 col-sm-3">
                                                            <label for="adult">Người lớn</label>
                                                            <input type="number" className="form-control" id="adult" min = "1" max="100" value={NumberAdults} onChange={(e) => HandleNumberAdultsChange(e)}/>
                                                        </div>
                                                        <div className="form-group col-md-2 col-sm-2">
                                                            <label for="child">Trẻ em</label>
                                                            <input type="number" className="form-control" id="child" min = "0" max="100" value={NumberChilds} onChange={(e) => HandleNumberChildsChange(e)}/>
                                                        </div>
                                                        <div className="form-group col-md-2 col-sm-2">
                                                            <label for="kid">Trẻ nhỏ</label>
                                                            <input type="number" className="form-control" id="kid" min = "0" max="100" value={NumberKids} onChange={(e) => HandleNumberKidChange(e)}/>
                                                        </div>
                                                        <div className="form-group col-md-2 col-sm-2">
                                                            <label for="small-kid">Em bé</label>
                                                            <input type="number" className="form-control" id="small-kid" min = "0" max="100" value={NumberSmallKids} onChange={(e) => HandleNumberSmallKidChange(e)}/>
                                                        </div>
                                                        <div className="form-group col-md-2 col-sm-2">
                                                            <label for="number-customer">Số người</label>
                                                            <input type="number" className="form-control" id="number-customer" disabled value={NumberCustomers.length}/>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12">
                                                            <label for="note">Ghi chú</label>
                                                            <textarea className="form-control" id="note" rows="7"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row list-customer">
                                        <div className="title-infor-tour col-md-12 col-xl-12">
                                            <h3>Danh sách khách hàng</h3>
                                        </div>
                                        {
                                            NumberCustomers.map((customer, index) =>(
                                                <div className="col-md-12 col-xl-12 info-list-customer">
                                                    <h6 className="tittle-customer">Khách hàng {index + 1}</h6>
                                                    <div className="row">
                                                        <div className="col-xl-3 col-md-3">
                                                            <label for="name-customer">Họ và tên</label>
                                                            <input type="text" className="form-control" id="name-customer"/>
                                                        </div>
                                                        <div className="col-xl-2 col-md-2">
                                                            <label for="gender">Giới tính</label>
                                                            <select class="form-control" id="gender">
                                                                <option value="1">Nam</option>
                                                                <option value="0">Nữ</option>
                                                            </select>
                                                        </div>
                                                        <div className = "col-xl-2 col-md-2">
                                                            <label for="birthday">Ngày sinh</label>
                                                            <DatePicker 
                                                                selected={birthDate}
                                                                onChange = {(date)=>{setBirthday(date)}}
                                                                dateFormat="dd/MM/yyyy"
                                                                className="form-control"
                                                                id="birthday"
                                                            />
                                                        </div>
                                                        <div className="col-xl-3 col-md-3">
                                                            <label for="card-id">CMND/Hộ chiếu</label>
                                                            <input type="text" className="form-control" id="card-id"/>
                                                        </div>
                                                        <div className="col-xl-2 col-md-2">
                                                            <label for="age">Độ tuổi</label>
                                                            <input type="text" className="form-control" id="age" value={customer} disabled/>
                                                        </div>
                                                        <div className="col-xl-12 col-md-12 price-tour-booking">
                                                            <hr/>
                                                            <span>Trị giá: <b style={{color:"orange"}}>2,750,000 đ</b></span>
                                                        </div>
                                                    </div>  
                                                </div>
                                            ))
                                        }
                                        
                                        <div className="col-xl-12 col-md-12 price-tour-booking">
                                            <hr/>
                                            <span>Tổng cộng: <b style={{color:"orange"}}>2,750,000 đ</b></span>
                                        </div>
                                    </div>
                                    <div className="row component-payment">
                                        <div className="title-infor-tour col-md-12 col-xl-12">
                                            <h3>Xin quý khách vui lòng chọn hình thức thanh toán</h3>
                                        </div>
                                        <div className=" typepayment col-md-12 col-xl-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="payment" id="cash" value="cash"/>
                                                <label class="form-check-label" for="cash">
                                                    Tiền mặt
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="payment" id="transfer" value="transfer"  />
                                                <label class="form-check-label" for="transfer">
                                                    Chuyển khoản
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="payment" id="ATM" value="ATM"  />
                                                <label class="form-check-label" for="ATM">
                                                    ATM/ Internet Banking
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="payment" id="credit-card" value="credit-card"  />
                                                <label class="form-check-label" for="credit-card">
                                                    Thẻ tín dụng
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row component-payment">
                                        <div className="title-infor-tour col-md-12 col-xl-12">
                                            <h3>Điều khoản bắt buộc khi đăng ký onine</h3>
                                        </div>
                                        <div className=" role-payment-online col-md-12 col-xl-12">
                                            <div class="rule-content">
                                                <title></title>
                                                <p>
                                                    <strong>ĐIỀU KIỆN BÁN VÉ CÁC CHƯƠNG TRÌNH DU LỊCH TRONG NƯỚC</strong></p>
                                                <p>
                                                    <strong>I.&nbsp;&nbsp; GIÁ VÉ DU LỊCH</strong></p>
                                                <p>
                                                    Giá vé du lịch được tính theo tiền Đồng (Việt Nam - VNĐ). Trường hợp khách thanh toán bằng USD sẽ được quy đổi ra VNĐ theo tỉ giá của ngân hàng Đầu Tư và Phát Triển Việt Nam - Chi nhánh TP.HCM tại thời điểm thanh toán.</p>
                                                <p>
                                                    Giá vé chỉ bao gồm những khoản được liệt kê một cách rõ ràng trong phần “Bao gồm” trong các chương trình du lịch. Vietravel không có nghĩa vụ thanh toán bất cứ chi phí nào không nằm trong phần “Bao gồm”.</p>
                                                <p>
                                                    <strong>II.&nbsp;&nbsp; GIÁ DÀNH CHO TRẺ EM</strong></p>
                                                <p>
                                                    - Trẻ em dưới 5 tuổi:&nbsp; không thu phí dịch vụ, bố mẹ tự lo cho bé và thanh toán các chi phí phát sinh (đối với các dịch vụ tính phí theo chiều cao…). Hai người lớn chỉ được kèm 1 trẻ em dưới 5 tuổi, trẻ em thứ 2 sẽ đóng phí theo qui định dành cho độ tuổi từ 5 đến dưới 12 tuổi và phụ thu phòng đơn. Vé máy bay, tàu hỏa, phương tiện vận chuyển công cộng mua vé theo qui định của các đơn vị vận chuyển (nếu có)</p>
                                                <p>
                                                    - Trẻ em từ 5 tuổi đến dưới 12 tuổi:&nbsp; 50% giá tour người lớn đối với tuyến xe, 75% giá tour người lớn đối với tuyến có vé máy bay (không có chế độ giường riêng). Hai người lớn chỉ được kèm 1 trẻ em từ 5 - dưới 12 tuổi, em thứ hai trở lên phải mua 1 suất giường đơn.</p>
                                                <p>
                                                    - Trẻ em từ 12 tuổi trở lên: mua một vé như người lớn.</p>
                                                <p>
                                                    <strong>III. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THANH TOÁN</strong></p>
                                                <p>
                                                    Khi thanh toán, Quý khách vui lòng cung cấp đầy đủ thông tin và đặt cọc ít nhất 50% tổng số tiền tour để giữ chỗ, số tiền còn lại Quý khách sẽ thanh toán trước ngày khởi hành 05 ngày làm việc (tour ngày thường) và trước 10 ngày làm việc (tour dịp Lễ, Tết)”.</p>
                                                <p>
                                                    Thanh toán bằng tiền mặt hoặc chuyển khoản tới tài khoản ngân hàng của nhà cung cấp dịch vụ tương ứng.</p>
                                                
                                                <p>
                                                    Việc thanh toán được xem là hoàn tất khi /// nhận được đủ tiền vé du lịch trước lúc khởi hành hoặc theo hợp đồng thỏa thuận giữa hai bên. Bất kỳ mọi sự thanh toán chậm trễ dẫn đến việc hủy dịch vụ không thuộc trách nhiệm của Vietravel.</p>
                                                <p>
                                                    Khách hàng có nhu cầu xuất hóa đơn, vui lòng cung cấp thông tin xuất hóa đơn ngay tại thời điểm đăng ký. /// có trách nhiệm xuất hóa đơn cho khách hàng trong vòng 7 ngày sau khi tour kết thúc.</p>
                                                <p>
                                                    <strong>DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG //// THANH TOÁN CHUYỂN KHOẢN:</strong></p>
                                                <p>
                                                    Khi thực hiện việc chuyển khoản, Quý khách <strong>vui lòng ghi rõ Tên họ, Số điện thoại và Nội dung chuyển</strong> cho chương trình du lịch cụ thể đã được Quý khách chọn đăng ký. Sau khi thực hiện việc chuyển khoản, Quý khách vui lòng gửi Ủy Nhiệm Chi về công ty Vietravel theo địa chỉ email sales@vietravel.com và liên hệ với nhân viên phụ trách tuyến để nhận được Vé du lịch chính thức từ công ty Vietravel. Vietravel sẽ không giải quyết các trường hợp hệ thống tự động hủy phiếu đăng ký nếu Quý khách không thực hiện đúng qui định trên.</p>
                                                <p>
                                                    <strong>IV.&nbsp;&nbsp; HỦY VÉ VÀ PHÍ HỦY VÉ DU LỊCH</strong></p>
                                                <p>
                                                    <strong>1.&nbsp;&nbsp; Trường hợp bị hủy bỏ do ////:</strong></p>
                                                <p>
                                                    Nếu /// không thực hiện được chuyến du lịch, /// phải báo ngay cho khách hàng biết và thanh toán lại cho khách hàng toàn bộ số tiền khách hàng đã đóng trong vòng 3 ngày kể từ lúc việc thông báo hủy chuyến du lịch bằng tiền mặt hoặc chuyển khoản.</p>
                                                <p>
                                                    <strong>2.&nbsp;&nbsp; Trường hợp bị hủy bỏ do khách hàng:</strong></p>
                                                <p>
                                                    Sau khi đóng tiền, nếu Quý khách muốn chuyển/hủy tour xin vui lòng mang Vé Du Lịch đến văn phòng đăng ký tour để làm thủ tục chuyển/hủy tour và chịu mất phí theo quy định của Vietravel. Không giải quyết các trường hợp liên hệ chuyển/hủy tour qua điện thoại.</p>
                                                <p>
                                                    <strong>•&nbsp;&nbsp;&nbsp;&nbsp; Đối với ngày thường:</strong></p>
                                                <p>
                                                    -&nbsp;&nbsp; Được chuyển sang các tuyến du lịch khác trước ngày khởi&nbsp; hành 20 ngày : Không mất chi phí.</p>
                                                <p>
                                                    -&nbsp;&nbsp; Hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký đến từ 15 - 19 ngày trước ngày khởi hành: Chi phí chuyển/hủy tour: 50% tiền cọc tour.</p>
                                                <p>
                                                    <strong>•&nbsp;&nbsp;&nbsp;&nbsp; Đối với ngày lễ, Tết:&nbsp; </strong></p>
                                                <p>
                                                    -&nbsp;&nbsp; Được chuyển sang các tuyến du lịch khác trước ngày khởi &nbsp;hành 30 ngày : Không mất chi phí.</p>
                                                <p>
                                                    -&nbsp;&nbsp; Hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký đến từ 25 - 29 ngày trước ngày khởi hành: Chi phí chuyển/hủy tour: 50% tiền cọc tour.</p>
                                                <p>
                                                    <strong><em>* Các tour ngày Lễ, Tết là các tour có thời gian diễn ra rơi vào một trong các ngày lễ, tết theo qui định.</em></strong></p>
                                                <p>
                                                    <strong><em>* Thời gian hủy tour được tính cho ngày làm việc, không tính thứ 7, Chủ Nhật và các ngày Lễ, Tết.</em></strong></p>
                                                <p>
                                                    <strong>DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG /// THANH TOÁN TRỰC TUYẾN:</strong></p>
                                                <p>
                                                    Khách hàng hủy Vé du lịch trong thời điểm ngày Thường và Lễ Tết theo đúng những qui định trên, trong trường hợp khách thanh toán trực tuyến, nếu hủy Vé du lịch khách hàng sẽ chịu toàn bộ phí ngân hàng cho việc thanh toán tiền Vé du lịch. Việc hoàn trả tiền cho khách sẽ được Vietravel thực hiện ngay sau khi ngân hàng thông báo tiền đã vào tài khoản của Vietravel.</p>
                                                <p>
                                                    <strong>3.&nbsp;&nbsp; Trường hợp bất khả kháng:</strong></p>
                                                <p>
                                                    Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì một lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, hủy chuyến hoặc thay đổi khác của các phương tiện vận chuyển công cộng hoặc các sự kiến bất khả kháng khác theo quy định pháp luật…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.</p>
                                                <p>
                                                    <strong>4. &nbsp;&nbsp;&nbsp;Thay đổi lộ trình:&nbsp; </strong></p>
                                                <p>
                                                    Tùy theo tình hình thực tế, /// giữ quyền thay đổi lộ trình, sắp xếp lại thứ tự các điểm tham quan hoặc hủy bỏ chuyến đi du lịch bất cứ lúc nào mà Vietravel thấy cần thiết vì sự thuận tiện hoặc an toàn cho khách hàng.</p>
                                                <p>
                                                    <strong>V.&nbsp;&nbsp; NHỮNG YÊU CẦU ĐẶC BIỆT TRONG CHUYẾN DU LỊCH</strong></p>
                                                <p>
                                                    Các yêu cầu đặc biệt của Quý khách phải được báo trước cho /// ngay tại thời điểm đăng ký. /// sẽ cố gắng đáp ứng những yêu cầu này trong khả năng của mình song sẽ không chịu trách nhiệm về bất kỳ sự từ chối cung cấp dịch vụ từ phía các nhà vận chuyển, khách sạn, nhà hàng và các nhà cung cấp dịch vụ độc lập khác.</p>
                                                <p>
                                                    <strong>VI.&nbsp;&nbsp; KHÁCH SẠN</strong></p>
                                                <p>
                                                    Khách sạn được cung cấp trên cơ sở những phòng có hai giường đơn (TWN) hoặc một giường đôi (DBL) tùy theo cơ cấu phòng của các khách sạn. Khách sạn do Vietravel đặt cho các chương trình tham quan có tiêu chuẩn tương ứng với các mức giá vé mà khách chọn khi đăng ký đi du lịch. Nếu cần thiết thay đổi về bất kỳ lý do nào, khách sạn thay thế sẽ tương đương với tiêu chuẩn của khách sạn ban đầu và sẽ được báo cho du khách trước khi khởi hành. Những yêu cầu đặc biệt của khách hàng nếu thông báo trước cho Vietravel sẽ được đáp ứng tùy theo khả năng cung cấp của khách sạn và khách hàng phải trả thêm tiền đối với các yêu cầu này (nếu có). Vietravel có quyền không đáp ứng những yêu cầu này nếu khách sạn từ chối cung cấp dịch vụ. Thời gian nhận phòng theo qui định tại các khách sạn là sau 14:00 và phải trả phòng trước 12:00. Đối với các trường hợp khách lưu trú tại hệ thống khách sạn/Resort 5 sao (Vinpearl, FLC, Grand Ho Tram Strip…) tuân thủ theo điều kiện hủy phạt của khách sạn/Resort cho từng thời điểm.</p>
                                                <p>
                                                    <strong>VII.&nbsp;&nbsp; VẬN CHUYỂN</strong></p>
                                                <p>
                                                    Phương tiện vận chuyển tùy thuộc theo từng chương trình du lịch.</p>
                                                <p>
                                                    Với chương trình đi bằng xe: xe máy lạnh (4, 7, 15, 25, 35, 45 chỗ) sẽ được Vietravel sắp xếp tùy theo số lượng khách từng đoàn, phục vụ suốt chương trình tham quan.</p>
                                                <p>
                                                    Với chương trình đi bằng xe lửa - máy bay - tàu cánh ngầm (phương tiện vận chuyển công cộng), trong một số chương trình các nhà cung cấp dịch vụ có thể thay đổi giờ khởi hành mà không báo trước, việc thay đổi này sẽ được Vietravel thông báo cho khách hàng nếu thời gian cho phép.</p>
                                                <p>
                                                    H/// không chịu trách nhiệm bồi hoàn và trách nhiệm pháp lý với những thiệt hại về vật chất lẫn tinh thần do việc chậm trễ, thay đổi giờ giấc khởi hành của các phương tiện vận chuyển công cộng hoặc sự chậm trễ do chính hành khách gây ra. Vietravel chỉ thực hiện hành vi giúp đỡ để giảm bớt tổn thất cho hành khách.</p>
                                                <p>
                                                    <strong>VIII.&nbsp;&nbsp; HÀNH LÝ</strong></p>
                                                <p>
                                                    Hành lý gọn nhẹ, với các chương trình sử dụng dịch vụ hàng không, hành lý miễn cước sẽ do các hãng hàng không qui định. Vietravel không chịu trách nhiệm về sự thất lạc, hư hỏng hành lý hoặc bất kỳ vật dụng gì của du khách trong suốt chuyến đi, du khách tự bảo quản hành lý của mình. Nếu khách hàng bị mất hay thất lạc hành lý thì Vietravel sẽ giúp hành khách liên lạc và khai báo với các bộ phận liên quan truy tìm hành lý bị mất hay thất lạc. Việc bồi thường hành lý bị mất hay thất lạc sẽ theo qui định của các đơn vị cung cấp dịch vụ hoặc các đơn vị bảo hiểm (nếu có).</p>
                                                <p>
                                                    <strong>IX.&nbsp;&nbsp; BẢO HIỂM DU LỊCH</strong></p>
                                                <p>
                                                    Giá dịch vụ du lịch trọn gói đã bao gồm bảo hiểm du lịch trong nước với mức đền bù cao nhất là 120.000.000đ/khách Việt Nam/vụ cho nhân mạng và 12.000.000 VNĐ/khách Việt Nam/vụ cho hành lý .</p>
                                                <p>
                                                    Điều kiện, điều khoản bảo hiểm: Theo quy tắc bảo hiểm khách du lịch trong nước QĐ số: 001321/2006 – BM/BHCN.</p>
                                                <p>
                                                    Số hotline tư vấn về các điều kiện, điều khoản bảo hiểm 0938 30 1234</p>
                                                <p>
                                                    <strong>X.&nbsp;&nbsp;&nbsp; </strong>Trong quá trình thực hiện, nếu xảy ra tranh chấp sẽ được giải quyết trên cơ sở thương lượng trong thời hạn 30 ngày kể từ ngày một trong hai bên đưa tranh chấp ra thương lượng. Hết thời hạn này nếu tranh chấp không được giải quyết hoặc một trong hai bên không đồng ý với kết quả thương lượng thì có quyền đưa tranh chấp ra giải quyết tại Tòa án thẩm quyền.</p>
                                                <p>
                                                    <strong><em>* Vé du lịch được xem như Hợp đồng lữ hành và được lập thành 2 bản, mỗi bên giữ một bản, có giá trị như nhau.</em></strong></p>
                                                <p>
                                                    &nbsp;</p>
                                            </div>
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="agree" />
                                            <label class="form-check-label" for="agree">Tôi đồng ý với các điều kiện trên</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 col-xl-12" style={{textAlign:"center"}}>
                            <button type="button"  class="btn btn-yellow">Đặt tour <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <NewLetter/>
                <Footer/>
            </div>
        )
}

export default BookingTour