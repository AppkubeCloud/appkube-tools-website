import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class Compute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChange: true,
      show: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
  }

  isSticky = (e) => {
    const tabs = document.querySelector(".tabs-charts");
    const tabsScrollTop = window.scrollY;
    tabsScrollTop >= 50
      ? tabs.classList.add("sticky")
      : tabs.classList.remove("sticky");
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  toggleDataChange = () => {
    this.setState((prevState) => ({
      dataChange: !prevState.dataChange,
    }));
  };

  render() {
    const { dataChange, show } = this.state;
    return (
      <>
        <div className="tabs-charts">
          <div className="compute-contain">
            <div className="compute-cost">
              <span>{dataChange ? 150 : 139} instances</span>
              <div
                className="progress"
                style={{ width: `${dataChange ? 100 : 90}%` }}
              ></div>
            </div>
            <div className="compute-cost">
              <span>${dataChange ? 0.45 : 0.4}/hour</span>
              <div
                className="progress"
                style={{ width: `${dataChange ? 100 : 85}%` }}
              ></div>
            </div>
            <div className="compute-cost">
              <span>${dataChange ? "600,000" : "499,500"} </span>
              <div
                className="progress"
                style={{ width: `${dataChange ? 100 : 75}%` }}
              ></div>
            </div>
          </div>
          <div className="compute-total-cost d-flex justify-content-between">
            <span>
              Total cost: $ {dataChange ? "1,000,000" : "899,500"}/year
            </span>
            <button
              className="btn"
              onClick={() => this.setCurrentStep((prev) => prev + 1)}
            >
              <span>Next</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="charts-shadow"></div>
        </div>
        <div className="apply-boxes">
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Adopt lean provisioning and rightsizing</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>Reduce buffer size and release unused capacity</span>
              <span className="impact-details" onClick={this.handleShow}>Impact details</span>
            </div>
          </div>
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Leverage autoscaling</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>
                Automatically scale up/down workloads that have variable demand
                over time (eg, advanced analytics models)
              </span>
              <span className="impact-details">Impact details</span>
            </div>
          </div>
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Leverage savings plan/reservations</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>
                Cloud service providers would offer discounted rate in exchange
                for long-term commitment
              </span>
              <span className="impact-details">Impact details</span>
            </div>
          </div>
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Utilize spot instances</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>
                Switch portion of workloads to discounted spot instances (eg,
                low-priority or batch workloads)
              </span>
              <span className="impact-details">Impact details</span>
            </div>
          </div>
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Schedule infrastructure availability</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>
                Turn on/off for services/environments and workloads that do not
                need to run continuously
              </span>
              <span className="impact-details">Impact details</span>
            </div>
          </div>
          <div className="apply-box">
            <div className="top-contain d-flex justify-content-between align-items-center">
              <span>Automate provisioning with guardrails</span>
              <div
                className="form-check form-switch d-flex align-items-center"
                onClick={this.toggleDataChange}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Apply
                </label>
              </div>
            </div>
            <div className="bottom-contain d-flex justify-content-between align-items-center">
              <span>
                Set up automated rules preventing certain types of inefficient
                provisioning activities
              </span>
              <span className="impact-details">Impact details</span>
            </div>
          </div>
        </div>
        <div className="content">
          <span className="sub-heading">
            See total effect of all your optimization selections.
          </span>
          <a className="link" href="#optimization">
            Final impact
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
        <Modal size="lg" show={show} onHide={this.handleClose}>
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={this.handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-title">
              <span>Automate provisioning with guardrails</span>
            </div>
            <div className="range-info">
              <span>Impact range</span>
              <div className="range-percentage mt-3">
                <div className="percentage d-flex justify-content-between">
                  <span>5%</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>25%</span>
                </div>
                <div className="range-box mt-2"></div>
                <div className="percentage d-flex justify-content-between mt-2">
                  <span>min</span>
                  <span>most-common</span>
                  <span>max</span>
                </div>
              </div>
            </div>
            <div className="notice-point">
              <span className="d-block">Impact comes from:</span>
              <ul>
                <li>
                  Using “spot” instances for nonpriority compute tasks that do
                  not require high availability (eg, batch jobs, background
                  processing). Spot instances are the heavily discounted
                  instances that can be reclaimed by a service provider at any
                  time. The team should determine workloads that are fit for
                  discounted spot instances.
                </li>
                <li>
                  Preventing engineering mistakes in provisioning (eg,
                  provisioning high-tier instances for non-production
                  environment). This has the secondary benefit of avoiding
                  misconfigurations that could lead to downtime.
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Compute;
