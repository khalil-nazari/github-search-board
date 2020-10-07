import React from 'react'
import {Navbar, Search, Info, Repos, User} from '../Components'

function Dashboard() {
    return (
        <>
        <Navbar />
        <Search />
        <Info />
        <User />
        <Repos />
        </>
    )
}

export default Dashboard
