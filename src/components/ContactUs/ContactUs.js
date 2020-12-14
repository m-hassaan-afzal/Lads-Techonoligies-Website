import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";
import Map from "../Maps/Map";
import FooterOne from "../../components/Footer/FooterOne";

import Loader from "./../../components/Loader/Loader";
const ContactUs = forwardRef((props, ref) => (
  <Loader>

    <section className="contact-us white-bg" id="contact" ref={ref}>
      <div className="container">
        <div className="clearfix">
         
          <div className="col-about-left col-md-6 text-left">
            <ContactForm title="Contact Us" tagline="Stay in Touch" />
          </div>
        </div>
      </div>
    </section>
     <FooterOne />
    </Loader>
  ));

export default ContactUs;
