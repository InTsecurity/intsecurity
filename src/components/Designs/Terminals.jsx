import * as React from "react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Styles/Terminal.css";

function Terminal(props) {
  return (
    <div className="terminal">
      <div className="terminal--nav">
        <div className="t--nav--options">
          <span className="t--buttons close"></span>
          <span className="t--buttons minimize"></span>
          <span className="t--buttons hide"></span>
        </div>
      </div>
      <div className="terminal--main">
        <Typewriter
          options={(typewriter) => {}}
          onInit={(typewriter) => {
            typewriter
              .start()
              .pauseFor(1500)
              .pasteString("<b>kali@intsecurity:~ </b>")
              .pauseFor(1500)
              .typeString("cd security ")
              .pauseFor(500)
              .typeString("<br>")
              .pasteString("<b>kali@intsecurity(/security):~ </b>")
              .pauseFor(500)
              .typeString("./test")
              .pauseFor(500)
              .typeString("<br><br><br>")
              .pauseFor(500)
              .pasteString(
                `<div style="font-size: 17px; font-family:'Poppins',sans-serif; font-weight:600"> Welcome to INT{Security}<br>`
              )
              .pasteString("")
              .pauseFor(500)
              .typeString(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi delectus, distinctio dicta esse reiciendis illo deleniti consequatur ducimus earum a.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi delectus, distinctio dicta esse reiciendis illo deleniti consequatur ducimus earum a."
              )

              .pauseFor(500)
              .typeString("<br><br>")
              .pasteString("<b>kali@intsecurity(/security):~ </b>")
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </div>
  );
}

function CleanTerminal(props) {
  const [mouseY, setMouseY] = useState(0);
  const [terminalDistance, setterminalDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setMouseY(scrollTop);
      setterminalDistance(document.getElementById("cleanTerminal").offsetTop);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let mt;
  let t;
  t = (mouseY - terminalDistance) / 4;
  if (mouseY < terminalDistance - 800) {
    mt = "-220px";
  } else if (t > -40) {
    mt = "0px";
  } else {
    mt = `${Math.floor(t)}px`;
  }

  return (
    <div
      className={`clean terminal ${props.class}`}
      id="cleanTerminal"
      style={{ marginTop: mt }}
    >
      <div className="terminal--nav">
        <div className="t--nav--options">
          <span className="t--buttons close"></span>
          <span className="t--buttons minimize"></span>
          <span className="t--buttons hide"></span>
        </div>
      </div>
      <div className="terminal--main">
        <span className="loading"></span>
        <span className="loading2 loading"></span>
      </div>
    </div>
  );
}

export default CleanTerminal;
export { Terminal };
