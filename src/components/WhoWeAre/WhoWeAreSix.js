import React from "react";
import dataDigital from "../../data/Services/our-services-one.json";
import HeadingFive from "../HeadingSection/HeadingFive";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const WhoWeAreSix = ({ title, tagline }) => (
  <section className="first-ico-box white-bg">
    <div className="container">
      <div className="row">
        <HeadingFive title={title} tagline={tagline} />
      </div>
      <div className="row mt-50">
        {dataDigital.map((service) => (
          <ReactWOW key={service.id} animation="fadeTop" delay="0.1s">
            <div className="col-md-4 feature-box text-center">
              <Icofont
                icon={service.icon}
                className="font-50px gradient-color"
              />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </ReactWOW>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreSix;
