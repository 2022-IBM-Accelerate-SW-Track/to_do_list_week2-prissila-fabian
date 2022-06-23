import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Prissila Fabian</div>
            <div className="brief_description">
              Hello! I am a Senior at California State Northridge studying Computer Science and Computer Mathematics.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
