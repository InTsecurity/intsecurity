import React, { useState } from "react";
import "./ContactUs.css";
import CircularOverflows from "../Designs/CircularOverflows";
import SubmitDetails from "../../connections/database";

function Contactus() {
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    org: "",
    orgWeb: "",
    plan: "EssentialGuard",
    others: "",
  });

  return (
    <div className="contactus">
      <div className="packageoverview contactus--form">
        <CircularOverflows />

        <div className="contactus--content">
          <div className="contactus--head">Let's Talk!</div>
          <div className="cus--quote">
            Don't leave your business vulnerable to cyber attacks. Protect it
            with our expert cyber security solutions. Contact us now.
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SubmitDetails(Details);
            }}
          >
            <div className="cus--name">
              <div className="cus--fname">
                <label htmlFor="fname">First name:</label>
                <input
                  value={Details.fname}
                  className="fname"
                  type={"name"}
                  placeholder="John"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      fname: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div className="cus--fname cus--lname">
                <label htmlFor="fname">Last name:</label>
                <input
                  value={Details.lname}
                  className="fname"
                  type={"name"}
                  placeholder="Carter"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      lname: e.target.value,
                    }))
                  }
                ></input>
              </div>
            </div>
            <div className="cus--name next--details">
              <div className="cus--fname">
                <label htmlFor="fname">Email:</label>
                <input
                  value={Details.email}
                  className="fname"
                  type={"email"}
                  placeholder="johncarter06@company.com"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      email: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div className="cus--fname cus--lname">
                <label htmlFor="fname">Phone Number:</label>
                <input
                  value={Details.phone}
                  className="fname"
                  type={"number"}
                  placeholder="+91 *** *** ****"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      phone: e.target.value,
                    }))
                  }
                ></input>
              </div>
            </div>
            <div className="cus--name next--details">
              <div className="cus--fname">
                <label htmlFor="fname">Organization:</label>
                <input
                  value={Details.org}
                  className="fname"
                  type={"name"}
                  placeholder="Company"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      org: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div className="cus--fname cus--lname">
                <label htmlFor="fname">Company Website:</label>
                <input
                  value={Details.orgWeb}
                  className="fname"
                  type={"text"}
                  placeholder="https://company.org"
                  required
                  onChange={(e) =>
                    setDetails((prevstate) => ({
                      ...prevstate,
                      orgWeb: e.target.value,
                    }))
                  }
                ></input>
              </div>
            </div>
            <div className="service">
              <label htmlFor="serviceSelectLabel">
                Select the plan you are intrested in:
              </label>
              <select
                name="serviceSelect"
                className="serviceSelect"
                value={Details.plan}
                onChange={(e) =>
                  setDetails((prevstate) => ({
                    ...prevstate,
                    plan: e.target.value,
                  }))
                }
              >
                <option value="EssentialGuard">EssentialGuard</option>
                <option className="serviceOption" value="FoundationalShield">
                  FoundationalShield
                </option>
                <option className="serviceOption" value="CoreSecure">
                  CoreSecure
                </option>
              </select>
            </div>
            <div className="service">
              <label className="moreInformationLabel" htmlFor="moreInformation">
                Any additional comments or questions?
              </label>
              <input
                value={Details.others}
                className="fname moreInformation"
                placeholder="More information"
                onChange={(e) =>
                  setDetails((prevstate) => ({
                    ...prevstate,
                    others: e.target.value,
                  }))
                }
              ></input>
            </div>
            <button className="submitbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
