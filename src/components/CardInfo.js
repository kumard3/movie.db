import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/cardinfo.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import black from "../assets/Rectangle.png";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: " 57vw",
    marginLeft: "25%",
    backgroundColor:"black"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CardInfo = ({ allData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);
  if (anime) {
    return (
      <div className="cardinfo">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Link to="/">
                <button className="cardinfo__button" type="button" onClick={handleClose}>
                  cross
                </button>
              </Link>
              <iframe
              className="cardinfo__iframe"
                src={`https://fsapi.xyz/tmdb-movie/${anime.id}`}
                frameborder="0"
                scrolling="no"
                allowfullscreen="allowfullscreen"
              />

              <div className="cardinfo__wrapper">
                <h2>{anime.title} </h2>
                <p>{anime.overview}</p>
              </div>

            </div>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
