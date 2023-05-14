import React from "react";
import CleanTerminal, { Terminal } from "../Designs/Terminals";

function Support(props) {
  return (
    <div className="support">
      <CleanTerminal />
      <CleanTerminal class="right--terminal" />
      <Terminal />
    </div>
  );
}

export default Support;
