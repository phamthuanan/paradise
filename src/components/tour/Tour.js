import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import ContentTour from './ContentTour'
import SearchTourSidebar from './SearchTourSidebar'
import NewLetter from '../newletter/Newletter'
const Tour = ({history, islogin,logout, location, tour, totalpage,
    page,dateDepart, backPage, nextPage, setPage, setSearchText, setDateDepart, searchTextSubmit, allProvider,setNameProvider,nameProvider 
}) => {
    return (
        <div>
            <Header 
                history ={history}
                islogin = {islogin}
                logout = {() => logout()}
                allProvider = {allProvider}
            />
            <Breadcrumb name = 'Danh sách tour'/>
            <div class="tour-list-area pd-top-120 list_tour">
                <div class="container">
                    <div class="row">
                        <ContentTour
                            tour = {tour}
                            totalpage = {totalpage}
                            page = {page}
                            backPage = {() => backPage()}
                            nextPage = {() => nextPage()}
                            setPage = {(page) => setPage(page)}
                            nameProvider = {nameProvider}
                            setNameProvider = {(name) => setNameProvider(name)}
                        />
                        <SearchTourSidebar 
                            setSearchText = {(value) => setSearchText(value)}
                            setDateDepart = {(value) => setDateDepart(value)}
                            searchTextSubmit = {() => searchTextSubmit()}
                            location = {location}
                            dateDepart ={dateDepart}
                        />
                    </div>
                </div>
            </div>
            <NewLetter/>
            <Footer/>
        </div>
    )
}

export default Tour
