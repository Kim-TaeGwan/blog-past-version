import React, { useState, useEffect } from "react";
import Portfolio from "components/common/Portfolio";
import PageList from "components/common/PageList";

import { portfolioApi } from "shared/Api";

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
        {isLoading && <div className="loader" />}
        {list &&
          list.map((item, i) => (
            <a key={i} href={item.url} target="black">
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
