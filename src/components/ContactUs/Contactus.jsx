import React from "react";
import "./ContactUs.css";

function Contactus() {
  return (
    <div className="contactus">
      <div className="packageoverview contactus--form">
        <div className="contactus--content">
          <div className="contactus--head">Let's Talk!</div>
          <div className="cus--quote">
            Don't leave your business vulnerable to cyber attacks. Protect it
            with our expert cyber security solutions. Contact us now.
          </div>
          <form>
            <div className="cus--name">
              <div className="cus--fname">
                <label htmlFor="fname">First name:</label>
                <input className="fname" placeholder="John"></input>
              </div>
              <div className="cus--fname cus--lname">
                <label htmlFor="fname">Last name:</label>
                <input className="fname" placeholder="Carter"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
