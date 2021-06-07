import React, { FC } from 'react';

// import map_pin_ico_black from 'assets/icon/map_pin_ico(black).svg';
// import image_ico_black from 'assets/icon/image_ico(black).svg';
import profile_img from 'assets/image/Profile_img.png';
import GemBlackIcon from 'assets/icon/GemBlackIcon';

interface Props {
  onClick: () => void;
}

const Header: FC<Props> = ({ onClick }) => {
  return (
    <div className="header">
      <div className="top">
        <div className="menu_m" onClick={onClick}>
          &#9776;
        </div>
        <div className="profile_m">
          <img src={profile_img} alt="menu_m" width="100%" height="100%" />
        </div>
      </div>
      <div className="title">My Portfolio</div>
      <div className="header_nav">
        <div className="header_nav_title">Filter : </div>
        <button className="filter_btn insert">ALL</button>
        <button>
          <span className="filter_ico">
            <GemBlackIcon />
          </span>
          <span className="d_inline_block">Dev</span>
        </button>
        {/* <button>
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
				</button> */}
      </div>
      <div />
    </div>
  );
};

export default Header;
