import React from "react";

function DisplayMainStat(props) {
  return (
    <div style={{ display: "flex", flexWrap:'wrap', alignContent:'center' }}>
      {props.mainStat}
      <br></br>
      {props.statValue}
    </div>
  );
}

export default DisplayMainStat;
