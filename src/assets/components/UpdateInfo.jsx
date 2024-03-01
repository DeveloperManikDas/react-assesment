import React from "react";
import IconText from "./IconText";
import TextIcon from "./TextIcon";

export const UpdateInfo = () => {
  return (
    <div className="update-info">
      <IconText icon={"done"} text={"Last Updated - February 22, 2020"} />
      <IconText icon={"info"} text={"Advertising Disclosure"} />
      <TextIcon icon={"downarrow"} text={"Top Relevant"} class={"right0"}/>
    </div>
  );
};

export default UpdateInfo;
