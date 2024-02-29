import React from "react";
import Figure from "./Figure";
import AboutPlan from "./AboutPlan";
import Review from "./Review";

export const Plan = ({ item }) => {
  return (
    <div className="plan">
      <Figure img={item.img} />
      <AboutPlan plan={item.plan} />
      <Review review={item.review} />
    </div>
  );
};

export default Plan;
