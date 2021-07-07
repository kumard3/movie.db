import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CardInfo = ({ allData }) => {
  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);
  if (anime) {
    return (
      <div className="card__info">
        <img
          className="cardinfo__img"
          src={`https://image.tmdb.org/t/p/w500${anime.backdrop_path}`}
          alt="card-img"
        />
        <div className="cardinfo__wrapper">
          <h2>{anime.title} </h2>
          <div className="genes">
            <span> Adventure </span>
            <span> Drama </span>
            <span> Adventure </span>
          </div>
          <p>{anime.overview}</p>
        </div>
        <iframe
          src={`https://fsapi.xyz//tv-tmdb/${anime.id}-1-1`}
          frameborder="0"
          scrolling="no"
          allowfullscreen="allowfullscreen"
        />{" "}
        <div className="bottom___section">
          <button className="bottom___button">
            <h3>Watch Now </h3>
          </button>
          <button className="bottom___button2">
            <h3>Save </h3>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
