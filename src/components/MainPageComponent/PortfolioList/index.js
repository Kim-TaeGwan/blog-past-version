import React from "react";
import Portfolio from "../../common/Portfolio";
import PageList from "../../common/PageList";

const PortfolioList = () => {
  return (
    <>
      <div className="portfolio_list">
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
      </div>
      <PageList />
    </>
  );
};

export default PortfolioList;
