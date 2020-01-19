import React from "react";

const Layout = props => {
  const { children } = props;
  return (
    <div id="layout" className="layout">
      <div id="container" className="container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
