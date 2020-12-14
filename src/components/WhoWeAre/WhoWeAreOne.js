import React from "react";
import Icofont from "react-icofont";
import ReactWow from "react-wow";
import { useLax } from "use-lax";
import aboutData from "../../data/About/about-home-agency-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const WhoWeAreOne = ({ title, tagline, children, verticalWord, horizontalWord }) => {
  useLax();
  return (
    <section className="first-ico-box">
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="left_parallax">
        <div className="vertical-text">
          <h3
            data-lax-preset="driftRight"
            data-lax-optimize="true"
            style={{ color: "blue" }}
            className="lax chunkyText font-700 dark-color"
          >
            {verticalWord}
          </h3>
        </div>
      </div>
      <div className="right_parallax">
        <h3
          data-lax-preset="driftLeft"
          data-lax-optimize={true}
          className="lax chunkyText font-700 red-color"
        >
          {horizontalWord}
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <HeadingSection title={title} tagline={tagline}>
            {children}
        </HeadingSection>
        </div>
        <div className="row mt-50">
          {aboutData.map((service, i) => {
            return (
              <ReactWow
                key={service.id}
                animation="fadeInUp"
                delay={`0.${i + 1}s`}
              >
                {/* <div className="col-md-4 feature-box text-center radius-icon">
                  <Icofont
                    icon={service.icon}
                    className="font-50px default-icon"
                  />
                  <h4 className="text-uppercase">{service.title}</h4>
                  <p>{service.text}</p>
                </div> */}
              </ReactWow>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreOne;
