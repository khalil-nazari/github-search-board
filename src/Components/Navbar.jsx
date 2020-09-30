import React from 'react'

function Navbar() {
    return (
        <div className="nav_wrrapper container-fluid bg-white py-3 d-flex justify-content-center ">
            <div className="user_avatar">
                <span>KH</span>
            </div>
            <div className="user_name">
                Welcome, <span className="text-uppercase font-weight-bold">khalil@gmail.com</span>
            </div>

            <div className="logout">
                <button className="btn font-weight-bold text-secondary">Logout</button>
            </div>
        </div>
    )
}

export default Navbar
