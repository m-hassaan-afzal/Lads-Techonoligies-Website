import React from "react";
import Swiper from "react-id-swiper";
import ReactTextRotator from "react-text-rotator";

const HeroSliderCreative = ({ data }) => (
  <section className="pt-0 pb-0">
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper>
          {
            <li key={data.id}>
              <div
                className="slide-img"
                style={{
                  background: `url(${require("../../assets/images/" +
                    data.image)}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <div
                className={
                  "hero-text-wrap " + (data.bg ? "gradient-overlay-bg" : "")
                }
              >
                <div className="hero-text white-color">
                  <div className="container text-left">
                    <h3 className="white-color font-400 letter-spacing-5">
                      {data.tagline}
                    </h3>
                    <h2 className="white-color font-700">
                      {data.title}
                      <div className="tags-slider animate-caption capitalize">
                        <h2 className="slider-tag white-color mt-20 text-left">
                          <ReactTextRotator
                            content={data.tags}
                            time={3000}
                            startDelay={2000}
                          />
                        </h2>
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          }
        </Swiper>
      </ul>
    </div>
  </section>
);

export default HeroSliderCreative;
