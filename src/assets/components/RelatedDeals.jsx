import React from "react";
import Button from "./Button";
import Heading from "./Heading";

const relatedPlansData = [
  {
    index: 1,
    imgUrl: `images/download.png`,
    discount: `20% off`,
    offerValid: `Limited Deal`,
    planName: `Webbuilder 1`,
    planDetails: `Computer Modern classic with wix support`,
    price: `$39.96`,
    beforePrice: `$49.96`,
    buttonText: `View Deal`,
  },
  {
    index: 2,
    imgUrl: `images/download.png`,
    discount: `30% off`,
    offerValid: `Special Offer`,
    planName: `Webbuilder 2`,
    planDetails: `Modern design with wordpress support`,
    price: `$49.96`,
    beforePrice: `$69.96`,
    buttonText: `View Deal`,
  },
  {
    index: 3,
    imgUrl: `images/download.png`,
    discount: `25% off`,
    offerValid: `Flash Sale`,
    planName: `Webbuilder 3`,
    planDetails: `Sleek design with squarespace support`,
    price: `$59.96`,
    beforePrice: `$79.96`,
    buttonText: `View Deal`,
  },
];

export const RelatedDeals = () => {
  return (
    <section className="related-deals">
      <Heading text={"Related deals you might like for"} />

      <div className="related-deals-container">
        {relatedPlansData.map((plan, index) => (
          <div className="related-plans" key={index}>
            <div className="image-container2">
              <img src={plan.imgUrl} alt={`Plan ${index + 1}`} />
            </div>

            <div className="discount">
              <span className="discount-percent">{plan.discount}</span>
              <span className="offer-valid">{plan.offerValid}</span>
            </div>

            <h4 className="plan-name">{plan.planName}</h4>

            <p className="plan-details">{plan.planDetails}</p>

            <div className="pricing">
              <span className="price">{plan.price}</span>
              <span className="before-price">{plan.beforePrice}</span>
              <span className="discount-percent-red">{`(${plan.discount})`}</span>
            </div>
            <Button text={plan.buttonText} width={292}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedDeals;
