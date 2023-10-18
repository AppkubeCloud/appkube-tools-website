import React, { Component } from "react";
import logo from "../../img/navbar-logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="w-75 mx-auto">
          <div className="container-fluid">
            <div className="menu-list">
              <div className="row ">
                <div className="col-md-5 align-items-center">
                  <img src={logo} alt="" />
                  <div className="subscribe-info">
                    <div className="container">
                      <span>Subscribe to our newsletter</span>
                      <input
                        className="email-input"
                        placeholder="Enter your email"
                      />

                      <button type="button" class="btn btn-primary">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-block menu">
                    <label>Pages</label>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Blog post</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Pricing single</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-block menu">
                    <label></label>
                    <ul>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Careers single</a>
                      </li>
                      <li>
                        <a href="#">Request a demo</a>
                      </li>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Sign Up</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="d-block menu">
                    <label>Utility Pages</label>
                    <ul>
                      <li>
                        <a href="#">Style guide</a>
                      </li>
                      <li>
                        <a href="#">Password protected</a>
                      </li>
                      <li>
                        <a href="#">404 Not found</a>
                      </li>
                      <li>
                        <a href="#">Licenses</a>
                      </li>
                      <li>
                        <a href="#">Changelog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-details d-flex justify-content-between align-items-center">
              <span>
                Copyright © Product | Designed by <a href="#">Webocean LTD</a> -
                Powered by <a href="#">Webflow</a>
              </span>

              <div className="social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
