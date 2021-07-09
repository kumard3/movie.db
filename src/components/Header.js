import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import '../styles/header.scss'
const Header = ({anime}) => {
    return (
        <div className="header" >
        <Nav/>
        <Banner anime={anime} />
            
        </div>
    )
}

export default Header
