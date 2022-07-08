import React from "react";

const FavoriteList = ({ favorite, removeFavoriteMovie }) => {
  return (
    <div id="favs"
      className="movie"
      key={favorite.imdbID}
      onClick={() => removeFavoriteMovie(favorite)}
    >
      <div className="movie-inner">
        <div className="movie-img-cont">
          <img
            src={
              favorite.Poster !== "N/A"
                ? favorite.Poster
                : "https://source.unsplash.com/300x416"
            }
            alt={favorite.Type}
            className="movie-img"
          />
        </div>
        <div className="movie-texts">
          <p>{favorite.Title}</p>
          <p>{favorite.Year}</p>
        </div>
      </div>
      <div className="overlay">
        <div className="overlay-iner">
          <h2>Remove from your favorites</h2>
          <i className="fa-solid fa-heart-circle-minus heartIcon"></i>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
