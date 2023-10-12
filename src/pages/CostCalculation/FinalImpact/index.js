import React, { Component } from "react";
class FinalImpact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <>
        <div class="final-impact-content">
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
        <div class="final-impact-part">
          <div class="d-flex align-items-center">
            <div class="impact-details">
              <span class="computer">Computer</span>
            </div>
            <div class="impact-details">
              <span class="stronge">Storage</span>
            </div>
            <div class="impact-details">
              <span class="network">Network</span>
            </div>
            <div class="impact-details">
              <span class="managed-database">Managed database</span>
            </div>
            <div class="impact-details">
              <span class="other-services">Other services</span>
            </div>
          </div>
          <div class="scenario-total">
            <span>Starting scenario: $1,000,000</span>
          </div>
          <div class="d-flex align-items-center mb-2">
            <div class="scenario-total-details">
              <span class="computer">$600,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="stronge">$150,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="network">$50,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="managed-database">$100,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="other-services">$100,000</span>
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
          <div class="scenario-total">
            <span>Final impact: $976,950</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="scenario-total-details">
              <span class="computer">$600,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="stronge">$150,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="network">$50,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="managed-database">$100,000</span>
            </div>
            <div class="scenario-total-details">
              <span class="other-services">$100,000</span>
            </div>
          </div>
          <div class="optimization-details">
            <span>Optimization breakdown</span>
          </div>
          <div class="optimization-table mt-3 compute">
            <div class="table-header">
              <div class="row align-item-center">
                <div class="col-lg-3 col-4">
                  <span class="optimization-title">Compute</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Starting scenario</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Final impact</span>
                </div>
                <div class="col-3 d-none d-lg-block">
                  <span>Applied optimizations</span>
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Instances</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">150</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">150</span>
                </div>
                <div class="col-lg-3 col-4 d-none d-lg-block">
                  <button className="btn p-0">
                    <i class="fa-regular fa-circle-xmark"></i>
                    <span class="utilize-optimization">
                      Utilize spotinstances
                    </span>
                  </button>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Instance/hour</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$0.45</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$0.45</span>
                </div>
                <div class="col-lg-3 col-4 d-none d-lg-block">
                  <button className="btn p-0 add-optimization">
                    <i class="fa-solid fa-circle-plus"></i>
                    <span>Add optimization</span>
                  </button>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Price/year</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$600,000</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$555,000</span>
                </div>
              </div>
              <div className="row mt-1 d-lg-none d-flex">
                <div className="col-12">
                  <div className="d-block w-100 mt-2">
                    <strong>Applied optimizations</strong>
                    <div className="d-block w-100">
                      <button className="btn ps-0">
                        <i class="fa-regular fa-circle-xmark"></i>
                        <span class="utilize-optimization">
                          Utilize spotinstances
                        </span>
                      </button>
                    </div>
                    <div className="d-block w-100">
                      <button className="btn ps-0 add-optimization">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add optimization</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="optimization-table mt-3 storage">
            <div class="table-header">
              <div class="row ">
                <div class="col-lg-3 col-4">
                  <span class="optimization-title">Storage</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Starting scenario</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Final impact</span>
                </div>
                <div class="col-3 d-none d-lg-block">
                  <span>Applied optimizations</span>
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">TB</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">125</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">125</span>
                </div>
                <div class="col-lg-3 col-4 d-none d-lg-block">
                  <button className="btn p-0 add-optimization">
                    <i class="fa-solid fa-circle-plus"></i>
                    <span>Add optimization</span>
                  </button>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">GB/month</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$0.10</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$0.10</span>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Price/year</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$150,000</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$150,000</span>
                </div>
              </div>
              <div className="row mt-1 d-lg-none d-flex">
                <div className="col-12">
                  <div className="d-block w-100 mt-2">
                    <strong>Applied optimizations</strong>
                    <div className="d-block w-100">
                      <button className="btn ps-0 add-optimization">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add optimization</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="optimization-table mt-3 network">
            <div class="table-header">
              <div class="row ">
                <div class="col-lg-3 col-4">
                  <span class="optimization-title">Network</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Starting scenario</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Final impact</span>
                </div>
                <div class="col-3 d-none d-lg-block">
                  <span>Applied optimizations</span>
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">TB/day</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">1.5</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">1.5</span>
                </div>
                <div class="col-lg-3 col-4 d-none d-lg-block">
                  <button className="btn p-0 add-optimization">
                    <i class="fa-solid fa-circle-plus"></i>
                    <span>Add optimization</span>
                  </button>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">GB transferred</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$0.10</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$0.10</span>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Price/year</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$50,000</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$50,000</span>
                </div>
              </div>
              <div className="row mt-1 d-lg-none d-flex">
                <div className="col-12">
                  <div className="d-block w-100 mt-2">
                    <strong>Applied optimizations</strong>
                    <div className="d-block w-100">
                      <button className="btn ps-0 add-optimization">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add optimization</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="optimization-table mt-3 managed-database">
            <div class="table-header">
              <div class="row">
                <div class="col-lg-3 col-4">
                  <span class="optimization-title">Managed database</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Starting scenario</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span>Final impact</span>
                </div>
                <div class="col-3 d-none d-lg-block">
                  <span>Applied optimizations</span>
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Instances</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">14</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">14</span>
                </div>
                <div class="col-3 d-none d-lg-block">
                  <button className="btn p-0 add-optimization">
                    <i class="fa-solid fa-circle-plus"></i>
                    <span>Add optimization</span>
                  </button>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Instance/hour</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$0.80</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$0.80</span>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-3 col-4">
                  <span class="name">Price/year</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="scenario-number">$100,000</span>
                </div>
                <div class="col-lg-3 col-4">
                  <span class="final-impact">$100,000</span>
                </div>
              </div>
              <div className="row mt-1 d-lg-none d-flex">
                <div className="col-12">
                  <div className="d-block w-100 mt-2">
                    <strong>Applied optimizations</strong>
                    <div className="d-block w-100">
                      <button className="btn ps-0 add-optimization">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add optimization</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="other-services-info mt-3">
            <span>Other services</span>
            <p>
              These services are accounted for by default at an annual cost of
              $100,000. See more in “Starting scenario.”
            </p>
          </div>
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
