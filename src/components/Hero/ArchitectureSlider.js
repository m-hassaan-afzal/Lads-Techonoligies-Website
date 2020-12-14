import React, { forwardRef } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const ArchitectureSlider = forwardRef(({ data }, ref) => {
  const params = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <section className="pt-0 pb-0" id="home" ref={ref}>
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {data.map((slide) => (
              <li key={slide.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${require("../../assets/images/" +
                      slide.image)}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className={
                    "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text white-color">
                    <div className="container text-center">
                      <h3 className="white-color font-400 letter-spacing-5 text-uppercase">
                        {slide.tagline ? slide.tagline : ""}
                      </h3>
                      <h2 className="white-color font-700">{slide.title}</h2>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
});

export default ArchitectureSlider;
