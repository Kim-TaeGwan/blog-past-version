import React from 'react';

import box_ico_black from 'assets/icon/box_ico(black).svg';
import user_ico_black from 'assets/icon/user_ico(black).svg';
import mail_ico_black from 'assets/icon/mail_ico(black).svg';
import insta from 'assets/icon/instagram.svg';
import facebook from 'assets/icon/facebook.svg';
import kakao from 'assets/icon/kakaotalk.svg';
import github from 'assets/icon/github.svg';
import profile_img from 'assets/image/Profile_img.png';

const SideMenu = () => {
	return (
		<div className="sideMenu">
			<div className="profile_img">
				<img src={profile_img} alt="profile_img" width="100%" height="100%" />
			</div>
			<div className="title"> PORTFOLIO </div>
			<div className="noti"> Template by W3.CSS </div>
			<div className="menu_list">
				<ul>
					<li>
						<span className="ico">
							<img src={box_ico_black} alt="side_menu_ico" width="100%" height="100%" />
						</span>
						<span> PORTFOLIO </span>
					</li>
					<li>
						<span className="ico">
							<img src={user_ico_black} alt="side_menu_ico" width="100%" height="100%" />
						</span>
						<span> ABOUT </span>
					</li>
					<li>
						<span className="ico">
							<img src={mail_ico_black} alt="side_menu_ico" width="100%" height="100%" />
						</span>
						<span> CONTACT </span>
					</li>
				</ul>
			</div>
			<div className="sns_list">
				<span>
					<img src={insta} alt="insta" width="100%" height="100%" />
				</span>
				<span>
					<img src={facebook} alt="facebook" width="100%" height="100%" />
				</span>
				<span>
					<img src={kakao} alt="kakao" width="100%" height="100%" />
				</span>
				<span>
					<img src={github} alt="github" width="100%" height="100%" />
				</span>
			</div>
		</div>
	);
};

export default SideMenu;
