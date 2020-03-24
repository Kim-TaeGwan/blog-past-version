import React from "react";
import axios from "axios";

import { portfolioApi, studyApi } from "../shared/Api";

import MainPageComponent from "components/MainPageComponent";
import SideMenu from "layout/SideMenu";
import Footer from "layout/Footer";
import Header from "../layout/Header";
import PortfolioList from "../components/MainPageComponent/PortfolioList";
import OverLay from "../components/common/OverLay";
import TechnicalSkills from "../components/MainPageComponent/TechnicalSkills";
import ContactMe from "../components/ContactMe";
import TableComponent from "../components/StudyTableComponent/Table";

const MainPageContainer = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("overLay").style.display = "block";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("overLay").style.display = "none";
  };

  const getStudyList = async () => {
    try {
      const result = await studyApi.post(
        "/",
        { gg: 123 },
        {
          params: {
            test: 1
          }
        }
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getPortfolioList = async () => {
    try {
      const result = await portfolioApi.post(
        "/",
        { gg: 456 },
        {
          params: {
            test: 1
          }
        }
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SideMenu onClick={closeNav} />
      <MainPageComponent>
        <OverLay />
        <Header onClick={openNav} />
        <PortfolioList />
        <TableComponent />
        <TechnicalSkills />
        <ContactMe />
        <Footer />
      </MainPageComponent>
    </>
  );
};

export default MainPageContainer;
