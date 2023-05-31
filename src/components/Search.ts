import { Component } from "../core/rami";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
        <input 
        value="${movieStore.state.searchText}"
        placeholder="Enter the movie title to search!" />
        <button class="btn btn-primary">
            Search!
        </button>
        `;

    const inputEl = this.el.querySelector("input"); //옵셔널체이닝이 없이 확신한다면 단언해도 괜찮음 'as HTMLDivElement'
    inputEl?.addEventListener("input", () => {
      //옵셔널체이닝 사용 가능
      movieStore.state.searchText = inputEl.value;
    });
    inputEl?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector(".btn");
    btnEl?.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
