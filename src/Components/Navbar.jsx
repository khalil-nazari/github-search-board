import React from 'react'

function Navbar() {
    return (
        <div className ="bg-white py-3">
            <div className="container d-flex justify-content-evenly align-items-center">
                <div className="avatar">
                    <span className="bg-success rounded-circle p-2 text-light">KN</span>
                </div>
                <div className="username">
                    Welcome, <span className="font-weight-bold text-uppercase">khalil.nazari@gmail.com</span>
                </div>
                <div className="logout_btn">
                    <span className="btn">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
