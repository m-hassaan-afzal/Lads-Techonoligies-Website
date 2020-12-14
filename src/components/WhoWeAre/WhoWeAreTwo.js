import React from "react";
import servicesData from "../../data/About/about-page-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import FeatureBoxThree from "../../elements/FeatureBox/FeatureBoxThree";

const WhoWeAreTwo = ({ title, tagline }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <HeadingSection title={title} tagline={tagline} />
        </div>
      </div>
      <div className="row mt-50">
        {servicesData.map((feature) => (
          <FeatureBoxThree
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreTwo;
