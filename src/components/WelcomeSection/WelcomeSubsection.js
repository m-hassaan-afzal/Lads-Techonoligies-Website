import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const WelcomeSubsection = ({
  title,
  tagline,
  image,
  textButton,
  children,
  toggler,
  handleToggler,
}) => (
  <div className="container-fluid">
    <div className="row row-flex flex-center">
      <div className="col-md-6 col-sm-12 dark-bg">
        <div className="col-inner pt-70 pb-50 spacer white-color">
          <ReactWOW animation="fadeTop" delay="0.1s">
            <h2 className="cardo-font font-500">{title}</h2>
          </ReactWOW>
          <ReactWOW animation="fadeTop" delay="0.2s">
            <h4 className="text-uppercase default-color cardo-font">
              {tagline}
            </h4>
          </ReactWOW>
          <ReactWOW animation="fadeTop" delay="0.3s">
            <div className="mt-30">
              <p>{children}</p>
              <p className="mt-20">
                <a
                  href="!#"
                  className="btn btn-color btn-circle popup-youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggler();
                  }}
                >
                  {textButton}
                  <span className="icon">
                    <Icofont icon="ui-play" />
                  </span>
                </a>
              </p>
            </div>
          </ReactWOW>
        </div>
      </div>
      <div
        className="col-md-6 col-sm-12 bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  </div>
);

export default WelcomeSubsection;
