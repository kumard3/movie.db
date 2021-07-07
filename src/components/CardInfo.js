import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import '../styles/cardinfo.scss'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex:100000,
    position:"relative"
    

  },
};

const CardInfo = ({ allData }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);
  if (anime) {
    return (
      <div className="card__info">
  
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
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
            src={`https://fsapi.xyz/tmdb-movie/${anime.id}`}
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
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
