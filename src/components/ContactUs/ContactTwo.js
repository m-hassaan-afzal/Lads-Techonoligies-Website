import React, { forwardRef } from 'react';
import ContactFormTwo from './ContactFormTwo';
import HeadingTwo from '../HeadingSection/HeadingTwo';

const ContactTwo = forwardRef(({ title, bg }, ref) => (
    <section className={"contact-us " + (bg === "color" ? "default-bg" : "")} id="contact" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingTwo title={title} />
      </div>
      <div className="row mt-50">
        <div className="col-sm-12 col-md-offset-2 col-md-8">
          <ContactFormTwo />
        </div>
      </div>
    </div>
  </section>
));

export default ContactTwo;