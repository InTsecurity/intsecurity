import React from "react";
import question from "./../../images/questionmark.png";

function Why() {
  return (
    <div className="about--why">
      <div className="why--img">
        <img
          src={question}
          className="blackbox--main question--img"
          alt="Questionmark"
        ></img>
        <span className="box--shadow question--shadow"></span>
      </div>
      <div className="po--description why--content ">
        <div className="why--content--head">Why</div>
        <div className="why--content--head">
          <span className="po--d-covered">INT</span>
          <span className="font">{"{"} </span>SECURITY
          <span className="font">{"}"}?</span>
        </div>
        <div className="why--main">
          In today's rapidly evolving threat landscape, it's more important than
          ever to have a robust and reliable security solution in place to
          protect your business. INT{"{Security}"} offer a wide range of
          security solutions and services to help businesses of all sizes
          mitigate risks, detect and respond to threats, and stay compliant with
          industry regulations. Check out pricing for more details.
        </div>
      </div>
    </div>
  );
}

export default Why;
