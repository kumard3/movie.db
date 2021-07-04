import React from "react";
import "../styles/body.scss";

import requests from "../api/data";
import black from "../assets/Rectangle.png";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <img className="body__bottom" src={black} alt={black} />
      <div className="body__cardWrapper">
        <Card className="body__card" fetchUrl={requests.fetchPage1} />
        <Card className="body__card" fetchUrl={requests.fetchPage2} />
        <Card className="body__card" fetchUrl={requests.fetchPage3} />
        <Card className="body__card" fetchUrl={requests.fetchPage4} />
        <Card className="body__card" fetchUrl={requests.fetchPage5} />
        <Card className="body__card" fetchUrl={requests.fetchPage6} />
        <Card className="body__card" fetchUrl={requests.fetchPage7} />
      </div>
    </div>
  );
};

export default Body;
