import React from "react";
import { Drawer } from "@mui/material";
import menuCloseIcon from "../images/icon-menu-close.svg";

const MenuDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      className="menu-drawer"
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
    >
      <div className="menu-drawer__container">
        <img
          src={menuCloseIcon}
          alt="close"
          className="menu-drawer__container__close"
          onClick={toggleDrawer}
        />
        <div className="menu-drawer__container__menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
