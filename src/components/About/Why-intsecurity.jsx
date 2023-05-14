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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis
          nesciunt aperiam nostrum ducimus magni corporis cum nulla ad deleniti
          mollitia ratione soluta quasi, non debitis aliquid sapiente nemo
          quisquam iusto, voluptate tempore dolores, provident unde! Asperiores
          voluptates accusantium ipsum odio velit iste, architecto et ipsam
          excepturi consectetur minima eum?
        </div>
      </div>
    </div>
  );
}

export default Why;
