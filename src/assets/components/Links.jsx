import React from "react";

export const Links = ({ links ,className }) => {
  return (
    <ul id={className}>
      {links.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
};

export default Links;