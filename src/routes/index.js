import { createRouter } from "../core/rami";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound }, //페이지를 찾을때 내용을 제일 마지막에 적어줘야 모두가 일치하는지 확인후 없을 시 notfound 반환 *=모든게 일치하지 않는다
]);
