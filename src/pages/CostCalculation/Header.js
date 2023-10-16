import React, { Component } from "react";
import navbarLogo from "../../img/navbar-logo.png";
import cloudCostImg from "../../img/cloud-img.png";
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
        <div className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 justify-content-end d-flex">
                <img src={navbarLogo} alt="" />
              </div>
              <div className="col-md-5 justify-content-end d-flex">
                <div className="navbar">
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 justify-content-center d-flex">
                <button type="button" class="btn btn-primary">
                  Free Trail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="optimization-part">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <img src={cloudCostImg} alt="" className="cost-img" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="cost-contain">
                  <span>Cloud cost-optimization simulator</span>
                  <p>
                    Cloud computing offers the greatest benefits when strong
                    FinOps capabilities are in place to continuously manage and
                    optimize costs.1
                  </p>
                  <p>
                    This cloud cost-optimization simulator details the range of
                    levers that can be used to substantially reduce costs for
                    one illustrative scenario of an application on the cloud.2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
