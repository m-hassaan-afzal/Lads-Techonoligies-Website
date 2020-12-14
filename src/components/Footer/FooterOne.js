import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
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
                  We are a fully in-house digital agency focusing on branding,
                  marketing, web design and development with clients ranging
                  from start-ups, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed varius quam ut magna ultricies
                  pellentesque.
                </p>
              </div>
            </div>
            
         
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Park Lane Llandrindod Wells, LD7 9QW</a>
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
