import React from "react";
import calculateTotalCost from "../costCalculator";

class Compute extends React.Component {
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
      <div className="scenario-services compute">
        <div
          className="d-flex w-100 heading"
          style={{ background: `${data.colorCode}` }}
        >
          <strong>{data.title}</strong>
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
                <span>Total quantity: </span>
                {data.quantity} {data.quantityUnit}
                {data.quantityCycle ? `/${data.quantityCycle}` : ""}
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>
                  {data.quantityUnit === "instance"
                    ? `Average instance price: `
                    : `Unit Price: `}
                </span>
                ~ ${data.avgPrice}
                {data.priceUnit ? `/${data.priceUnit}` : ``}
                {data.priceCycle ? `/${data.priceCycle}` : ``}
              </div>
            </div>
            <div className="col-4">
              <div className="open-content">
                <span>Total annual cost: </span>$
                {calculateTotalCost(data, "compute")}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="contents">
              <p>
                Compute is represented by a mix of different types of instances
                ranging from 2 to 16 cores depending on the environment:
              </p>
              <h4>Production:</h4>
              <p>
                <small>
                  60 instances with 16 cores at ~$0.70/hour
                  <br />
                  40 instances with 8 cores at ~$0.40/hour
                </small>
              </p>
              <br />
              <h4>Dev:</h4>
              <p>
                <small>
                  10 instances with 8 cores at ~$0.40/hour
                  <br />
                  10 instances with 4 cores at ~$0.20/hour
                  <br />
                  10 instances with 2 cores at ~$0.10/hour
                  <br />
                </small>
              </p>
              <br />
              <h4>QA:</h4>
              <p>
                <small>
                  10 instances with 4 cores at ~$0.20/hour
                  <br />
                  10 instances with 4 cores at ~$0.10/hour
                  <br />
                </small>
              </p>
              <br />
              <p>
                Total blended rate is ~$0.45/hour. Company is using “on-demand”
                pricing model (eg, no reserved instances are currently in
                place). All of the instances are running 24/7.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Compute;
