import React from "react";
import StudyTableContainer from "containers/StudyTableContainer";
import Layout from "layout/Layout";

const StudyTable = props => {
  const { history, location } = props;
  return (
    <Layout history={history} location={location}>
      <StudyTableContainer />
    </Layout>
  );
};

export default StudyTable;
