import React from "react";
import "./About.css";
import PackageOverview from "./PackageOverview";
import Why from "./Why-intsecurity";
import Support from "./Support";

function About() {
  return (
    <div className="about" id="about">
      <div className="about--title">
        Secure yourself from hackers by hackers!
      </div>
      <div className="about--head">
        Take the <span className="about--underline"></span>
        <span className="about--underline underline-2"></span>
        Edge off
        <div className="shade">
          Vulner<div className="white">abilities</div>
        </div>
      </div>
      <div className="about--secure">
        Helping startups to obtain cyber security solutions. A complete
        vulnerability assesment directly form the Ethical Hackers around the
        globe.
      </div>
      <div className="about--button"></div>
      <button className="about--contact-us">
        Contact Us <span>&#x2192;</span>
      </button>
      <PackageOverview />
      <Why />
      <Support />
    </div>
  );
}

export default About;
