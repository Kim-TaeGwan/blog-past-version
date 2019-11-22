import React from "react";
import MainPageComponent from "../../components/MainPageComponent";
import Layout from "../../layout/LayOut";

const MainPage = props => {
  return (
    <Layout history={history} location={location}>
      <MainPageComponent />
    </Layout>
  );
};

export default MainPage;
