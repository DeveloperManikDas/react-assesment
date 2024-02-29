import React from "react";
import TextIcon from "./TextIcon";
import Links from "./Links";
import { categoriesData } from "./Data";
import { contactLinks } from "./Data";
const Footer = () => {
  return (
    <footer>
      <section className="Categories">
        <div>CATEGORIES</div>
        <Links links={categoriesData} />{" "}
      </section>
      <section className="Contact">
        <div>CONTACT</div>
        <Links links={contactLinks} />
      </section>
      <TextIcon text="United States" icon="downarrow" />
    </footer>
  );
};

export default Footer;