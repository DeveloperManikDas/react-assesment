import React from "react";

export const Links = ({ links }) => {
  return (
    <ul>
      {links.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
};

export default Links;