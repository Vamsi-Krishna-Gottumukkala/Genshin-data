import React from "react";
import ArtifactStats from "./ArtifactStats";

function Artifact(props) {
  const image = props.imgPath;
  const data = props.data;
  return (
    <div style={{ display: "flex" }}>
      <img
        src={`https://enka.network/ui/${image}.png`}
        alt="artifact"
        width="80px"
        height="80px"
      />
      <ArtifactStats data={data} />
    </div>
  );
}

export default Artifact;
