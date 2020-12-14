import React, { forwardRef } from "react";
import dataPrices from "../../../data/PriceTables/price-appstyle-data.json";
import PriceItemApp from "./PriceItemApp";
import ReactWOW from "react-wow";

const PricingAppStyle = forwardRef((props, ref) => (
  <section className="pt-0 white-bg skew-bg" id="pricing" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <ReactWOW animation="fadeInUp" delay="0.1s">
            <div className="pt-50 pb-50">
              <h1 className="font-700">Our Pricing</h1>
              <div className="mt-30">
                <p>
                  We are a fully in-house digital agency focusing on branding,
                  marketing, web design and development with clients ranging
                  from start-ups, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
            </div>
          </ReactWOW>
        </div>
        {dataPrices.map((item) => (
          <PriceItemApp
            key={item.id}
            title={item.title}
            currency={item.currency}
            price={item.price}
            features={item.features}
            textButton={item.textButton}
          />
        ))}
      </div>
    </div>
  </section>
));

export default PricingAppStyle;
