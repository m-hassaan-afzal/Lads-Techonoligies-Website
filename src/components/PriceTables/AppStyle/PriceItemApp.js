import React from "react";
import ReactWOW from "react-wow";

const PriceItemApp = ({ title, currency, price, features, textButton }) => (
  <ReactWOW animation="fadeInUp" delay="0.1s">
    <div className="col-md-4 col-sm-4">
      <div className="pricing-box wow fadeInUp" data-wow-delay="0.3s">
        <h3 className="font-700">{title}</h3>
        <h1 className="blue-color">
          <sup>{currency}</sup>
          <span>{price}</span>
        </h1>
        <ul>
          {features.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul>
        <div className="pricing-box-bottom">
          <a href="!#" className="btn btn-color btn-circle">
            {textButton}
          </a>
        </div>
      </div>
    </div>
  </ReactWOW>
);

export default PriceItemApp;
