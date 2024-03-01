import React from "react";
import UpdateInfo from "./UpdateInfo";
import Links from "./Links";
import DirLinks from "./DirLinks";
import { quickLinks } from "./Data";

const Header = () => {
  return (
    <header>
      <h1>Best Website builders in the US</h1>
      <UpdateInfo />
      <Links links={quickLinks} className="quick-links"/>
      <DirLinks />
    </header>
  );
};
export default Header;
