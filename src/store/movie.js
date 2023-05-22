import { Store } from "../core/rami";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c7be1e86&s=${store.state.searchText}&page=${page}` //APIkey확인 잘못 넣을 시 작동안함
    );
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log("searchMovies error:", error);
  } finally {
    store.state.loading = false; //어떠한 경우에도 실행되어야 함
  }
};
export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c7be1e86&i=${id}&plot=full`
    );
    store.state.movie = await res.json();
  } catch (error) {
    console.log("getMovieDetail error:", error);
  }
};
