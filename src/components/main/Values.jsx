import React from "react";  
import IconText from "../elements/IconText";

const iconTextData= ["Documentation", "Easy Use", "Out of box"];

export const Values = () => {
  return (
    <div className="key-values">
      {iconTextData.map((item, index) => (
        <IconText key={index} icon={"done-blue"} text={item} />
      ))}
    </div>
  );
};
export default Values;