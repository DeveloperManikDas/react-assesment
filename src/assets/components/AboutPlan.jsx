import React from 'react';
import { GoChevronDown } from "react-icons/go";

export const AboutPlan = ({plan}) => {
  return (
    <div className="plan-about">
    <div className="about">
      <p>
        <strong className='plan-title'>{plan.title}</strong>
        {plan.description}
      </p>
    </div>
    <div className="main-highlight">
      <h4>Main Highlight</h4>
      <div className='highlight-secction'>
        <p className="main-highlight-text">{plan.highlightText}</p>
      </div>
    </div>
    <div className="show-more">
      <span>Show more</span>
      <GoChevronDown />
    </div>
  </div>
  )
}

export default AboutPlan;