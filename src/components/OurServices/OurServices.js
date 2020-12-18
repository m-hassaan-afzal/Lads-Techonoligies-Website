import React, { forwardRef } from "react";
import dataServices from "../../data/Services/our-services-two.json";


import Icofont from "react-icofont";
const OurServices = forwardRef(({ serviceImg, title, tagline }, ref) => (
  <section className="red-bg">
  <div className="container">
    <div className="row">
      <div className="col-md-8 section-heading">
        <h2 className="text-uppercase white-color">What we DO</h2>
        <hr className="text-center white-bg" />
      </div>
    </div>
    <div className="row service-box-style-01 mt-50">
      {dataServices.map((service) => (
        <div className="col-md-4 col-sm-6 col" key={service.id}>
          <div className="flipper">
            <div className="text-center mb-50 main-box">
              <div className="box-front height-500px white-bg">
                <div className="content-wrap">
                  <Icofont
                    icon={service.icon}
                    className="font-40px red-color"
                  />
                  <h3 className="font-600">{service.title}</h3>
                  <p className="font-400 mt-20 dark-color">{service.text}</p>
                </div>
              </div>
              <div style={{border:"3px solid white"}} className="box-back height-500px red-bg">
                <div className="content-wrap">
                  <Icofont
                    icon={service.icon}
                    className="font-40px white-color"
                  />
                  <h3 className="font-600 white-color">{service.title}</h3>
                  <p className="font-400 mt-20 white-color">{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
));

export default OurServices;



//

