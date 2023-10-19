import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import calculateTotalCost from "../costCalculator";

class Compute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      originalInstances: 0,
      originalPrice: 0,
      originalCalculatedAmount: 0,
      optimizeAmounts: {},
      currentInstances: 0,
      currentPrice: 0,
      calculatedAmount: 0,
      instancesBarWidth: 100,
      priceBarWidth: 100,
      totalBarWidth: 100,
      totalCost: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
    const { data, totalCost } = this.props;
    const calcAmount = calculateTotalCost(data, "compute");
    this.setState({
      originalInstances: data.quantity,
      originalPrice: data.avgPrice,
      currentInstances: data.quantity,
      currentPrice: data.avgPrice,
      optimizeAmounts: data.optimizationOptions,
      data: JSON.parse(JSON.stringify(data)),
      calculatedAmount: calcAmount,
      originalCalculatedAmount: calcAmount,
      totalCost: totalCost,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
  }

  isSticky = () => {
    const tabs = document.querySelector(".tabs-charts");
    const tabsScrollTop = window.scrollY;
    tabsScrollTop >= 600
      ? tabs.classList.add("sticky")
      : tabs.classList.remove("sticky");
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  calculateChange = (e, item) => {
    const { checked } = e.target;
    const {
      optimizeAmounts,
      currentInstances,
      currentPrice,
      calculatedAmount,
      originalInstances,
      originalPrice,
      originalCalculatedAmount,
    } = this.state;
    let { data, instancesBarWidth, priceBarWidth, totalBarWidth, totalCost } =
      this.state;
    let calcUnit = optimizeAmounts[item].amount;
    let newInstances;
    let newPrice;
    if (checked) {
      if (optimizeAmounts[item].effectUnit === "instance") {
        const subAmount = currentInstances - calcUnit;
        newInstances = subAmount;
        instancesBarWidth =
          instancesBarWidth - (calcUnit / originalInstances) * 100;
        this.setState({
          currentInstances: subAmount,
          instancesBarWidth,
        });
      } else {
        const newAmount = currentPrice - calcUnit;
        newPrice = newAmount;
        priceBarWidth = priceBarWidth - (calcUnit / originalPrice) * 100;
        this.setState({
          currentPrice: newAmount,
          priceBarWidth,
        });
      }
    } else {
      if (optimizeAmounts[item].effectUnit === "instance") {
        const sumAmount = currentInstances + calcUnit;
        newInstances = sumAmount;
        instancesBarWidth =
          instancesBarWidth + (calcUnit / originalInstances) * 100;
        this.setState({
          currentInstances: sumAmount,
          instancesBarWidth,
        });
      } else {
        const sumAmount = currentPrice + calcUnit;
        newPrice = sumAmount;
        priceBarWidth = priceBarWidth + (calcUnit / originalPrice) * 100;
        this.setState({
          currentPrice: sumAmount,
          priceBarWidth,
        });
      }
    }
    if (newPrice) {
      data.avgPrice = newPrice;
    }

    if (newInstances) {
      data.quantity = newInstances;
    }
    const newCost = calculateTotalCost(data, "compute");
    this.props.setNewCosts(data, newCost);
    if (newCost < calculatedAmount) {
      const diffAmount = calculatedAmount - newCost;
      totalCost = totalCost - diffAmount;
      totalBarWidth =
        totalBarWidth - (diffAmount / originalCalculatedAmount) * 100;
    } else {
      const diffAmount = newCost - calculatedAmount;
      totalCost = totalCost + diffAmount;
      totalBarWidth =
        totalBarWidth + (diffAmount / originalCalculatedAmount) * 100;
    }
    if (newCost > calculatedAmount) {
      this.props.setNewCosts(
        "totalCost",
        this.props.totalCost + Math.abs(newCost - calculatedAmount)
      );
    } else {
      this.props.setNewCosts(
        "totalCost",
        this.props.totalCost - Math.abs(newCost - calculatedAmount)
      );
    }
    this.setState({ calculatedAmount: newCost, totalCost, totalBarWidth });
  };

  renderOptimzationApplyBoxes = () => {
    const JSX = [];
    const { optimizeAmounts } = this.state;
    for (const item in optimizeAmounts) {
      JSX.push(
        <div className="apply-box">
          <div className="top-contain d-flex justify-content-between align-items-center">
            <span>{optimizeAmounts[item].title}</span>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={(e) => this.calculateChange(e, item)}
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
            <span>{optimizeAmounts[item].description}</span>
            <span className="impact-details" onClick={this.handleShow}>
              Impact View
            </span>
          </div>
        </div>
      );
    }
    return JSX;
  };

  render() {
    const { show, currentInstances, currentPrice, calculatedAmount } =
      this.state;
    return (
      <>
        <div className="card tabs-charts ">
          <div className="compute-contain">
            <div className="compute-total-cost">
              <span className="d-block total">Total cost</span>
              <span className="d-block number">${this.props.totalCost}</span>
              <span className="d-block compair">
                Compared to $21,490 last year
              </span>
            </div>
            <div className="compute-cost">
              <span>{currentInstances} instances</span>
              <div
                className="progress"
                style={{ width: `${this.state.instancesBarWidth}%` }}
              ></div>
            </div>
            <div className="compute-cost">
              <span>${currentPrice}/hour</span>
              <div
                className="progress"
                style={{ width: `${this.state.priceBarWidth}%` }}
              ></div>
            </div>
            <div className="compute-cost">
              <span>${calculatedAmount} </span>
              <div
                className="progress"
                style={{ width: `${this.state.totalBarWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="apply-boxes">{this.renderOptimzationApplyBoxes()}</div>
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
