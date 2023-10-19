import React, { Component } from "react";

class Architectural extends Component {
  render() {
    return (
      <div className="optimization-option-tab">
        <div className="content mb-0">
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
        <div className="d-flex justify-content-end align-items-center">
          <button type="button" class="next-btn btn btn-primary">
            Next
          </button>
        </div>
        <div className="tab-content">
          <div className="tab-pane active">
            <div className="card tabs-charts ">
              <div className="compute-contain">
                <div className="compute-total-cost">
                  <span className="d-block total">Total cost</span>
                  <span className="d-block number">$12,875</span>
                  <span className="d-block compair">
                    Compared to $21,490 last year
                  </span>
                </div>
                <div className="compute-cost">
                  <span>150 instances</span>
                  <div className="progress">
                    <div></div>
                  </div>
                </div>
                <div className="compute-cost">
                  <span>$0.45/hour</span>
                  <div className="progress"> <div></div></div>
                </div>
                <div className="compute-cost">
                  <span>$ 600,000 </span>
                  <div className="progress"> <div></div></div>
                </div>
              </div>
            </div>
            <div className="apply-box">
              <div className="top-contain d-flex justify-content-between align-items-center">
                <span>Container</span>
                <div className="form-check form-switch d-flex align-items-center">
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
                <span>Cost will Reduce Upto 25%</span>
                <span className="impact-details">Impact View</span>
              </div>
            </div>
            <div className="apply-box">
              <div className="top-contain d-flex justify-content-between align-items-center">
                <span>Serverless</span>
                <div className="form-check form-switch d-flex align-items-center">
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
                <span>Cost will Reduce Upto 20%</span>
                <span className="impact-details">Impact View</span>
              </div>
            </div>
            <div className="apply-box">
              <div className="top-contain d-flex justify-content-between align-items-center">
                <span>Top 10 Easy</span>
                <div className="form-check form-switch d-flex align-items-center">
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
                <span>Cost will Reduce Upto 25%</span>
                <span className="impact-details">Impact View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Architectural;
