import React from "react";
import "../styles/banner.scss";
import black from "../assets/black2.svg";
import play from "../assets/play.svg";
import list from "../assets/list.svg";
const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src="https://i.pinimg.com/originals/13/e1/8e/13e18e254a6a948941d967a5e38892da.png"
        alt="banner"
      />
      <div className="banner__content">
        <h1 className="banner__h1">Demon Slayer </h1>
        <h3 className="banner__h3">
          hello their how are you are you fin hedfjsjfbfbrofbrfbrf ioherf
          ihdvibhrgvriherbvhello their how are you are you fin
          hedfjsjfbfbrofbrfbrf ioherf ihdvibhrgvriherbv
          jbjvrovberuobvuoerbvuoeruvorfvurfhveruf
          jbjvrovberuobvuoerbvuoeruvorfvurfhveruf
        </h3>
        <div className="bannerbutton" >
        <button className="bannerbutton__play" ><img src={play} /> <h3>Play</h3></button>
        <button className="bannerbutton__list" ><img src={list} /> <h3>My List</h3></button>
        </div>
      </div>
  
  </div>
  );
};

export default Banner;
