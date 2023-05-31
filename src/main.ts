import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root?.append(new App().el); // 선택적 체이닝으로 root의 값이 있는경우에만 동작하게 만듬

router();
