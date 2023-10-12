import React from "react";
import calculateTotalCost from "./costCalculator";

class Managed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  handleClick = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    const { isShown } = this.state;
    const { data } = this.props;
    return (
      <div className="scenario-services managed">
        <div
          className="d-flex w-100 heading"
          style={{ background: `${data.colorCode}` }}
        >
          <strong>Managed database</strong>
          <button type="button" className="btn" onClick={this.handleClick}>
            <span>{isShown ? "Close" : "Details"}</span>
            <i
              className={
                isShown ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
              }
            ></i>
          </button>
        </div>
        <div className="service-content">
          <div className="row">
            <div className="col-4">
              <div className="open-content">
                <span>Total quantity: </span>14 instances
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Unit price: </span>~ $0.80/hour
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Total annual cost: </span>$
                {calculateTotalCost(data, "managed")}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="contents">
              <p>
                Managed database service is standardized around 4 core instances
                and split between 3 types of environment:
              </p>
              <h4>Production:</h4>
              <p>
                <small>10 instances at ~$0.80/hour</small>
              </p>
              <h4>Dev:</h4>
              <p>
                <small>2 instances at ~$0.80/hour</small>
              </p>
              <h4>QA:</h4>
              <p>
                <small>2 instances at ~$0.80/hour</small>
              </p>
              <p>
                Company is using “on-demand” pricing model (eg, no reserved
                instances are currently in place). All of the instances are
                running 24/7.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Managed;
