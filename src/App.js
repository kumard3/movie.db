import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import requests from "./api/data";
import Header from "./components/Header";
//import Body from "./components/Body";
import CardInfo from "./components/CardInfo";
 const Body = React.lazy(() => import("./components/Body"));
function App() {
  const [anime1, setAnime1] = useState([]);
  const [anime2, setAnime2] = useState([]);
  const [anime3, setAnime3] = useState([]);
  const [anime4, setAnime4] = useState([]);
  const [anime5, setAnime5] = useState([]);
  const [anime6, setAnime6] = useState([]);
  const [anime7, setAnime7] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(requests.fetchPage1);
      const request2 = await axios.get(requests.fetchPage2);
      const request3 = await axios.get(requests.fetchPage3);
      const request4 = await axios.get(requests.fetchPage4);
      const request5 = await axios.get(requests.fetchPage5);
      const request6 = await axios.get(requests.fetchPage6);
      const request7 = await axios.get(requests.fetchPage7);
      setAnime1(request1.data.results);
      setAnime2(request2.data.results);
      setAnime3(request3.data.results);
      setAnime4(request4.data.results);
      setAnime5(request5.data.results);
      setAnime6(request6.data.results);
      setAnime7(request7.data.results);
    }
    fetchData();
  }, []);
  let allData = [
    ...anime1,
    ...anime2,
    ...anime3,
    ...anime4,
    ...anime5,
    ...anime6,
    ...anime7,
  ];
  // console.log(process.env.REACT_APP_TMDB_API_KEY);
  // console.log(anime2);
  // console.log(anime3);
  // console.log(anime4);
  // console.log(anime5);
  // console.log(anime6);
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Body />
      </Suspense>
         
        </Route>
        <Route path="/:id">
        <CardInfo allData={allData} />
        <Header />  
        <Body />
        </Route>
      </Router>
    </div>
  );
}

export default App;
