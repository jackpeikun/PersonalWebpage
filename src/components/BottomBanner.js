import React from "react";
import "./BottomBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export default class Bottom extends React.Component {
  render() {
    let email = "peikun.chen@mail.utoronto.ca";
    let linkedinURL = "https://www.linkedin.com/in/peikunchen";
    let facebookURL = "https://www.facebook.com/jackpeikun";
    let instagramURL = "https://www.instagram.com/bigpotato1020/";

    return (
      <div className="component-bottom row ">
        <div className="component-box component-left-box">
          <h3>Contact Me</h3>
          <br />
          <h4>{email}</h4>
        </div>
        <div className="component-box component-right-box">
          <h3>Connect</h3>
          <br />
          <div className="row">
            <div className="component-icon-wrapper col-lg-5 col-md-5 col-sm-5 smIconL">
              <a href={linkedinURL}>
                <FontAwesomeIcon
                  className="component-icon"
                  icon={faLinkedinIn}
                />
              </a>
            </div>
            <div className="component-icon-wrapper col-lg-2 col-md-2 col-sm-2">
              <a href={facebookURL}>
                <FontAwesomeIcon
                  className="component-icon"
                  icon={faFacebookF}
                />
              </a>
            </div>
            <div className="component-icon-wrapper col-lg-5 col-md-5 col-sm-5 smIconR">
              <a href={instagramURL}>
                <FontAwesomeIcon
                  className="component-icon"
                  icon={faInstagram}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="component-copyright">
          Copyright © 2019 Peikun Chen All Rights Reserved.
        </div>
      </div>
    );
  }
}
