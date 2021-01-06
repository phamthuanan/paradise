import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class CardTourDiscount extends Component{

    constructor(props){
        super(props)
        this.state ={
            nameProvider : null
        }
    }

   async componentWillMount(){
        let res 
        try {
            res = await axios.get("http://localhost:8080/provider/name/" + this.props.providerId);
        } catch (err) {
          console.log(err);
          return;
        }
        this.setState({
            nameProvider : res.data.name
        })
    }

    render(){
        return(
            <div class="single-destinations-list text-center">
                <div class="thumb">
                    <span class="d-list-tag">Khuyến mãi</span>
                    <img src={this.props.image} alt="list" />
                    <div class="d-list-btn-wrap">
                        <div class="d-list-btn">
                            <Link class="btn btn-yellow" to={'/tour/' + this.props.id}>Đặt tour <i class="fa fa-paper-plane"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <h4 class="title"><i class="far fa-copyright"></i> {this.state.nameProvider}</h4>
                    <p class="content">{this.props.nameTour}</p>
                    <ul class="tp-list-meta border-bt-dot">
                        <li><i class="fa fa-calendar-o"></i> {
                            new Date(this.props.departDate).getDate() + '/' + new Date(this.props.departDate).getMonth() + 1 + '/' +  new Date(this.props.departDate).getFullYear()

                            }</li>
                        <li><i class="fa fa-clock-o"></i> 3 ngày</li>
                        <li><i class="fas fa-couch"></i> {this.props.capacity} chỗ</li>
                    </ul>
                    <div class="tp-price-meta tp-price-meta-cl">
                        <p>Giá</p>
                        <h2>{this.props.price * 0.8} <small>VNĐ</small></h2>
                        <del>{this.props.price}<span>VNĐ</span></del>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTourDiscount;