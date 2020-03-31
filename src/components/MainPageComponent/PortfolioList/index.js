import React, { useState } from "react";
import Portfolio from "../../common/Portfolio";
import PageList from "../../common/PageList";

const portfolioList = [1, 2, 3, 4];

const PortfolioList = () => {
  const [list, setList] = useState(portfolioList);
  return (
    <>
      <div className="portfolio_list">
        {list.map(i => (
          <Portfolio key={i} />
        ))}
      </div>
      <PageList />
    </>
  );
};

export default PortfolioList;
