import React from "react";
import MainHighlight from "./MainHighlight";
import { GoChevronDown } from "react-icons/go";
import Values from "./Values"
export const AboutPlan = ({ plan }) => {
  return (
    <div className="plan-about">
      <div className="about">
        <p>
          <strong className="plan-title">{plan.title}</strong>
          {plan.description}
        </p>
      </div>
      <div className="main-highlight">
        <h4>Main Highlight</h4>
        <div className="highlight-secction">
          {plan.isHighlightText ? (
            <p className="main-highlight-text">{plan.highlightText}</p>
          ) : (
            <div>
              <MainHighlight keyHighlights={plan.keyHighlights} />
              <p>
                <strong style={{color: "#2C384A", fontWeight: 400}}>Why we love it</strong>
              </p>
              {/* <IconText icon={"done-blue"} text={"Documentation"} />
              <IconText icon={"done-blue"} text={"Easy Use"} />
              <IconText icon={"done-blue"} text={"Out Of Box"} /> */}

              <Values />

            </div>
          )}
        </div>
      </div>
      <div className="show-more">
        <span>Show more</span>
        <GoChevronDown />
      </div>
    </div>
  );
};

export default AboutPlan;
