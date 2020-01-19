import React from "react";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

const Layout = props => {
  const { children } = props;
  return (
    <div id="layout" className="layout">
      <div id="container" className="container">
        <SideMenu />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
