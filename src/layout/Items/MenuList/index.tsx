import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  link: string;
  menu: string;
  children: any;
}
const MenuList: FC<Props> = ({ link, menu, children }) => {
  return (
    <>
      <li>
        <NavLink to={link} activeStyle={{ color: '#009688' }} exact>
          <span className="ico">{children}</span>
          <span> {menu} </span>
        </NavLink>
      </li>
    </>
  );
};

export default MenuList;
