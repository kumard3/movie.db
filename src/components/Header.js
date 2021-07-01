import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import '../styles/header.scss'
const Header = () => {
    return (
        <div className="header" >
        <Nav/>
        <Banner/>
            
        </div>
    )
}

export default Header
