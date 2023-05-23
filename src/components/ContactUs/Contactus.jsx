import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import CircularOverflows from "../Designs/CircularOverflows";
import SubmitDetails from "../../connections/database";
import { VerifyName, VerifyNumber } from "./verify";

function Contactus() {
  const [success, setsuccess] = useState();

  useEffect(() => {
    setsuccess(<ContactUsForm setsuccess={setsuccess} />);
  }, []);

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
          {success}
        </div>
      </div>
    </div>
  );
}

function ContactUsForm(props) {
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    org: "",
    orgWeb: "https://",
    plan: "EssentialGuard",
    others: "",
  });

  const [isSubmitted, setisSubmitted] = useState(false);

  let submitBtn = "";

  if (isSubmitted) {
    submitBtn = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M10 50A40 40 0 0 0 90 50A40 44.5 0 0 1 10 50"
          fill="#ffffff"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 52.25;360 50 52.25"
          ></animateTransform>
        </path>
      </svg>
    );
  } else {
    submitBtn = "Submit";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isSubmitted) {
          SubmitDetails(Details, setisSubmitted, props.setsuccess);
          setisSubmitted(true);
        }
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
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  fname: e.target.value,
                }));
              }
            }}
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
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  lname: e.target.value,
                }));
              }
            }}
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
            placeholder="**********"
            required
            onChange={(e) => {
              if (VerifyNumber(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  phone: e.target.value,
                }));
              }
            }}
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
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  org: e.target.value,
                }));
              }
            }}
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
      <div className="country">
        <label htmlFor="fname">Country:</label>
        <input
          value={Details.country}
          className="fname"
          type={"text"}
          placeholder="India"
          required
          onChange={(e) => {
            if (VerifyName(e.target.value)) {
              setDetails((prevstate) => ({
                ...prevstate,
                country: e.target.value,
              }));
            }
          }}
        ></input>
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
      <div className="submissionDiv">
        <button className="submitbtn">{submitBtn}</button>
      </div>
    </form>
  );
}

function SuccessfullySubmited() {
  return (
    <div className="success">
      <div className="success--img">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 98.5 98.5"
          enable-background="new 0 0 98.5 98.5"
        >
          <path
            class="checkmark"
            fill="none"
            stroke-width="8"
            stroke-miterlimit="10"
            d="M81.7,17.8C73.5,9.3,62,4,49.2,4
	C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
          />
        </svg>
      </div>
      <div className="success--title">
        Thanks for contacting us. One of our marketing employee will soon
        contact you soon.
      </div>
    </div>
  );
}

export default Contactus;

export { SuccessfullySubmited };
