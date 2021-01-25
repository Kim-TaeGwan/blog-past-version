import React from "react";

import SideMenu from "layout/SideMenu";
import Header from "layout/Header";
import StudyTableComponent from "components/StudyTableComponent";
import OverLay from "components/common/OverLay";
import TableComponent from "components/StudyTableComponent/Table";

const StudyTableContainer = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("overLay").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("overLay").style.display = "none";
  };

  return (
    <>
      <SideMenu onClick={closeNav} />
      <StudyTableComponent>
        <OverLay />
        <Header onClick={openNav} />
        <TableComponent />
      </StudyTableComponent>
    </>
  );
};

export default StudyTableContainer;
