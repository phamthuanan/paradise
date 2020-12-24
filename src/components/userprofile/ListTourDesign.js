import React, { Component } from 'react'

class ListTourDesign extends Component{

    render(){
        return(
            <div>
                <h3 className="user-details-title">Danh sách tour thiết kế</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Tour</th>
                        <th scope="col">Lộ trình</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Nhà cung cấp</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Đang chờ duyệt</td>
                        <td><button className="btn btn-yellow">Đặt tour</button></td>
                        
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Đang chờ duyệt</td>
                        <td><button className="btn btn-yellow">Đặt tour</button></td>
                        </tr>
                    </tbody>
            </table>
            </div>
            
        )
    }
}

export default ListTourDesign;