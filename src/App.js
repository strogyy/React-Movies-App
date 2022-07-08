import React, { useEffect, useState } from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import SearchBox from "./Components/SearchBox/SearchBox";
import MovieList from "./Components/MovieList/MovieList";
import FavoriteList from "./Components/FavoriteList/FavoriteList";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState(null);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=3e1c3e7a`)
      .then((res) => res.json())
      .then((data) => {
        if (!(data === undefined || null)) {
          setMovies(data.Search);
        }
      });
  }, [searchValue]);


  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("movie-app-favorites")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);


  const settingSearchValue = (event) => {
    setSearchValue(event.target.value);
  };


  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favorites", JSON.stringify(items));
  };


  const addFavoriteMovie = (movie) => {
    const lnvList = favorites.filter((favorite) => {
      return !(favorite.imdbID === movie.imdbID);
    });
    const newFavoriteList = [...lnvList, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };


  const removeFavoriteMovie = (movie) => {
    const lastFavouriteList = favorites.filter(
      (favorite) => !(favorite.imdbID === movie.imdbID)
    );
    setFavorites(lastFavouriteList);
    saveToLocalStorage(lastFavouriteList);
  };

  return (
    <div className="app">
      <div className="container">

        <PageHeader title="Movie Browser" link1="Browser" link2="Favorites" />


        <SearchBox
          searchValue={searchValue}
          settingSearchValue={settingSearchValue}
          placeholder="Type to search a Movie..."
        />


        <PageHeader title="Movies" icon={"fa-solid fa-video"} />

        {searchValue === "" ? (
          <div className="notMovie">
            <i class="fa-solid fa-magnifying-glass nMovieIcon"></i>
          </div>
        ) : (
          <div className="movies" >
            {movies &&
              movies.map((movie) => {
                return (
                  <MovieList
                    movie={movie}
                    key={movie.imdbID}
                    handleFavoritesClick={addFavoriteMovie}
                  />
                );
              })}
          </div>
        )}


        <PageHeader title={"Favorites"} icon={"fa-solid fa-heart"} />


        {favorites.length === 0 ? (
          <div className="notMovie">
            <i class="fa-solid fa-heart redHeart"></i>
          </div>
        ) : (
          <div className="movies">
            {favorites.map((favorite) => {
              return (
                <FavoriteList
                  favorite={favorite}
                  removeFavoriteMovie={removeFavoriteMovie}
                />
              );
            })}
          </div>
        )}


      </div>
    </div>
  );
};

export default App;
