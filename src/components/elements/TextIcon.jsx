import React from "react";

export const TextIcon = (props) => {
  return (
    <div className="text-icon" id={props.class}>
      <span>{props.text}</span>
      <img
        style={{ display: !(props.icon) ? "none" : "flex" , position: "relative", top: "-2px", }}
        src={`images/${props.icon}.png`}
      />
    </div>
  );
};

export default TextIcon;
