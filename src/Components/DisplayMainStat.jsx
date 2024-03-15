import React from "react";

function DisplayMainStat(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.mainStat}
      <br></br>
      {props.statValue}
    </div>
  );
}

export default DisplayMainStat;
