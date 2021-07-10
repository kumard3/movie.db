import React, { useState, useEffect } from "react";
import "../styles/banner.scss";
import black from "../assets/black2.svg";
import play from "../assets/play.svg";
import list from "../assets/list.svg";
import axios from "axios";
import {info }from '../api/data'
const Banner = ({anime}) => {

console.log(info)
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={`https://image.tmdb.org/t/p/original/${info[0].backdrop_path}`}
        
        alt="banner"
      />
      <div className="banner__content">
        <h1 className="banner__h1">{info[0].name} </h1>
        <h3 className="banner__h3">
        {info[0].overview}
        </h3>
        <div className="bannerbutton" >
        <button className="bannerbutton__play" > <img src={play} /> <h3>Play</h3></button>
        <button className="bannerbutton__list" ><img src={list} /> <h3>My List</h3></button>
        </div>
      </div>
  
  </div>
  );
};

export default Banner;
