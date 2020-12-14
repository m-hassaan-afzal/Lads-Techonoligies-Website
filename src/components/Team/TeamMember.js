import React from "react";
import Icofont from "react-icofont";
import ReactWow from "react-wow";

const TeamMember = ({ name, role, image, social, delay, removePadding }) => {
  return (
    <ReactWow animation="fadeInUp" delay={`0.${delay}s`}>
      <div
        className={
          "col-md-3 col-sm-6 col-xs-12 " +
          (removePadding === "true" ? "remove-padding" : "")
        }
      >
        <div className="team-member-container gallery-image-hover">
          <img
            src={require("../../assets/images/" + image)}
            className="img-responsive"
            alt={image}
          />
          <div className="member-caption">
            <div className="member-description text-center">
              <div className="member-description-wrap">
                <h4 className="member-title">{name}</h4>
                <p className="member-subtitle">{role}</p>
                <ul className="member-icons">
                  {social.map((item) => {
                    return (
                      <li className="social-icon" key={item.id}>
                        <a href={item.link}>
                          <Icofont icon={item.icon} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactWow>
  );
};

export default TeamMember;
