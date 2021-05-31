import React, { FC } from 'react';
import SideMenu from './SideMenu';

const Layout: FC = ({ children }) => {
  const closeNav = () => {
    //   document.getElementById("mySidenav").style.display = "none";
    //   document.getElementById("overLay").style.display = "none";
  };
  return (
    <div id="layout" className="layout">
      <div id="container" className="container">
        <SideMenu onClick={closeNav} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
