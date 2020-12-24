import React, { Component } from 'react'
import CompanyDetail from '../components/provider/Company'

class CompanyDetailContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <CompanyDetail
                histoty = {this.props.histoty}
            />
        )
    }
}

export default CompanyDetailContainer