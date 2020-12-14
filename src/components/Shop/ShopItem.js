import React from "react";

const ShopItem = ({ layout, image, title, currency, price, oldPrice }) => (
  <div
    className={
      "col-sm-6 " +
      (layout === "standard" ? "col-md-6" : "col-md-3") +
      (layout === "masonry" ? " col-xs-12 portfolio-masonry-item" : "")
    }
  >
    <div className="product">
      <div className="product-wrap">
        <img
          src={require("../../assets/images/" + image)}
          className="img-responsive"
          alt="team-01"
        />
        <div className="product-caption">
          <div className="product-description text-center">
            <div className="product-description-wrap">
              <div className="product-title">
                <a href="!#" className="btn btn-color btn-circle">
                  ADD TO CART
                  <span className="icon">
                    <i className="mdi mdi-cart"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <h4>{title}</h4>
        <p>
          11.61 <span className="old-price">$18.48</span>
        </p>
      </div>
    </div>
  </div>
);

export default ShopItem;
