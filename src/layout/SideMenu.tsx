import React, { VFC } from 'react';

// import kakao from "src/assets/icon/kakaotalk.svg";
import profile_img from 'assets/image/Profile_img.png';

import SnsList from './Items/SnsList';
import MenuList from './Items/MenuList';
import CloseBlackIcon from 'assets/icon/CloseBlackIcon';
import UserBlackIcon from 'assets/icon/UserBlackIcon';
import MailBlackIcon from 'assets/icon/MailBlackIcon';
import BoxBlackIcon from '../assets/icon/BoxBlackIcon';
import TableBlackIcon from 'assets/icon/TableBlackIcon';
import InstagramIcon from 'assets/icon/InstagramIcon';
import GithubIcon from '../assets/icon/GithubIcon';
import FacebookIcon from '../assets/icon/FacebookIcon';

interface Props {
  onClick: () => void;
}

const SideMenu: VFC<Props> = ({ onClick }) => {
  const nullPage = () => {
    alert('페이지 공사중입니다');
  };
  return (
    <div
      className="sideMenu"
      id="mySidenav"
      // style={style}
    >
      <div className="close_ico" onClick={onClick}>
        <CloseBlackIcon />
      </div>
      <div className="profile_img">
        <img src={profile_img} alt="profile_img" width="100%" height="100%" />
      </div>
      <div className="title">PORTFOLIO</div>
      <div className="noti"> Template by W3.CSS </div>
      <div className="menu_list">
        <ul>
          <MenuList link="/" menu="PORTFOLIO">
            <BoxBlackIcon />
          </MenuList>
          {/* <MenuList link="/asd" img={user_ico_black} menu="ABOUT" /> */}
          <li onClick={nullPage}>
            <span className="ico">
              <UserBlackIcon />
            </span>
            <span> ABOUT </span>
          </li>
          {/* <MenuList link="/asd" img={mail_ico_black} menu="CONTACT" /> */}
          <li onClick={nullPage}>
            <span className="ico">
              <MailBlackIcon />
            </span>
            <span> CONTACT </span>
          </li>
          <MenuList link="/studyTable" menu="STUDY TABLE">
            <TableBlackIcon />
          </MenuList>
        </ul>
      </div>
      <div className="sns_list">
        <SnsList href="https://www.instagram.com/k.taegwan/">
          <InstagramIcon />
        </SnsList>
        <SnsList href="https://www.facebook.com/taegwan.kim.90">
          <FacebookIcon />
        </SnsList>
        {/* <SnsList href="https://www.facebook.com/taegwan.kim.90" img={kakao} alt="kakao" /> */}
        <SnsList href="https://github.com/Kim-TaeGwan">
          <GithubIcon />
        </SnsList>
      </div>
    </div>
  );
};

export default SideMenu;
