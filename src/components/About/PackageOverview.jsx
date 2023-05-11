import React from "react";
import blackbox from "./../../images/box.png";

function PackageOverview() {
  return (
    <section>
      <div className="packageoverview">
        <div className="po--description">
          Black Box
          <div className="po--d-covered">Testing</div>
          <div className="po--d--details">
            At InTSecurity, we offer comprehensive black box testing services to
            identify vulnerabilities from an outsider's perspective. We believe
            that effective security requires a proactive approach. Our black box
            testing services are designed to uncover vulnerabilities from the
            outside, enabling you to fortify your defenses, protect your
            valuable assets, and maintain the trust of your customers, without
            even sharing a single line of code.
            {/* In today's rapidly evolving threat landscape, it's more important than
          ever to have a robust and reliable security solution in place to
          protect your business. INT{"{Security}"} offer a wide range of
          security solutions and services to help businesses of all sizes
          mitigate risks, detect and respond to threats, and stay compliant with
          industry regulations. Check out pricing for more details. */}
          </div>
          {/* <button className="about--pricing">
          {" "}
          Pricing <span>&#x2192;</span>
        </button> */}
        </div>
        <div className="blackbox">
          <img className="blackbox--main" src={blackbox} alt="blackbox"></img>
          <span className="box--shadow"></span>
        </div>
      </div>
    </section>
  );
}

export default PackageOverview;
