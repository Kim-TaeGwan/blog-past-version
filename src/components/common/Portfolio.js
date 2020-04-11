import React from "react";

import mountains_img from "../../assets/image/mountains.jpg";

const Portfolio = ({ title, comment, img_url }) => {
  return (
    <div className="portfolio">
      <div className="portfolio_img">
        {/* <img src={mountains_img} alt="portfolio_img" width="100%" /> */}
        <img src={img_url} alt="portfolio_img" width="100%" />
      </div>
      <div className="portfolio_info">
        <p>
          <b>{title}</b>
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Portfolio;
