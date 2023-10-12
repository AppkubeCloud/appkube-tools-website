import React from "react";
import calculateTotalCost from "./costCalculator";

class Other extends React.Component {
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
      <div className="scenario-services other">
        <div
          className="d-flex w-100 heading"
          style={{ background: `${data.colorCode}` }}
        >
          <strong>Other services</strong>
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
          <div className="row justify-content-end">
            <div className="col-4">
              <div className="open-content">
                <span>Total annual cost: </span>$
                {calculateTotalCost(data, "other")}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="contents">
              <p>
                Represents all other cloud services used, including but not
                limited to:
              </p>
              <ul>
                <li>load balancers</li>
                <li>cache services</li>
                <li>monitoring</li>
                <li>security</li>
              </ul>
              <p>
                Each individual service within this group should represent no
                more than 2%–3% of total cloud spend and hence is not a priority
                for optimization.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Other;
