import React from "react";
import "./MovieList.css";

const MovieList = ({ movie , handleFavoritesClick}) => {
  return (
    <div className="movie" onClick={() => handleFavoritesClick(movie)}  id="browser">
        <div className="movie-inner">
          <div className="movie-img-cont">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://source.unsplash.com/300x416"} alt={movie.Type} className="movie-img" />
          </div>
          <div className="movie-texts">
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        </div>
        <div className="overlay">
          <div className="overlay-iner">
                       <h2>Add to your favorites</h2> 
              <i className="fa-solid fa-heart-circle-plus heartIcon"></i>
          </div>
   
      </div>
    </div>
  );
};

export default MovieList;
