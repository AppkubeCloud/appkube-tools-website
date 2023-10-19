import React, { Component } from "react";
import StartingScenario from "./StartingScenario";
import OptimizationOptions from "./OptimizationOptions";
import FinalImpact from "./FinalImpact";
import Header from "./Header";
import ActualVsNonActual from "./ActualVsNonActual";
import Footer from "./Footer";
import data from "./data.json";
import calculateTotalCost from "./costCalculator";
import cloudCostImg from "../../img/cloud-img.png";
import Architectural from "./Architectural";

class CostCalculationTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      initCalculations: {},
      newCalculations: {},
      currentOptimzeTab: 0,
      componentsData: JSON.parse(
        JSON.stringify(data.startingScenario.costComponents)
      ),
      modifiedComponentsData: [],
      activeOptimizations: {},
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
    this.calculateInitialCosts();
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

  setCurrentOptimzationTab = (tabNumber) => {
    this.setState({ currentOptimzeTab: tabNumber });
  };

  setInitCostCalculations = (calcData) => {
    this.setState({ initCostCalculations: calcData });
  };

  calculateInitialCosts = () => {
    const { componentsData } = this.state;
    let initCalcs = {};
    let initTotalCost = 0;
    componentsData.map((item) => {
      initCalcs = {
        ...initCalcs,
        [item.component.toLowerCase()]: calculateTotalCost(
          item,
          item.component.toLowerCase()
        ),
      };
    });

    for (const property in initCalcs) {
      initTotalCost += initCalcs[property];
    }
    initCalcs = { ...initCalcs, totalCost: initTotalCost };
    this.setState({
      initCalculations: JSON.parse(JSON.stringify(initCalcs)),
      newCalculations: JSON.parse(JSON.stringify(initCalcs)),
    });
  };

  calculateNewCosts = (data, cost) => {
    let { newCalculations, componentsData, modifiedComponentsData } =
      this.state;
    if (data === "totalCost") {
      newCalculations[data] = cost;
    } else {
      newCalculations[data.component.toLowerCase()] = cost;
      if (modifiedComponentsData.length) {
        modifiedComponentsData = modifiedComponentsData.map((item) => {
          if (item.component === data.component) {
            item = data;
            return item;
          }
          return item;
        });
      } else {
        modifiedComponentsData = componentsData.map((item) => {
          if (item.component === data.component) {
            item = data;
            return item;
          }
          return item;
        });
      }
      this.setState({ modifiedComponentsData });
    }
    this.setState({ newCalculations });
  };

  setCalcUnits = (allOptimzations, currentOptimization, enabled, component) => {
    let { activeOptimizations } = this.state;
    if (enabled) {
      if (
        Object.keys(activeOptimizations).length &&
        activeOptimizations[component]
      ) {
        activeOptimizations[component][currentOptimization] =
          allOptimzations[currentOptimization];
      } else {
        activeOptimizations = {
          ...activeOptimizations,
          [component]: {
            [currentOptimization]: allOptimzations[currentOptimization],
          },
        };
      }
    } else {
      if (Object.keys(activeOptimizations).length) {
        delete activeOptimizations[component][currentOptimization];
      }
    }
    this.setState({ activeOptimizations });
  };

  render() {
    const {
      currentTab,
      initCalculations,
      newCalculations,
      currentOptimzeTab,
      modifiedComponentsData,
      activeOptimizations,
    } = this.state;
    return (
      <>
        <Header />
        <div className="cost-main-container">
          <div className="main-banner">
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
                      FinOps capabilities are in place to continuously manage
                      and optimize costs.1
                    </p>
                    <p>
                      This cloud cost-optimization simulator details the range
                      of levers that can be used to substantially reduce costs
                      for one illustrative scenario of an application on the
                      cloud.2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      width="25"
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
                      width="25"
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
                          width="25"
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
                      width="25"
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
                          width="25"
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
                    href="#Architectural"
                    onClick={() => this.setCurrentTab(4)}
                  >
                    Architectural
                    <svg
                      preserveAspectRatio="none"
                      width="25"
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
                    onClick={() => this.setCurrentTab(5)}
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
                  <StartingScenario initCalculations={initCalculations} />
                </div>
                <div
                  id="OptimizationOptions"
                  className={currentTab === 2 ? "tab-pane active" : "tab-pane"}
                >
                  <OptimizationOptions
                    setFinalImpactTabActive={() => {
                      this.setCurrentTab(5);
                    }}
                    calculateNewCosts={this.calculateNewCosts}
                    currentOptimzeTab={currentOptimzeTab}
                    setCurrentOptimzationTab={this.setCurrentOptimzationTab}
                    setCalcUnits={this.setCalcUnits}
                    activeOptimizations={activeOptimizations}
                  />
                </div>
                <div
                  id="ActulVsNonActual"
                  className={currentTab === 3 ? "tab-pane active" : "tab-pane"}
                >
                  <ActualVsNonActual />
                </div>
                <div
                  id="Architectural"
                  className={currentTab === 4 ? "tab-pane active" : "tab-pane"}
                >
                  <Architectural />
                </div>
                <div
                  id="FinalImpact"
                  className={currentTab === 5 ? "tab-pane active" : "tab-pane"}
                >
                  <FinalImpact
                    initCalculations={initCalculations}
                    newCalculations={newCalculations}
                    setCurrentTab={this.setCurrentTab}
                    setCurrentOptimzationTab={this.setCurrentOptimzationTab}
                    modifiedComponentsData={modifiedComponentsData}
                    activeOptimizations={this.state.activeOptimizations}
                  />
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
