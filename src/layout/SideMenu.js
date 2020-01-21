import React from "react";

import box_ico_black from "assets/icon/box_ico(black).svg";
import user_ico_black from "assets/icon/user_ico(black).svg";
import mail_ico_black from "assets/icon/mail_ico(black).svg";

import profile_img from "assets/image/Profile_img.png";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="profile_img">
        <img src={profile_img} alt="profile_img" width="100%" height="100%" />
      </div>
      <div className="title">Portfolio</div>
      <div className="noti">Template by W3.CSS</div>
      <div className="menu_list">
        <ul>
          <li>
            <span className="ico">
              <img
                src={box_ico_black}
                alt="side_menu_ico"
                width="100%"
                height="100%"
              />
            </span>
            <span>PORTFOLIO</span>
          </li>
          <li>
            <span className="ico">
              <img
                src={user_ico_black}
                alt="side_menu_ico"
                width="100%"
                height="100%"
              />
            </span>
            <span>ABOUT</span>
          </li>
          <li>
            <span className="ico">
              <img
                src={mail_ico_black}
                alt="side_menu_ico"
                width="100%"
                height="100%"
              />
            </span>
            <span>CONTACT</span>
          </li>
        </ul>
      </div>
      <div className="sns_list">
        <span>
          <img alt="insta" width="100%" height="100%" />
        </span>
        <span>
          <img alt="facebook" width="100%" height="100%" />
        </span>
        <span>
          <img alt="kakao" width="100%" height="100%" />
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
