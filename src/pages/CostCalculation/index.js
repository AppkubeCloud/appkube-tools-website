import React, { Component } from "react";
import StartingScenario from "./StartingScenario";
import OptimizationOptions from "./OptimizationOptions";
import FinalImpact from "./FinalImpact";
import Header from "./Header";
import ActualVsNonActual from "./ActualVsNonActual";
import Footer from "./Footer";
class CostCalculationTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
  }

  isSticky = () => {
    const tabs = document.querySelector(".tabs-container");
    const tabsScrollTop = window.scrollY;
    if (tabsScrollTop >= 600) {
      tabs.classList.add("tabs-sticky");
    } else {
      tabs.classList.remove("tabs-sticky");
    }
  };

  setCurrentTab = (tabNumber) => {
    this.setState({ currentTab: tabNumber });
  };

  render() {
    const { currentTab } = this.state;

    return (
      <>
        <Header />
        <div className="cost-main-container">
          <div className="container">
            <div className="tabs-container">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className={
                      currentTab === 1 ? "nav-link active" : "nav-link"
                    }
                    data-bs-toggle="pill"
                    href="#StartingScenario"
                    onClick={() => this.setCurrentTab(1)}
                  >
                    Starting scenario
                    <svg
                      preserveAspectRatio="none"
                      width="30"
                      height="60"
                      viewBox="0 0 30 60"
                      fill="none"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="60"
                      >
                        <rect width="30" height="60" fill="#C4C4C4"></rect>
                      </mask>
                      <g mask="url(#mask0)">
                        <rect
                          width="30"
                          height="60"
                          id="background"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M0 0L27 29.5L0 60V0Z"
                          id="block"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M-0.5 -2L28.5 29.5L0.5 60.5"
                          id="arrow"
                          stroke="currentColor"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      currentTab === 2 ? "nav-link active" : "nav-link"
                    }
                    data-bs-toggle="pill"
                    href="#OptimizationOptions"
                    onClick={() => this.setCurrentTab(2)}
                  >
                    Optimization options
                    <svg
                      preserveAspectRatio="none"
                      width="30"
                      height="60"
                      viewBox="0 0 30 60"
                      fill="none"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="60"
                      >
                        <rect width="30" height="60" fill="#C4C4C4"></rect>
                      </mask>
                      <g mask="url(#mask0)">
                        <rect
                          width="30"
                          height="60"
                          id="background"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M0 0L27 29.5L0 60V0Z"
                          id="block"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M-0.5 -2L28.5 29.5L0.5 60.5"
                          id="arrow"
                          stroke="currentColor"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      currentTab === 3 ? "nav-link active" : "nav-link"
                    }
                    data-bs-toggle="pill"
                    href="#ActulVsNonActual"
                    onClick={() => this.setCurrentTab(3)}
                  >
                    Actual vs Non Actual
                    <svg
                      preserveAspectRatio="none"
                      width="30"
                      height="60"
                      viewBox="0 0 30 60"
                      fill="none"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="60"
                      >
                        <rect width="30" height="60" fill="#C4C4C4"></rect>
                      </mask>
                      <g mask="url(#mask0)">
                        <rect
                          width="30"
                          height="60"
                          id="background"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M0 0L27 29.5L0 60V0Z"
                          id="block"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M-0.5 -2L28.5 29.5L0.5 60.5"
                          id="arrow"
                          stroke="currentColor"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      currentTab === 4 ? "nav-link active" : "nav-link"
                    }
                    data-bs-toggle="pill"
                    href="#ActulVsNonActual"
                    onClick={() => this.setCurrentTab(3)}
                  >
                    Actual vs Non Actual
                    <svg
                      preserveAspectRatio="none"
                      width="30"
                      height="60"
                      viewBox="0 0 30 60"
                      fill="none"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="60"
                      >
                        <rect width="30" height="60" fill="#C4C4C4"></rect>
                      </mask>
                      <g mask="url(#mask0)">
                        <rect
                          width="30"
                          height="60"
                          id="background"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M0 0L27 29.5L0 60V0Z"
                          id="block"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M-0.5 -2L28.5 29.5L0.5 60.5"
                          id="arrow"
                          stroke="currentColor"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      currentTab === 5 ? "nav-link active" : "nav-link"
                    }
                    data-bs-toggle="pill"
                    href="#FinalImpact"
                    onClick={() => this.setCurrentTab(3)}
                  >
                    Final impact
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="StartingScenario"
                  className={currentTab === 1 ? "tab-pane active" : "tab-pane"}
                >
                  <StartingScenario />
                </div>

                <div
                  id="OptimizationOptions"
                  className={currentTab === 2 ? "tab-pane active" : "tab-pane"}
                >
                  <OptimizationOptions
                    setFinalImpactTabActive={() => {
                      this.setCurrentTab(3);
                    }}
                  />
                </div>
                <div
                  id="ActulVsNonActual"
                  className={currentTab === 3 ? "tab-pane active" : "tab-pane"}
                >
                  <ActualVsNonActual />
                </div>
                <div
                  id="ActulVsNonActual"
                  className={currentTab === 5 ? "tab-pane active" : "tab-pane"}
                >
                  <ActualVsNonActual />
                </div>
                <div
                  id="FinalImpact"
                  className={currentTab === 5 ? "tab-pane active" : "tab-pane"}
                >
                  <FinalImpact />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CostCalculationTemplate;
