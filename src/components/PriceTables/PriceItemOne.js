import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const PriceItemOne = ({
  icon,
  title,
  currency,
  price,
  features,
  textButton,
  btnType,
  tableType,
  featured,
}) => (
  <ReactWOW animation="fadeTop" delay="0.1s">
    <div
      className={
        "col-md-3 pricing-table" +
        (featured === "true" ? "-featured" : "") +
        " col-sm-6"
      }
    >
      <div
        className={
          "pricing-box " + (tableType === "rounded" ? "border-radius-25" : "")
        }
      >
        <Icofont icon={icon} />
        <h4>{title}</h4>
        <h2>
          <sup>{currency}</sup>
          <span>{price}</span>
        </h2>
        <ul>
          {features.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul>
        <div className="pricing-box-bottom">
          <a
            href="!#"
            className={
              "btn btn-color " +
              (btnType === "circle" ? "btn-circle" : "btn-rounded")
            }
          >
            <span>{textButton}</span>
          </a>
        </div>
      </div>
    </div>
  </ReactWOW>
);

export default PriceItemOne;
