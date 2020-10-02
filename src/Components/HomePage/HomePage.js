import React, { useState, useEffect } from "react";

import SearchInput from "../SharedComponents/SearchInput/SearchInput";
import Header from "../Header/Header";
import Banner from "../Header/Banner";
import MovieThumb from "./MovieThumb/MovieThumb";

import { useHomePageFetch } from "../hooks/useHomePageFetch";
import Spinner from "../SharedComponents/Spinner";
import HomePageRow from "./HomePageRow/HomePageRow";
import LoadMoreButton from "./LoadMoreMovieButton/LoadMoreButton";

import HomePageRequests from "../../Services/HomePageService";

function HomePage() {
  const [
    { movies, loading, page, heroImageData },
    fetchMovies,
  ] = useHomePageFetch();
  const [searchItem, setsearchItem] = useState("");
  function loadMoreMovie() {
    fetchMovies(`${HomePageRequests.fetchingMovies}&page=${page + 1}`);
  }

  const searchMovieData = (searchItem) => {
    setsearchItem(searchItem);
    fetchMovies(
      `${HomePageRequests.searchMovies}${searchItem}&page=${page + 1}`,
      true
    );
  };

  return (
    <React.Fragment>
      <Header />
      <Banner bannerData={heroImageData} />
      <SearchInput searchMovie={searchMovieData} />
      {loading ? <Spinner /> : null}
      <HomePageRow headerTitle={searchItem ? "Search Result" : "Popular Movie"}>
        {movies.map((movieItem) => (
          <MovieThumb
            movieDetails={movieItem}
            key={movieItem.id}
            clickable={true}
          />
        ))}
      </HomePageRow>
      {movies.length ? (
        <div className="loadMore-button">
          <LoadMoreButton buttonText="Load more" clickEvent={loadMoreMovie} />
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default HomePage;
