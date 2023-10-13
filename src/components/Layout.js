import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import "../css/cost-calculation.css";

const TemplateWrapper = ({ children }) => {
  return (
    <>
      <div className="position-relative d-block w-100 wrapper-view">
        {children}
      </div>
    </>
  );
};

export default TemplateWrapper;
