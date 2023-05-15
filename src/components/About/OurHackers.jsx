import React from "react";
import AbbLogo from "./../../images/abb.png";
import ZomatoLogo from "./../../images/zomato.png";
import AmericanSystems from "./../../images/americanSystems.png";

function OurHackers() {
  const Data = HackersData.map((e) => {
    return (
      <div key={e.key} className="companyDiv">
        <img
          className="companyImg"
          src={e.companyLogo}
          alt={e.companyName}
        ></img>
      </div>
    );
  });
  return (
    <div className="ourhackers">
      <div className="oh--title why--content--head">
        Our <span className="po--d-covered">Hackers</span> have{" "}
        <span className="po--d-covered">Hacked</span> into
      </div>
      <div className="oh--companies">{Data}</div>
    </div>
  );
}

const HackersData = [
  {
    key: 1,
    companyName: "ABB.com",
    companyLogo: AbbLogo,
  },
  {
    key: 2,
    companyName: "Zomato",
    companyLogo: ZomatoLogo,
  },
  {
    key: 3,
    companyName: "American Systems",
    companyLogo: AmericanSystems,
  },
];

export default OurHackers;
