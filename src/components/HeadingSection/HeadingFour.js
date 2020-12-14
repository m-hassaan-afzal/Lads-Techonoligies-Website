import React from "react";
import ReactWOW from "react-wow";

const HeadingFour = ({ title, tagline }) => (
  <div className="col-sm-8 section-heading">
    <ReactWOW animation="fadeTop" delay="0.1s">
      <h2 className="text-uppercase white-color">{title}</h2>
    </ReactWOW>
    <ReactWOW animation="fadeTop" delay="0.2s">
      <h4 className="text-uppercase default-color">- {tagline} -</h4>
    </ReactWOW>
  </div>
);

export default HeadingFour;
