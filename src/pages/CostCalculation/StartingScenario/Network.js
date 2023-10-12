import React from "react";
import calculateTotalCost from "./costCalculator";

class Network extends React.Component {
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
      <div className="scenario-services network">
        <div
          className="d-flex w-100 heading"
          style={{ background: `${data.colorCode}` }}
        >
          <strong>Network </strong>
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
                <span>Total quantity: </span>1.5 TB/day
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Unit price: </span>~ $0.10/GB transferred
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Total annual cost: </span>$
                {calculateTotalCost(data, "network")}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="contents">
              <p>
                Network charges are mostly driven by egress data transfer; ~1.5
                TB/day at ~$0.10/GB – data exchange with the modules of an
                application running on-premises.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Network;
