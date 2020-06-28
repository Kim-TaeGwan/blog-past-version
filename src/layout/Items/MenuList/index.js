import React from 'react'
import { Link } from "react-router-dom";

const MenuList = ({link, img, menu}) => {
    return ( 
        <li>
          <Link to={link}>
            <span className="ico">
              <img
                src={img}
                alt="side_menu_ico"
                width="100%"
                height="100%"
              />
            </span>
            <span> {menu} </span>
          </Link>
        </li>
    )
}

export default MenuList
