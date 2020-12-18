import React from "react";
import parse from "html-react-parser";
import ContactForm from "../ContactUs/ContactForm";
import IMG from "../../assets/images/help-img.jpg"

const CTAOne = ({ title, tagline, bg, textButton, linkButton, children }) => (
  <section
    className={
      "pt-50 pb-50 " + (bg && bg === "dark" ? "dark-bg" : "default-bg")
    }
  >
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="cta-heading-left">
            {tagline && <p className="subtitle mt-20">{tagline}</p>}
            {title && <h3>{title}</h3>}
            <img src={IMG}></img>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div className="cta-heading-right ">
            <p className="mt-20 content-text">{children && parse(children)}</p>
            <a href="mailto:Amishmaqbool@gmail.com" className="mt-20 content-text">info@ladstech.com</a>
            <p className="mt-70">
              {/* <a
                className={
                  "btn btn-rounded " +
                  (bg && bg === "dark" ? "btn-color" : "btn-white")
                }
                href={linkButton}
              >
                {textButton}
              </a> */}
               <ContactForm title="Contact Us" tagline="Stay in Touch" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTAOne;
