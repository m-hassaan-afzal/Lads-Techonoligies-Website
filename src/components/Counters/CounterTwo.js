import React, { useState } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import ReactWow from 'react-wow';
import VisibilitySensor from "react-visibility-sensor";
import counterData from "../../data/Counters/counter-data2.json";

const CounterTwo = ({ bg }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className={"pt-80 pb-80 " + (bg  ? bg : "dark-bg")}>
      <div className="container">
        <div className="row">
          {counterData.map((counter, i) => (
            <ReactWow
              key={counter.id}
              animation="fadeInUp"
              delay={`0.${i + 1}s`}
            >
              <div
                className="col-md-3 counter text-center col-sm-6 wow fadeTop"
                data-wow-delay="0.1s"
              >
                <Icofont
                  icon={counter.icon}
                  className="default-icon font-30px"
                />
                <h2 className={"count font-700 " + (bg==="white-bg" ? "" : "white-color")}>
                  <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                    <CountUp end={viewed ? counter.value : 0} />
                  </VisibilitySensor>
                </h2>
                <h3 className={bg==="white-bg" ? "dark-color" : ""}>{counter.title}</h3>
              </div>
            </ReactWow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
