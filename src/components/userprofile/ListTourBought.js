import React, { Component } from 'react'
import TourCard from '../tour/TourCard'
class ListTourBought extends Component{

    render(){
        return(
            <div class="user-recent-view">
                <h3 class="user-details-title">Các tour đã đặt</h3>
                <div class="row">
                    <div class="col-sm-6">
                        <TourCard/>
                    </div>
                    <div class="col-sm-6">
                        <TourCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTourBought;