import React, { FC, memo } from 'react';

interface Props {
  title: string;
  comment: string;
  img_url: string;
}
const Portfolio: FC<Props> = memo(({ title, comment, img_url }) => {
  return (
    <div className="portfolio">
      <div className="portfolio_img">
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
});

export default Portfolio;
