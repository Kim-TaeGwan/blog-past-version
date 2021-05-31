import React from 'react';

import Header from 'layout/Header';
import StudyTableComponent from 'components/StudyTableComponent';
import OverLay from 'components/common/OverLay';
import TableComponent from 'components/StudyTableComponent/Table';

const StudyTableContainer = () => {
  const openNav = () => {
    // document.getElementById("mySidenav").style.display = "block";
    // document.getElementById("overLay").style.display = "block";
  };

  return (
    <>
      <StudyTableComponent>
        <OverLay />
        <Header onClick={openNav} />
        <TableComponent />
      </StudyTableComponent>
    </>
  );
};

export default StudyTableContainer;
