import React from "react";
import dataServices from "../../data/Services/our-services-two.json";
import FeatureBoxOne from "../../elements/FeatureBox/FeatureBoxOne";
import ReactWOW from "react-wow";

const WelcomeFeatures = ({ title, tagline }) => (
  <div className="col-md-4 col-sm-12 blue-bg">
    <div className="col-inner spacer white-color">
      <ReactWOW animation="fadeTop" delay="0.1s">
        <h2 className="cardo-font font-500">{title}</h2>
      </ReactWOW>
      <ReactWOW animation="fadeTop" delay="0.2s">
        <h4 className="text-uppercase cardo-font dark-color">{tagline}</h4>
      </ReactWOW>
      <div className="pt-40 pb-20">
        {dataServices.map((feature) => (
          <FeatureBoxOne
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
          >
            {feature.text}
          </FeatureBoxOne>
        ))}
      </div>
    </div>
  </div>
);

export default WelcomeFeatures;
