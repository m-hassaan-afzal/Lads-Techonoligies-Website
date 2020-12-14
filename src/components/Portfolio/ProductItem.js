import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const ProductItem = ({ image, links, openLightbox }) => (
  <ReactWOW animation="fadeIn" delay="0.2s">
    <li className="portfolio-item portfolio-masonry-item">
      <ReactWOW animation="fadeIn">
        <div className="product-wrap">
          <img src={require("../../assets/images/" + image)} alt="" />
          <div className="product-caption">
            <div className="product-description text-center">
              <div className="product-description-wrap">
                <div className="product-title">
                  <a
                    href="assets/images/gallery/img-07.jpg"
                    className="alpha-lightbox"
                    onClick={(e) => openLightbox(e, image)}
                  >
                    <Icofont icon="plus" className="font-40px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
    </li>
  </ReactWOW>
);

export default ProductItem;
