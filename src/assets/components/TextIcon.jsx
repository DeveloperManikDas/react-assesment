import React from "react";

export const TextIcon = ({ icon, text }) => {
  return (
    <div>
      <span>{text}</span>
      <img
        style={{ display: !icon ? "none" : "flex" }}
        src={`images/${icon}.png`}
      />
    </div>
  );
};

export default TextIcon;
