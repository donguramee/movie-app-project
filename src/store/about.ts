import { Store } from "../core/rami";

interface State {
  photo: string;
  name: string;
  email: string;
  github: string;
  repository: string;
  phone: string;
}

export default new Store<State>({
  photo:
    "https://lh3.googleusercontent.com/a/AAcHTtfHUXjYyvZYiCWBiCPoeealyOL3devNNh8BRyoj=s288-c-no",
  name: "DonguRame / ParkJaeWoong",
  email: "sanulim94@gmail.com",
  github: "https://github.com/donguramee",
  repository: "https://github.com/donguramee/MOVIE-APP",
  phone: "010-2944-3793",
});
