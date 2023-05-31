import { Component } from "../core/rami";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline"); //headline class추가
    this.el.innerHTML = /* html */ `
        <h1>
            <span>OMDb API</span><br>
            THE OPEN<br>
            MOVIE DATABASE
        </h1>
        <p>
        The OMDb API is a RESTful web service to obtain movie information,
        all content and images on the site are contributed and maintained by our users.<br>
        If you find this service useful, please consider making a one-time donation or become a patron.
        </p>
        `;
  }
}
