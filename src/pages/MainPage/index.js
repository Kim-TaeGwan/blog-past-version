import React from "react";
import MainPageComponent from "../../components/MainPageComponent";
import Layout from "../../layout/Layout";

const MainPage = props => {
  const { history, location } = props;
  return (
    <Layout history={history} location={location}>
      <MainPageComponent />
    </Layout>
  );
};

export default MainPage;
