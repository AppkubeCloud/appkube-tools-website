import React, { Component } from "react";
import navbarLogo from "../../img/navbar-logo.png";
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
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    if (scrollTop >= 600) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  };

  progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = totalScroll / windowHeight;

    this.setState({ scroll });
  };

  render() {
    const { scroll } = this.state;

    return (
      <>
        <div className="header-sticky">
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
        <div id="progressBarContainer">
          <div
            id="progressBar"
            style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
          />
        </div>
        <div className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 justify-content-center d-flex">
                <img src={navbarLogo} alt="" />
              </div>
              <div className="col-md-6 justify-content-center d-flex">
                <div className="navbar">
                  <ul>
                    <li className="active">Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 justify-content-center d-flex">
                <button type="button" class="btn btn-primary">
                  Free Trail
                </button>
              </div>
            </div>
          </div>
        </div>
     
      </>
    );
  }
}

export default Header;
