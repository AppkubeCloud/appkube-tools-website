import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";
import "../css/cost-calculation.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;
const TemplateWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div className="position-relative d-block w-100 wrapper-view">
        {children}
      </div>
    </>
  );
};

export default TemplateWrapper;
