import React from "react";
import "../css/index.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins';
    }
`;
const TemplateWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div className="position-relative d-block w-100 px-lg-5 wrapper-view">
        <div className="container-fluid">
          <main className="d-block w-100 main-container">{children}</main>
        </div>
      </div>
    </>
  );
};

export default TemplateWrapper;
