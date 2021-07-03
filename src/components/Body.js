import React from 'react'
import '../styles/body.scss'
import Card from './Card';
import requests from "../api/data"
import black from "../assets/Rectangle.png";

const Body = () => {
    return (
        <div className="body" >
        <img className="body__bottom" src={black} alt={black} />
        <div className="body__cardWrapper" > 
        <Card fetchUrl={requests.fetchPage1} />
        <Card fetchUrl={requests.fetchPage2} />
        <Card fetchUrl={requests.fetchPage3} />
        <Card fetchUrl={requests.fetchPage4} />
        <Card fetchUrl={requests.fetchPage5} />
        <Card fetchUrl={requests.fetchPage6} />
        <Card fetchUrl={requests.fetchPage7} />
        </div>
        </div>
    )
}

export default Body
