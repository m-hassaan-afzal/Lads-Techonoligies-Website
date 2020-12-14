import React from "react";
import ReactWow from "react-wow";
import dataAccordion from "../../data/Accordion/accordions-data.json";
import AccordionsComponent from "../Accordions/AccordionsComponent";
import Icofont from "react-icofont";

const AboutUsTwo = ({ title, image, toggler, setToggler }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ReactWow animation="fadeIn" delay="0.1s">
            <h2 className="text-uppercase font-700 mt-0">{title}</h2>
          </ReactWow>
          <AccordionsComponent
            data={dataAccordion}
            classAppend="mt-50"
            items={3}
          />
        </div>
        <div className="col-md-6">
          <div className="arcon-video-box mt-30">
            <img className="img-responsive" src={image} alt="" />
            <div className="arcon-video-box_overlay">
              <div className="center-layout">
                <div className="v-align-middle">
                  <a
                    className="popup-youtube"
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggler(!toggler);
                    }}
                  >
                    <div className="play-button">
                      <Icofont icon="ui-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsTwo;
