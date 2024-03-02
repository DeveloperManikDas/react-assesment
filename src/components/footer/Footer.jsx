import React from "react";
import TextIcon from "../elements/TextIcon";
import Links from "../elements/Links";
import { categoriesData } from "../Data";
import { contactLinks } from "../Data";
const Footer = () => {
  return (
    <footer>
      <section className="categories">
        <div>CATEGORIES</div>
        <Links links={categoriesData} />{" "}
      </section>
      <section className="contact">
        <div>CONTACT</div>
        <Links links={contactLinks} />
      </section>
      <TextIcon text="United States" icon="downarrow" />
    </footer>
  );
};

export default Footer;
