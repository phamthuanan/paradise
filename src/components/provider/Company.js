import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import NewLetter from '../newletter/Newletter'
import ContentProvider from './ContentProvider'

class Company extends Component{

    render(){
        return(
            <div>
            <Header
                history = {this.props.history}
                islogin = {this.props.islogin}
                logout = {() => this.props.logout()}
                allProvider = {this.props.allProvider}
            />
            <Breadcrumb name="Công ty du lịch lữ hành"/>
            <ContentProvider
                 provider = {this.props.provider}
                 allProvider = {this.props.allProvider}
            />
            <NewLetter/>
            <Footer/>
            </div>
            
        )
    }
}

export default Company