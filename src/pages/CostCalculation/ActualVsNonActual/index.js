import React, { Component } from "react";
import { Pie, Bar } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";

class ActualVsNonActual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Non-Actual", "Actual"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#F9D33D", "#53CA43"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              color: "#383874",
              font: {
                size: 16,
              },
              padding: 40,
            },
          },
        },
      },
      barData: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
        datasets: [
          {
            label: "Sample Bar Chart",
            data: [12, 19, 3, 5],
            backgroundColor: "rgba(75, 192, 192, 0.6",
          },
        ],
      },
    };
  }

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
        <div className="actual-non-actual-charts">
          <div className="card charts">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-block">
                <span className="d-block total-sepnd">Total Spend</span>
                <span className="d-block number">$100M</span>
                <span className="d-block text">Before Optimization</span>
              </div>
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
            <div className="pie-chart">
              <Pie data={this.state.data} options={this.state.options} />
            </div>
          </div>
          <div className="card charts">
            <div className="bar-chart">
              <Bar
                data={this.state.barData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="card speed-charts">
            <div className="row">
              <div className="col-5">
                <span className="title d-block">Before Appkube</span>
                <p className="mb-0 d-block">
                  Donut charts are ideal for comparing proportions of a whole.{" "}
                </p>
                <div className="mt-2 d-block">
                <GaugeChart
                  id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.2, 0.3]}
                  colors={["#991BFA", "#FF708B"]}
                  percent={0.37}
                  arcPadding={0.02}
                  arcWidth={0.06}
                  textColor="#383874"
                />
                </div>
              </div>
              <div className="col-5">
                <span className="title d-block">Before Appkube</span>
                <p className="mb-0 d-block">
                  Donut charts are ideal for comparing proportions of a whole.{" "}
                </p>
                <div className="mt-2 d-block">
                <GaugeChart
                  id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.2, 0.3]}
                  colors={["#991BFA", "#FF708B"]}
                  percent={0.37}
                  arcPadding={0.02}
                  arcWidth={0.06}
                  textColor="#383874"
                />
                </div>
              </div>
              <div className="col-2">
                <div className="form-check form-switch d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Applied
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActualVsNonActual;
