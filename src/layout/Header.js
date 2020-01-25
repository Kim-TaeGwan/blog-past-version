import React from 'react';

import gen_ico_black from 'assets/icon/gem_ico(black).svg';
import map_pin_ico_black from 'assets/icon/map_pin_ico(black).svg';
import image_ico_black from 'assets/icon/image_ico(black).svg';

const Header = () => {
	return (
		<div className="header">
			<div className="title">My Portfolio</div>
			<div className="header_nav">
				<div className="header_nav_title">Filter : </div>
				<button className="filter_btn insert">ALL</button>
				<button>
					<span className="filter_ico">
						<img src={gen_ico_black} alt="design_ico " width="100%" height="100%" />
					</span>
					<span className="d_inline_block">Design</span>
				</button>
				<button>
					<span className="filter_ico">
						<img src={image_ico_black} alt="photos_ico " width="100%" height="100%" />
					</span>
					<span className="d_inline_block">Photos</span>
				</button>
				<button>
					<span className="filter_ico">
						<img src={map_pin_ico_black} alt="art_ico " width="100%" height="100%" />
					</span>
					<span className="d_inline_block v_md">Art</span>
				</button>
			</div>
			<div />
		</div>
	);
};

export default Header;
