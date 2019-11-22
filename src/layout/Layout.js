import React from "react";

const Layout = () => {
  return (
    <div id="layout" className="layout">
      <div id="container" className="container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
