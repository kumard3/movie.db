import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/card.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div class="card">
    <div class="card__wrapper">
        {movies.map((ani) => {
          return (
            <div className="card__data">
              <div className="item">
                {" "}
                <img
                  className="card__img"
                  src={`https://image.tmdb.org/t/p/original/${ani.backdrop_path}`}
                  alt={ani.title}
                />
              </div>
            </div>
            // <div class="tile">
            //   <div class="tile__media">
            //     <img
            //       class="tile__img"
            //       src={`https://image.tmdb.org/t/p/original/${ani.backdrop_path}`}
            //       alt=""
            //     />
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
