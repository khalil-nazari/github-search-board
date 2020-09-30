import React from 'react'
import {Link} from 'react-router-dom'; 


function Error() {
    return (
        <div className="error_page_wrapper">
            <div>
                <h1 className="title">404</h1>
                <p className="erro_page_message">Sorry, the page you are looking cannot be found</p>
                <Link to="/" className="btn back_home_btn">Home</Link>
            </div>
        </div>
    )
}

export default Error
