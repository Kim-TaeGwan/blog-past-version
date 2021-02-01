import React from "react";
import { NavLink } from "react-router-dom";

const MenuList = ({ link, img, menu }) => {
  return (
    <>
      <li>
        <NavLink to={link} activeStyle={{ color: "#009688" }} exact>
          <span className="ico">
            <img src={img} alt="side_menu_ico" width="100%" height="100%" />
          </span>
          <span> {menu} </span>
        </NavLink>
      </li>
    </>
  );
};

export default MenuList;
