import React from "react";
import UpdateInfo from "./UpdateInfo";
import TextIcon from "./TextIcon";
import Links from "./Links"
import DirLinks from "./DirLinks";
import {quickLinks} from "./Data"

const Header = () => {
  return (
    <header>
      <UpdateInfo />
      <TextIcon icon={"downarrow"} text={"Top Relevant"}/>
      <Links links={quickLinks} />
      <DirLinks />
    </header>
  );
};
export default Header;
