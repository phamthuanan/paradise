import React from 'react'

const SearchPopup = () => {
    return (
        <div className="search-popup" id="search-popup">
            <form action="https://codingeek.net/html/viaje/index.html" className="search-form">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search....." />
                    <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}

export default SearchPopup
