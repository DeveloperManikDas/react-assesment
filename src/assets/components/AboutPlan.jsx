import React from 'react';
import TextIcon from "./TextIcon"

export const AboutPlan = ({plan}) => {
  return (
    <div className="plan-about">
    <div className="about">
      <p>
        <strong>{plan.title}</strong>
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
      <TextIcon icon={"downarrow"} text={"Show more"} />
    </div>
  </div>
  )
}

export default AboutPlan;