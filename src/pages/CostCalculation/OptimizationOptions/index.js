import React, { Component } from "react";
import Compute from "./Compute";
import Storage from "./Storage";
import Network from "./Network";
import Managed from "./Managed";
import data from "../data.json";
import calculateTotalCost from "../costCalculator";

const componentNames = {
  Compute: Compute,
  Storage: Storage,
  Network: Network,
  Managed: Managed,
};

class OptimizationOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOptimzeTab: 0,
      totalCost: 0,
    };
  }

  componentDidMount = () => {
    const components = data.startingScenario.costComponents;
    let totalCost = 0;
    components.map((item) => {
      totalCost += Number(
        calculateTotalCost(item, item.component.toLowerCase())
      );
    });
    this.setState({ totalCost: totalCost });
  };

  setCurrentTab = (tabNumber) => {
    this.props.setCurrentOptimzationTab(tabNumber);
  };

  setNewCosts = (data, cost) => {
    this.setState({ totalCost: cost });
    if (data === "totalCost") {
      this.props.calculateNewCosts("totalCost", cost);
    } else {
      this.props.calculateNewCosts(data, cost);
    }
  };

  renderTabs = (components) => {
    const { totalCost } = this.state;
    const tabsNavJSX = [];
    const tabsJSX = [];
    components.map((item, index) => {
      if (item.component !== "Other") {
        tabsNavJSX.push(
          <li className="nav-item">
            <a
              className={`nav-link ${
                this.props.currentOptimzeTab === index ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href="#"
              onClick={() => this.setCurrentTab(index)}
            >
              {item.title}
            </a>
          </li>
        );

        const CurrentComponent = componentNames[item.component];
        tabsJSX.push(
          <div
            className={
              this.props.currentOptimzeTab === index
                ? "tab-pane active"
                : "tab-pane"
            }
          >
            <CurrentComponent
              setCurrentTab={this.setCurrentTab}
              data={item}
              totalCost={totalCost}
              setFinalImpactTabActive={this.props.setFinalImpactTabActive}
              setNewCosts={this.setNewCosts}
              setCalcUnits={this.props.setCalcUnits}
            />
          </div>
        );
      }
    });
    return (
      <div className="optimization-option-tab">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="nav nav-pills" role="tablist">
            {tabsNavJSX}
          </ul>
          <button type="button" class="next-btn btn btn-primary">
            Next
          </button>
        </div>
        <div className="tab-content">{tabsJSX}</div>
      </div>
    );
  };

  render() {
    const components = data.startingScenario.costComponents;
    const { totalCost } = this.state;
    return (
      <>
        <div className="content pb-3">
          <p>
            Make optimization selections across compute, storage, network, and
            managed database to adjust your cloud application costs.
          </p>
          <p>
            <small>
              (A note on cloud prices shown: Cloud pricing is dynamic and
              changes frequently; prices in this interactive are for
              illustrative purposes only, to show the relative impact of
              different optimization options.)
            </small>
          </p>
        </div>
        {totalCost ? this.renderTabs(components) : <></>}
      </>
    );
  }
}

export default OptimizationOptions;
