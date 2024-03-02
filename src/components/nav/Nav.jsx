import React from "react";
import Links from "../elements/Links"
import { SearchBox } from "./SearchBox";
import {topNavLinks} from "../Data"

const Nav = () => {
  return (
    <nav>
      <SearchBox/>
      <Links links={topNavLinks} />
    </nav>
  );
};

export default Nav;
