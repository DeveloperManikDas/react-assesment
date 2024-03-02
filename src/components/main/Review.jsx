import React from "react";
import Button from "../elements/Button";
import { MdStar, MdStarHalf } from "react-icons/md"; // Import star icons

export const Review = ({ review }) => {
  const renderStars = () => {
    const rating = review.starCount ;
    const stars = [];

    // Add full stars
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<MdStar key={i} style={{ color: "#FFB80F" }} />);
    }

    // Add half star if rating has decimal part
    if (rating % 1 !== 0) {
      stars.push(<MdStarHalf key="half" style={{ color: "#FFB80F" }} />);
    }

    // Add remaining empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<MdStar key={i + Math.ceil(rating)} style={{ color: "#FFB80F", opacity: "0.5" }} />);
    }

    return stars;
  };

  return (
    <div className="review-section">
      <div className="rating-section">
        <h2 className="rating">{review.rating}</h2>
        <span className="rating-text">{review.ratingText} </span>
        <span className="star">
          {renderStars()}
        </span>
      </div>
      <div className="view-button">
        <Button text="View" width={232} />
      </div>
    </div>
  );
};

export default Review;
