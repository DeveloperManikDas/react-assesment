import React from "react";

export const Figure = ({img}) => {
  return (
    <>
      <figure className="image-container">
        <h2 className="index">{img.index}</h2>
        <img src={img.url} alt={img.altText} />
        <figcaption>{img.caption}</figcaption>
      </figure>
    </>
  );
};

export default Figure;