import React from 'react';

import mountains_img from '../../assets/image/mountains.jpg';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="portfolio_img">
				<img src={mountains_img} alt="portfolio_img" width="100%" />
			</div>
			<div className="portfolio_info">
				<p>
					<b>Lorem Ipsum</b>
				</p>
				<p>
					Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
					congue gravida diam non fringilla.
				</p>
			</div>
		</div>
	);
};

export default Portfolio;
