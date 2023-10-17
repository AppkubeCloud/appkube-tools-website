import React, { Component } from "react";
import Compute from "./Compute";
import Storage from "./Storage";
import Network from "./Network";
import Managed from "./Managed";
import Other from "./Other";
import data from "../data.json";

const componentNames = {
  Compute: Compute,
  Storage: Storage,
  Network: Network,
  Managed: Managed,
  Other: Other,
};

class StartingScenario extends Component {
  render() {
    return (
      <>
        <div className="content">
            <p>
              In this scenario, a number of modules of a retail bank’s
              credit-scoring application have been migrated to cloud, primarily:
            </p>
            <ul>
              <li>web UI for back-office personnel</li>
              <li>workflow and business-logic applications</li>
              <li>advanced analytics scoring models</li>
            </ul>
            <p>
              Some of the core components and a substantial amount of customer
              data are still being hosted on-premises. For the purposes of this
              simulation, total annual cloud spend for the application is
              assumed to be roughly $1 million.
            </p>
            <p className="mb-0">
              <small>
                (A note on cloud prices shown: Cloud pricing is dynamic and
                changes frequently; the prices in this interactive are for
                illustrative purposes only, to show the relative impact of
                different optimization options.)
              </small>
            </p>
          </div>
        {data.startingScenario.costComponents.map((item) => {
          const CurrentComponent = componentNames[item.component];
          return <CurrentComponent data={item} />;
        })}
      </>
    );
  }
}

export default StartingScenario;
