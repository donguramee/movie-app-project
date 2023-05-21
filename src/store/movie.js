import { Store } from "../core/rami";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const res = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=c7be1e86&s=${store.state.searchText}&page=${page}` //APIkey확인 잘못 넣을 시 작동안함
  );
  const { Search } = await res.json();
  store.state.movies = [...store.state.movies, ...Search];
};