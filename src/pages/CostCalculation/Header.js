import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
    window.addEventListener("scroll", this.progressBarHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
    window.removeEventListener("scroll", this.progressBarHandler);
  }

  isSticky = () => {
    const header = document.querySelector(".header-container");
    const scrollTop = window.scrollY;
    if (scrollTop >= 50) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  };

  progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = totalScroll / windowHeight;

    this.setState({ scroll });
  };

  render() {
    const { scroll } = this.state;

    return (
      <>
        <div className="header-container">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12">
                <div className="d-none d-md-block logo-text">
                  Cloud cost-optimization simulator
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center w-100 sharetoolbar">
                  <ul>
                    <li>
                      <button type="button" className="btn">
                        <i className="fa-solid fa-share-nodes"></i>
                        <span>Share</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="btn">
                        <i className="fa-regular fa-bookmark"></i>
                        <span>Save</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="progress"></div>
        <div id="progressBarContainer">
          <div
            id="progressBar"
            style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
          />
        </div>
      </>
    );
  }
}

export default Header;
