import React from "react";
import Plan from "./Plan";
import { plansData } from "./Data"; 

export const Plans = () => {
  return (
    <section className="plans">
      {plansData.map((item, index) => (
        <Plan key={index} item={item} />
      ))}
    </section>
  );
};

export default Plans;
