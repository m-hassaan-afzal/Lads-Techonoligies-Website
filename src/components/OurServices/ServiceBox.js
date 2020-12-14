import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const ServiceBox = ({ icon, title, children }) => (
  <ReactWOW animation="fadeTop" delay="0.1s">
    <div className="col-md-12 feature-box text-left mb-50 col-sm-6">
      <div className="pull-left">
        <Icofont icon={icon} className="font-60px default-icon" />
      </div>
      <div className="pull-right">
        <h5 className="mt-0">{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  </ReactWOW>
);

export default ServiceBox;
