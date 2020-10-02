import { API_kEY } from "./config";

const HomePageRequests = {
  fetchingMovies: `movie/popular?api_key=${API_kEY}`,
  searchMovies: `search/movie?api_key=${API_kEY}&query=`,
};

export default HomePageRequests;
