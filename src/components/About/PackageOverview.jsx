import React from "react";

function PackageOverview() {
  return (
    <div className="packageoverview">
      <div className="po--description">
        We've got you
        <div className="po--d-covered">covered</div>
        <div className="po--d--details">
          In today's rapidly evolving threat landscape, it's more important than
          ever to have a robust and reliable security solution in place to
          protect your business. INT{"{Security}"} offer a wide range of
          security solutions and services to help businesses of all sizes
          mitigate risks, detect and respond to threats, and stay compliant with
          industry regulations. Check out pricing for more details.
        </div>
        <button className="about--pricing">
          {" "}
          Pricing <span>&#x2192;</span>
        </button>
      </div>
    </div>
  );
}

export default PackageOverview;
