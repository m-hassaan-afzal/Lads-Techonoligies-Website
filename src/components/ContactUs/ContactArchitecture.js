import React, { forwardRef } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ContactFormThree from "./ContactFormThree";

const ContactArchitecture = forwardRef(({ title, tagline, text }, ref) => (
  <section className="contact-us" id="contact" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline}>
          {text}
        </HeadingSection>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <ContactFormThree />
        </div>
      </div>
    </div>
  </section>
));

export default ContactArchitecture;
