import { Component } from "../core/rami";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      // movieStore.state.page
      // movieStore.state.pageMax
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove("hide")
        : this.el.classList.add("hide");
      //   if (pageMax > page) {
      //     this.el.classList.remove("hide");
      //   } else {
      //     this.el.classList.add("hide");
      //   }
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more..";

    this.el.addEventListener("click", async () => {
      this.el.classList.add("hide");
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
