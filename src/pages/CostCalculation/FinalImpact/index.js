import React, { Component } from "react";
import data from "../data.json";

class FinalImpact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentsData: JSON.parse(JSON.stringify(data)),
    };
  }

  renderOptimizationButtons = (optimizations, component) => {
    const JSX = [];
    for (const property in optimizations) {
      JSX.push(
        <button
          className="btn p-0"
          onClick={() =>
            this.props.removeSelectedCalcUnits(property, component)
          }
        >
          <i className="fa-regular fa-circle-xmark"></i>
          <span className="utilize-optimization">
            {optimizations[property].title}
          </span>
        </button>
      );
    }
    return JSX;
  };

  renderOptimizationbreakdown = () => {
    const {
      initCalculations,
      newCalculations,
      modifiedComponentsData,
      activeOptimizations,
    } = this.props;
    const { componentsData } = this.state;
    const JSX = [];
    componentsData.startingScenario.costComponents.map((item, index) => {
      JSX.push(
        <div className="optimization-table mt-3">
          <div
            className="table-header"
            style={{ background: `${item.colorCode}` }}
          >
            <div className="row align-item-center">
              <div className="col-lg-3 col-4">
                <span className="optimization-title">{item.title}</span>
              </div>
              <div className="col-lg-3 col-4">
                <span>Starting scenario</span>
              </div>
              <div className="col-lg-3 col-4">
                <span>Final impact</span>
              </div>
              <div className="col-3 d-none d-lg-block">
                <span>Applied optimizations</span>
              </div>
            </div>
          </div>
          <div className="table-body">
            <div className="row mt-1">
              <div className="col-lg-3 col-4">
                <span className="name">Instances</span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="scenario-number">{item.quantity}</span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="final-impact">
                  {modifiedComponentsData.length &&
                    modifiedComponentsData[index].quantity}
                </span>
              </div>
              <div className="col-lg-3 col-4 d-none d-lg-block">
                {activeOptimizations[item.component.toLowerCase()] &&
                  this.renderOptimizationButtons(
                    activeOptimizations[item.component.toLowerCase()],
                    item.component.toLowerCase()
                  )}
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-3 col-4">
                <span className="name">Instance/hour</span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="scenario-number">
                  {item.avgPrice ? `$${item.avgPrice}` : ``}
                </span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="final-impact">
                  {modifiedComponentsData.length &&
                  modifiedComponentsData[index].avgPrice ? (
                    `$${modifiedComponentsData[index].avgPrice}`
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div className="col-lg-3 col-4 d-none d-lg-block">
                <button
                  className="btn p-0 add-optimization"
                  onClick={() => {
                    this.props.setCurrentTab(2);
                    if (item.component.toLowerCase() !== "other") {
                      this.props.setCurrentOptimzationTab(index);
                    }
                  }}
                >
                  <i className="fa-solid fa-circle-plus"></i>
                  <span>Add optimization</span>
                </button>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-3 col-4">
                <span className="name">Price/year</span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="scenario-number">
                  ${initCalculations[item.component.toLowerCase()]}
                </span>
              </div>
              <div className="col-lg-3 col-4">
                <span className="final-impact">
                  ${newCalculations[item.component.toLowerCase()]}
                </span>
              </div>
            </div>
            <div className="row mt-1 d-lg-none d-flex">
              <div className="col-12">
                <div className="d-block w-100 mt-2">
                  <strong>Applied optimizations</strong>
                  <div className="d-block w-100">
                    <button className="btn ps-0">
                      <i className="fa-regular fa-circle-xmark"></i>
                      <span className="utilize-optimization">
                        Utilize spotinstances
                      </span>
                    </button>
                  </div>
                  <div className="d-block w-100">
                    <button className="btn ps-0 add-optimization">
                      <i className="fa-solid fa-circle-plus"></i>
                      <span>Add optimization</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return JSX;
  };

  render() {
    const { initCalculations, newCalculations } = this.props;
    return (
      <>
        <div className="final-impact-content">
          <p>How your optimization choices influenced your cloud spend.</p>
          <p>
            <small>
              (A note on cloud prices shown: Cloud pricing is dynamic and
              changes frequently; the prices in this interactive are for
              illustrative purposes only, to show the relative impact of
              different optimization options.)
            </small>
          </p>
        </div>
        <div className="final-impact-part">
          <div className="d-flex align-items-center">
            <div className="impact-details">
              <span className="computer">Computer</span>
            </div>
            <div className="impact-details">
              <span className="stronge">Storage</span>
            </div>
            <div className="impact-details">
              <span className="network">Network</span>
            </div>
            <div className="impact-details">
              <span className="managed-database">Managed database</span>
            </div>
            <div className="impact-details">
              <span className="other-services">Other services</span>
            </div>
          </div>
          <div className="scenario-total">
            <span>Starting scenario: ${initCalculations.totalCost}</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="scenario-total-details">
              <span className="computer">${initCalculations.compute}</span>
            </div>
            <div className="scenario-total-details">
              <span className="stronge">${initCalculations.storage}</span>
            </div>
            <div className="scenario-total-details">
              <span className="network">${initCalculations.network}</span>
            </div>
            <div className="scenario-total-details">
              <span className="managed-database">
                ${initCalculations.managed}
              </span>
            </div>
            <div className="scenario-total-details">
              <span className="other-services">${initCalculations.other}</span>
            </div>
          </div>
          <svg
            width="100%"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <g>
              <rect x="0%" y="0" width="60%" fill="#051C2C" height="40"></rect>
              <rect x="60%" y="0" width="15%" fill="#00A9F4" height="40"></rect>
              <rect x="75%" y="0" width="5%" fill="#034B6F" height="40"></rect>
              <rect x="80%" y="0" width="10%" fill="#027AB1" height="40"></rect>
              <rect x="90%" y="0" width="10%" fill="#D0D0D0" height="40"></rect>
            </g>
            <g>
              <polygon
                points="0,40 60,40 60,60 0,60"
                fill="#051C2C"
                opacity="0.5"
              ></polygon>
              <polygon
                points="60,40 75,40 75,60 60,60"
                fill="#00A9F4"
                opacity="0.5"
              ></polygon>
              <polygon
                points="75,40 80,40 80,60 75,60"
                fill="#034B6F"
                opacity="0.5"
              ></polygon>
              <polygon
                points="80,40 90,40 87,60 80,60"
                fill="#027AB1"
                opacity="0.5"
              ></polygon>
              <polygon
                points="90,40 100,40 97,60 87,60"
                fill="#D0D0D0"
                opacity="0.5"
              ></polygon>
            </g>
            <g>
              <rect x="0%" y="60" width="60%" fill="#051C2C" height="40"></rect>
              <rect
                x="60%"
                y="60"
                width="15%"
                fill="#00A9F4"
                height="40"
              ></rect>
              <rect x="75%" y="60" width="5%" fill="#034B6F" height="40"></rect>
              <rect x="80%" y="60" width="7%" fill="#027AB1" height="40"></rect>
              <rect
                x="87%"
                y="60"
                width="10%"
                fill="#D0D0D0"
                height="40"
              ></rect>
            </g>
          </svg>
          <div className="scenario-total">
            <span>Final impact: ${newCalculations.totalCost}</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="scenario-total-details">
              <span className="computer">${newCalculations.compute}</span>
            </div>
            <div className="scenario-total-details">
              <span className="stronge">${newCalculations.storage}</span>
            </div>
            <div className="scenario-total-details">
              <span className="network">${newCalculations.network}</span>
            </div>
            <div className="scenario-total-details">
              <span className="managed-database">
                ${newCalculations.managed}
              </span>
            </div>
            <div className="scenario-total-details">
              <span className="other-services">${newCalculations.other}</span>
            </div>
          </div>
          <div className="optimization-details">
            <span>Optimization breakdown</span>
          </div>
          {this.renderOptimizationbreakdown()}
        </div>
        <div className="content">
          <span className="sub-heading">
            Please choose some optimization options to see how your starting
            scenario will be impacted.
          </span>
          <a className="link" href="#optimization">
            Return to optimization options
            <span>
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                <path d="M13 14L20 7.5L13 1" stroke="currentColor"></path>
                <line x1="20" y1="7.5" y2="7.5" stroke="currentColor"></line>
              </svg>
            </span>
          </a>
          <hr className="mt-4 mb-5" />
          <p>
            <sup>1</sup>Activating these levers can typically be implemented as
            configuration changes without substantial revision to the
            application architecture. Deriving full value from these levers also
            requires companies to have the right enablers in place.
          </p>
          <p>
            <sup>2</sup>This is a generalized illustrative example. The specific
            cloud services and pricing information are based on offerings from
            major cloud service providers and do not refer to any particular
            cloud service provider. The list of optimization levers is based on
            our experience serving companies across industries and geographies
            on the topic of cloud cost optimization and does not represent all
            possible optimization options. The impact for each of the levers
            would heavily depend on specifics of application architecture and
            environment configuration; ranges provided represent the most common
            scenarios.
          </p>
        </div>
      </>
    );
  }
}

export default FinalImpact;
