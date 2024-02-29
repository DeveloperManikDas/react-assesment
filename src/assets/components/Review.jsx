import React from "react";
import Button from "./Button";
export const Review = ({ review }) => {
  return (
    <div className="review-section">
      <div className="rating-section">
        <h3 className="rating">{review.rating}</h3>
        <span className="rating-text">{review.ratingText} </span>
        <span className="star">{review.starCount}</span>
      </div>
      <div className="view-button-section">
        <Button text="View" />
      </div>
    </div>
  );
};
export default Review;
