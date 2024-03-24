import React from "react";
import Artifact from "./Artifact";

function ArtifactList(props) {
  const artifactData = props.data[props.index].equipList.map((val, index) => {
    if (index === 5) return null;
    return (
      <Artifact
        imgPath={val.flat.icon}
        data={val}
        key={val.itemId}
        displayLevel={props.displayLevel}
      />
    );
  });
  return (
    <div
      style={{
        position: "relative",
        left: "40px",
        height: "400px",
        width: "600px",
      }}
    >
      {artifactData}
    </div>
  );
}

export default ArtifactList;
