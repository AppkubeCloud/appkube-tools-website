import React from "react";
import calculateTotalCost from "../costCalculator";

class Storage extends React.Component {
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
      <div className="scenario-services storage">
        <div
          className="d-flex w-100 heading"
          style={{ background: `${data.colorCode}` }}
        >
          <strong>Storage </strong>
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
                <span>Total quantity: </span>125 TB
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Unit price:</span>~ $0.10/GB/month
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Total annual cost: </span>$
                {calculateTotalCost(data, "storage")}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="contents">
              <p>
                Managed store services based on SSD (eg, EBS for AWS) is used.
                Total of ~125 TB storage is provisioned at ~$0.10/GB. Multiple
                types of data are stored, including:
              </p>

              <ul>
                <li>tokenized customer data</li>
                <li>third-party data</li>
                <li>user activity data</li>
                <li>technical data (eg, application logs)</li>
              </ul>
              <p>
                Actual store utilization on average is only at ~35% (eg, ~45
                TB).
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Storage;
