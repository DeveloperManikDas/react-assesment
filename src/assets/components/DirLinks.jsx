import React from "react";
import IconText from "./IconText";
const dirLinks = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];

export const DirLinks = () => {
  return (
    <div>
      <div>Home</div>
      {dirLinks.map((dir, index) => {
        return <IconText key={index} text={dir} icon={"rightarrow"} />;
      })}
    </div>
  );
};
export default DirLinks;