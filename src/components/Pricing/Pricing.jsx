import React from "react";
import "./pricing.css";
import PricingCards from "../Designs/PricingCards";

function Pricing() {
  return (
    <div className="pricing">
      <div className="p--title">
        Choose the<span className="blue"> security solution</span> you need.
      </div>
      <div className="pricing--cards">
        <PricingCards />
        <PricingCards />
        <PricingCards />
      </div>
    </div>
  );
}

export default Pricing;
