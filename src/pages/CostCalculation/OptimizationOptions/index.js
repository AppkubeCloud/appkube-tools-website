import React, { Component } from "react";
import Compute from "./Compute";
import Storage from "./Storage";
import Network from "./Network";
import Managed from "./Managed";

class OptimizationOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
    };
  }

  setCurrentTab = (tabNumber) => {
    this.setState({ currentTab: tabNumber });
  };

  render() {
    return (
      <>
        <div className="content pb-3">
          <p>
            Make optimization selections across compute, storage, network, and
            managed database to adjust your cloud application costs.
          </p>
          <p>
            <small>
              (A note on cloud prices shown: Cloud pricing is dynamic and changes
              frequently; prices in this interactive are for illustrative purposes
              only, to show the relative impact of different optimization options.)
            </small>
          </p>
        </div>
        <div className="optimization-option-tab">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${this.state.currentTab === 1 ? "active" : ""}`}
                data-bs-toggle="pill"
                href="#Compute"
                onClick={() => this.setCurrentTab(1)}
              >
                Compute
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${this.state.currentTab === 2 ? "active" : ""}`}
                data-bs-toggle="pill"
                href="#Storage"
                onClick={() => this.setCurrentTab(2)}
              >
                Storage
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${this.state.currentTab === 3 ? "active" : ""}`}
                data-bs-toggle="pill"
                href="#Network"
                onClick={() => this.setCurrentTab(3)}
              >
                Network
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${this.state.currentTab === 4 ? "active" : ""}`}
                data-bs-toggle="pill"
                href="#ManagedDatabase"
                onClick={() => this.setCurrentTab(4)}
              >
                Managed database
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              id="Compute"
              className={this.state.currentTab === 1 ? "tab-pane active" : "tab-pane"}
            >
              <Compute setCurrentStep={this.setCurrentTab} />
            </div>
            <div
              id="Storage"
              className={this.state.currentTab === 2 ? "tab-pane active" : "tab-pane"}
            >
              <Storage setCurrentStep={this.setCurrentTab} />
            </div>
            <div
              id="Network"
              className={this.state.currentTab === 3 ? "tab-pane active" : "tab-pane"}
            >
              <Network setCurrentStep={this.setCurrentTab} />
            </div>
            <div
              id="ManagedDatabase"
              className={this.state.currentTab === 4 ? "tab-pane active" : "tab-pane"}
            >
              <Managed setCurrentStep={this.props.setFinelImpact} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OptimizationOptions;
