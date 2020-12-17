import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                Were a creative technology lab that delivers ground breaking experiences through web and mobile development, we have no boundaries in terms of ability if a client needs a certain piece of functionality or flow, Lads Technology will put time and effort into learning what it will take to complete that task.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                {/* <h5 className="widget-title">Work With Us</h5>
                <ul>
                  <li>
                    <a href="#!">Themeforest</a>
                  </li>
                  <li>
                    <a href="#!">Audio Jungle</a>
                  </li>
                  <li>
                    <a href="#!">Code Canyon</a>
                  </li>
                  <li>
                    <a href="#!">Video Hive</a>
                  </li>
                  <li>
                    <a href="#!">Envato Market</a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                {/* <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-simple.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="service-simple.html">Our Services</a>
                  </li>
                  <li>
                    <a href="term-condition.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Plaza number 206 hub commercial bahira town phase 8</a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="#!">+44 1632 960290</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="#!">helloscoda@gmail.com</a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href="#!">www.envato.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
