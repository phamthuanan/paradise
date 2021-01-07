import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const TourCard = ({nameTour, departDate,capacity, price, image, placeDepart, id, providerId}) => {

    const [nameProvider, setNameProvider] = useState(null)

    useEffect(() => {
        getNameProvider(providerId)
    }, []);

    const getNameProvider = async (nameProviderId) =>{
        let res 
        try {
            res = await axios.get("http://localhost:8080/provider/name/" + nameProviderId);
        } catch (err) {
          console.log(err);
          return;
        }
        setNameProvider(res.data.name)
    }
    
    return (
        <div class="single-destinations-list style-two">
            <div class="thumb">
                <img src={"http://localhost:8080/tour/" + image} alt="list" />
            </div>
            <div class="details">
                <p class="location"><img src="../assets/img/icons/1.png" alt="map"/>{placeDepart}</p>
                <h4 class="title"><Link to = {"/tour/"+id}>{nameTour}</Link></h4>
                <ul class="tp-list-meta ">
                    <li><i class="fa fa-calendar-o"></i>{new Date(departDate).getDate() + '/' + new Date(departDate).getMonth() + 1 + '/' +  new Date(departDate).getFullYear()}</li>
                    <li><i class="fa fa-clock-o"></i> 3 ngày</li>
                    <li><i class="fas fa-couch"></i> {capacity} chỗ</li>
                    <li><i class="far fa-copyright"></i> {nameProvider} </li> 
                </ul>
                <div class="tp-price-meta">
                    <h2>{price} <small>VNĐ</small></h2>
                </div>
            </div>
        </div>
    )
}

export default TourCard
