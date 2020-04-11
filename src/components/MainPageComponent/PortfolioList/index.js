import React, { useState, useEffect } from "react";
import Portfolio from "components/common/Portfolio";
import PageList from "components/common/PageList";

import { portfolioApi } from "shared/Api";
import { Link } from "react-router-dom";

// const portfolioList = [1, 2, 3, 4];
const portfolioList = [
  {
    title: "WEBAPPLAYERS",
    comment: "첫번째 작업물, 반응형 X",
    img_url:
      "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/firstPortFolio.PNG",
    url: "http://elric.dothome.co.kr/",
  },
];

const PortfolioList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPortfolioList() {
      setIsLoading(true);
      try {
        const result = await portfolioApi.get("/");

        // console.log(result);

        setList(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPortfolioList();
  }, []);

  console.log(list);

  return (
    <>
      <div className="portfolio_list">
        {isLoading && <div>로더</div>}
        {list &&
          list.map((item, i) => (
            <a key={i} href={item.url}>
              <Portfolio
                title={item.title}
                comment={item.comment}
                img_url={item.img_url}
                url={item.url}
              />
            </a>
          ))}
      </div>
      <PageList />
    </>
  );
};

export default PortfolioList;
