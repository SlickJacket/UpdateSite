import React, { Component, Fragment } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import profilePhoto from "./profile.png";
import github from "./Github.png";
import ig from "./instagram.png";
import linkedin from "./linkedin.png";

class AboutMe extends Component {
  state = {};

  handleMenuDrop = e => {
    e.preventDefault();

    let menu = document.getElementById("mobile-flex-nav");
    let hammy = document.getElementById("hamburger");

    if (menu.style.display === "flex") {
      menu.style.display = "none";
      hammy.style.color = "#fffafa";
    } else {
      menu.style.display = "flex";
      hammy.style.color = "#fffafa46";
    }
  };
  render() {
    return (
      <Fragment>
        <div class="homeWrapper aboutWrapper">
          <div id="navBar">
            <h1 id="initialsNav">BB</h1>
            <div id="mainNavIcons">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                  />
                </svg>
              </Link>
              <Link to="about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </Link>
              <Link to="skills">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z"
                  />
                </svg>
              </Link>
              <Link to="portfolio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  />
                </svg>
              </Link>
              <Link to="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"
                  />
                </svg>
              </Link>
            </div>

            <div id="socialIcons">
              <a
                href="https://github.com/SlickJacket"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img src={github} alt="github account" id="navSocialLinks" />
              </a>
              <a
                href="https://www.instagram.com/bobbybuffaloboy/"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img src={ig} alt="instagram account" id="navSocialLinks" />
              </a>
              <a
                href="https://www.linkedin.com/in/bobby-buffaloboy-4ba4ba79/"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img
                  src={linkedin}
                  alt="linkedin account"
                  id="navSocialLinks"
                />
              </a>
            </div>
            <h2
              className="hamburger"
              id="hamburger"
              onClick={this.handleMenuDrop}
            >
              &#9776; Menu
            </h2>
          </div>
          <div id="mobile-flex-nav">
            <div id="mainNavIcons">
              <Link to="/" className="navlinks homeLink">
                <p>HOME</p>
              </Link>
              <Link to="about" className="navlinks aboutLink">
                <p>ABOUT</p>
              </Link>
              <Link to="skills" className="navlinks skillsLink">
                <p>SKILLS</p>
              </Link>
              <Link to="portfolio" className="navlinks portLink">
                <p>PORTFOLIO</p>
              </Link>
              <Link to="contact" className="navlinks contactLink">
                <p>CONTACT</p>
              </Link>

              <div class="mobileSocialIcons">
                <a
                  href="https://github.com/SlickJacket"
                  style={{
                    zIndex: "100000000"
                  }}
                >
                  <svg
                    id="Bold"
                    enable-background="new 0 0 24 24"
                    height="40"
                    viewBox="0 0 24 24"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bobbybuffaloboy/"
                  style={{
                    zIndex: "100000000"
                  }}
                >
                  <svg
                    height="40px"
                    width="40px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
                    <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
                    <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/bobby-buffaloboy-4ba4ba79/"
                  style={{
                    zIndex: "100000000"
                  }}
                >
                  <svg
                    height="40px"
                    width="40px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div id="aboutMeDiv">
            <img src={profilePhoto} alt="Bobby BuffaloBoy" id="profilePhoto" />
            <div id="aboutMeContent">
              <div className="quoteContent">
              <h2 id="quote">“I am, above all, what excites me.”</h2>
              <h1 id="nameOfQuote">-Sylvan Tompkins</h1>
              </div>
              <p id="aboutMyContent">
                What makes this quote so powerful, is the force of connection I
                have to it. If I find something interesting, I will immediately
                form an obsession, then, that obsession grows exponentially.
                Whether that be learning how to brew my own moonshine, to
                performing in a metal band, designing and hand carving rings,
                learning the entire adobe suite, to becoming a Fullstack
                developer.
              </p>
              <p id="aboutMyContent">
                Yes, you can focus all your life on one thing, but I believe
                it's the accumulation of several fields of study that grants one
                the skill to see what others do not. Also, I believe it’s just a
                much more fulfilling life. You only live once, so have fun and
                make the best out of it.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutMe;
