import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";

const HeroSliderCombined = ({ data, font }) => {
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
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {data.map((slide) =>
              slide.image ? (
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
                      "hero-text-wrap " +
                      (slide.bg ? "gradient-overlay-bg" : "")
                    }
                  >
                    <div className="hero-text white-color">
                      <div className="container text-left">
                        <h2
                          className={
                            font
                              ? font
                              : "white-color font-500 letter-spacing-5 wow fadeInUp"
                          }
                        >
                          {slide.title ? parse(slide.title) : ""}
                        </h2>
                        <h3 className="white-color font-400">
                          {slide.text ? parse(slide.text) : ""}
                        </h3>
                        {slide.buttons.length !== 0 ? (
                          <p className="text-left mt-30">
                            <SliderButtons buttons={slide.buttons} />
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={slide.id}>
                  <div className="hero-text-wrap gradient-overlay-bg">
                    <div className="hero-text white-color">
                      <div className="container text-left">
                        <h2 className="cardo-font">
                          {slide.title ? parse(slide.title) : ""}
                        </h2>
                        <p className="text-left mt-30">
                          <SliderButtons buttons={slide.buttons} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="homepage-hero-module">
                    <div className="video-container">
                      <div className="filter"></div>
                      <video autoPlay loop className="fillWidth">
                        {slide.videoMp4 && (
                          <source
                            src={require("../../assets/images/" +
                              slide.videoMp4)}
                            type="video/mp4"
                          />
                        )}
                        {slide.videoWeb && (
                          <source
                            src={require("../../assets/images/" +
                              slide.videoWeb)}
                            type="video/webm"
                          />
                        )}
                      </video>
                      <div className="poster hidden">
                        <img
                          src={require("../../assets/images/" +
                            slide.videoImage)}
                          alt="video-img"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default HeroSliderCombined;
