import React from "react";

function Artifact(props) {
  const image = props.imgPath;
  return (
    <div style={{ display: "flex"}}>
      <img
        src={`https://enka.network/ui/${image}.png`}
        alt="artifact"
        width="100%"
        height="80px"
      />
      <div>Stats</div>
    </div>
  );
}

export default Artifact;
