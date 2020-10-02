import { useState, useEffect } from "react";
import axios from "../../Services/axios";
import HomePageRequests from "../../Services/HomePageService";

export const useHomePageFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [heroImageData, setheroImageData] = useState("");

  const fetchMovies = async (endpoints, searchFlag = false) => {
    setLoading(true);
    const response = await axios.get(endpoints);
    let { status } = response;
    if (status === 200) {
      let {
        data: { results, page },
      } = response;
      if (!heroImageData) {
        let randomNumber = Math.floor(Math.random() * results.length) + 1;
        setheroImageData(results[randomNumber]);
      }
      if (!searchFlag) {
        results.forEach((item) => {
          movies.push(item);
        });
        setMovies(movies);
      } else {
        setMovies(results);
      }
      setPage(page);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(HomePageRequests.fetchingMovies);
  }, []);

  return [{ movies, loading, page, heroImageData }, fetchMovies];
};
