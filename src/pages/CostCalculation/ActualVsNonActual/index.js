import React, { Component } from "react";
class ActualVsNonActual extends Component {
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
      
      </div>
    );
  }
}

export default ActualVsNonActual;
