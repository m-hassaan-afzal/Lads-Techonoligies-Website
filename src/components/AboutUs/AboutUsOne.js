import React from "react";
import ReactWow from "react-wow";
import Icofont from "react-icofont";

const AboutUsOne = ({
  title,
  textButton,
  linkButton,
  image,
  linkImage,
  children,
  toggler,
  setToggler,
}) => {
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <ReactWow animation="fadeLeft" delay="0.1s">
            <div className="col-md-6 mb-30">
              <h2 className="text-uppercase font-700 mt-0">{title}</h2>
              {children}
              <a
                href={linkButton}
                className="btn btn-color btn-rounded btn-animate mt-20"
              >
                <span>
                  {textButton ? textButton : "Read more"}
                  <Icofont icon="arrow-right" />
                </span>
              </a>
            </div>
          </ReactWow>
          <ReactWow animation="fadeTop" delay="0.2s">
          <div className="col-md-6">
            <div className="arcon-video-box">
              <img className="img-responsive" src={image} alt="" />
              <div className="arcon-video-box_overlay">
                <div className="center-layout">
                  <div className="v-align-middle">
                    <a
                      className="popup-youtube"
                      href={linkImage}
                      onClick={(e) => {
                        e.preventDefault();
                        setToggler(!toggler);
                      }}
                    >
                      <div className="play-button">
                        <Icofont icon="youtube-play" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ReactWow>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOne;
