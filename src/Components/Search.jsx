import React from 'react'

function Search() {
    return (
        <div className="container my-3 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center bg-white p-2 flex-grow-1">
                <i className="fa fa-search ml-2 mr-3"></i>
                <input type="text" className="form-control mr-2" placeholder="Enter Github User" />
                <button className="btn btn-primary">Search</button>   
            </div>
            <div>
                <p className="text-secondary font-weight-bold h5">Request : 60 / 60</p>
            </div>
        </div>
    )
}

export default Search
