import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TourCard from './TourCard'
class ContentTour extends Component{
    constructor(props){
        super(props)
        this.state = {
            paginations: [],
            nameProvider : null
        }
    }

    componentWillMount() {
        let tmp = [];
        for (let i = 1; i <= this.props.totalpage; i++) {
          tmp.push(i);
        }
        this.setState({ paginations: tmp });
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.totalpage !== this.props.totalpage) {
          let tmp = [];
          for (let i = 1; i <= nextProps.totalpage; i++) {
            tmp.push(i);
          }
          this.setState({ pagination: tmp });
        }
      }
      renderPagination() {
        if (this.state.paginations.length === 0) {
          return null;
        } else {
          return (
            <ul className="pagination pagination-custom">
              <li onClick={() => this.props.backPage()}>
                <Link to="/tour">&laquo;</Link>
              </li>
              {this.state.paginations.map((element, index) => {
                if (this.props.page === element) {
                  return (
                    <li
                      className="active"
                      onClick={() => this.props.setPage(element)}
                    >
                      <Link to="/tour">{element}</Link>
                    </li>
                  );
                } else {
                  return (
                    <li onClick={() => this.props.setPage(element)}>
                      <Link to="/tour">{element}</Link>
                    </li>
                  );
                }
              })}
              <li onClick={() => this.props.nextPage()}>
                <Link to="/tour">&raquo;</Link>
              </li>
            </ul>
          );
        }
      }
    render(){
        return(
            <div class="col-xl-9 col-lg-8 order-lg-12">
                <div class="row ">
                    {this.props.tour.map((item, index) => {
            
                    
                        return(
                            <div class="col-lg-4 col-sm-6"
                                key = {index}>
                                <TourCard 
                                   //nameProvider = {this.props.nameProvider}
                                    nameTour = {item.name_tour}
                                    departDate = {item.time_start}
                                    capacity = {item.capacity}
                                    price = {item.price}
                                    image = {item.image_cover}
                                    placeDepart = {item.place_depart}
                                    id = {item._id}
                                    providerId = {item.provider_id}
                                />
                            </div>
                        )
                    })}
                </div>
                <div class="col-lg-12 text-center">
                    {this.renderPagination()}
                </div>
            </div>
        )
    }
}

export default ContentTour;