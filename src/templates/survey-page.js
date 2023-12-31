import React from "react";
import Layout from "../components/Layout";
import SurveyCreator from "../pages/Survey";
import data from "../pages/Survey/data.json";

export const SurveyTemplate = () => {
  return (
    <section className="section">
      <div className="container content">
          <SurveyCreator data={data} />
      </div>
    </section>
  );
};

const SurveyPage = () => {
  return (
    <Layout>
      <SurveyTemplate Surveyjson={data} />
    </Layout>
  );
};

export default SurveyPage;
