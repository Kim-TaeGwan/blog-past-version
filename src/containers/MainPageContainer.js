import React from "react";
import MainPageComponent from "components/MainPageComponent";
import Layout from "layout/Layout";
import SideMenu from "layout/SideMenu";
import Footer from "layout/Footer";

const MainPageContainer = () => {
  return (
    <Layout>
      <SideMenu />
      <MainPageComponent />
      <Footer />
    </Layout>
  );
};

export default MainPageContainer;
