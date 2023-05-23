import { Component } from "../core/rami";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988", //겨울왕국2를 기본으로 출력
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
            <a href="#/" class="logo">
                <span>OMDbAPI</span>.COM
            </a>
            <nav>
                <ul>
                    ${this.state.menus
                      .map((menu) => {
                        const href = menu.href.split("?")[0]; //메뉴라는 객체데이터에서 쿼리스트링의 내용은 제거하고 결과를 보관
                        const hash = location.hash.split("?")[0]; //현재페이지에서 쿼리스트링 잠시 제거
                        const isActive = href === hash; //제거한 값이 같으면 isActive 실행
                        return /* html */ `
                            <li>
                                <a 
                                class="${isActive ? "active" : ""}"
                                href="${menu.href}">
                                ${menu.name}
                                </a>
                            </li>
                        `;
                      })
                      .join("")}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="https://heropy.blog/css/images/logo.png" alt="User">
            </a>
        `;
  }
}
