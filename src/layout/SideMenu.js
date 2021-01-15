import React from "react";

import box_ico_black from "assets/icon/box_ico(black).svg";
import close_ico from "assets/icon/close_ico(black).svg";
import user_ico_black from "assets/icon/user_ico(black).svg";
import mail_ico_black from "assets/icon/mail_ico(black).svg";
import table_ico_black from "assets/icon/table_ico(black).svg";
import insta from "assets/icon/instagram.svg";
import facebook from "assets/icon/facebook.svg";
// import kakao from "assets/icon/kakaotalk.svg";
import github from "assets/icon/github.svg";
import profile_img from "assets/image/Profile_img.png";

import SnsList from "./Items/SnsList";
import MenuList from "./Items/MenuList";

const SideMenu = ({ onClick }) => {
  return (
    <div
      className="sideMenu"
      id="mySidenav"
      // style={style}
    >
      <div className="close_ico" onClick={onClick}>
        <img src={close_ico} alt="close_ico" width="100%" height="100%" />
      </div>
      <div className="profile_img">
        <img src={profile_img} alt="profile_img" width="100%" height="100%" />
      </div>
      <div className="title">PORTFOLIO</div>
      <div className="noti"> Template by W3.CSS </div>
      <div className="menu_list">
        <ul>
          <MenuList link="/" img={box_ico_black} menu="PORTFOLIO" />
          <MenuList link="/" img={user_ico_black} menu="ABOUT" />
          <MenuList link="/" img={mail_ico_black} menu="CONTACT" />
          <MenuList
            link="/studyTable"
            img={table_ico_black}
            menu="STUDY TABLE"
          />
        </ul>
      </div>
      <div className="sns_list">
        <SnsList
          href="https://www.instagram.com/k.taegwan/"
          img={insta}
          alt="insta"
        />
        <SnsList
          href="https://www.facebook.com/taegwan.kim.90"
          img={facebook}
          alt="facebook"
        />
        {/* <SnsList href="https://www.facebook.com/taegwan.kim.90" img={kakao} alt="kakao" /> */}
        <SnsList
          href="https://github.com/Kim-TaeGwan"
          img={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default SideMenu;
