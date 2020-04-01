import React, { useState } from "react";
import Portfolio from "../../common/Portfolio";
import PageList from "../../common/PageList";

// const portfolioList = [1, 2, 3, 4];
const portfolioList = [
  {
    title: "WEBAPPLAYERS",
    comment: "첫번째 작업물, 반응형 X",
    img_url:
      "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/firstPortFolio.PNG",
    url: "http://elric.dothome.co.kr/"
  }
];

const PortfolioList = () => {
  const [list, setList] = useState(portfolioList);
  return (
    <>
      <div className="portfolio_list">
        {list.map((list, i) => (
          <Portfolio
            key={i}
            title={list.title}
            comment={list.comment}
            img_url={list.img_url}
            url={list.url}
          />
        ))}
      </div>
      <PageList />
    </>
  );
};

export default PortfolioList;
