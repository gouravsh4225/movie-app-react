import React from "react";
import { BASE_IMAGE_URL, BACKDROP_SIZE } from "../../../Services/config";
import "./MovieThumb.css";

const MovieThumbClickAble = ({ movieThumbUrl, onImageClick }) => {
  return (
    <img
      src={movieThumbUrl}
      onClick={onImageClick}
      alt="thumb"
      className="movie-image"
      loading="lazy"
    />
  );
};
const MovieThumbView = ({ movieThumbUrl }) => {
  return (
    <img
      src={movieThumbUrl}
      alt="thumb"
      loading="lazy"
      className="movie-image"
    />
  );
};

function MovieThumb({ clickable, movieDetails }) {
  function onMovieThumbClicked() {
    console.log("hey--");
  }
  let { poster_path } = movieDetails;
  const movieThumbUrl = `${BASE_IMAGE_URL}${BACKDROP_SIZE}${poster_path}`;
  return (
    <div className="movie-container">
      {clickable ? (
        <MovieThumbClickAble
          onImageClick={(e) => onMovieThumbClicked}
          movieThumbUrl={movieThumbUrl}
        />
      ) : (
        <MovieThumbView movieThumbUrl={movieThumbUrl} />
      )}
    </div>
  );
}
export default MovieThumb;
