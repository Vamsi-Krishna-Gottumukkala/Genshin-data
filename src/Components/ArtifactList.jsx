import React from "react";
import Artifact from "./Artifact";

function ArtifactList(props) {
  return (
    <div
      style={{
        position: "fixed",
        left: "820px",
        height: "400px",
        width: "600px",
      }}
    >
      <Artifact
        imgPath={props.data[props.index].equipList[0].flat.icon}
        data={props.data[props.index].equipList[0].flat}
      />
      <Artifact
        imgPath={props.data[props.index].equipList[1].flat.icon}
        data={props.data[props.index].equipList[1].flat}
      />
      <Artifact
        imgPath={props.data[props.index].equipList[2].flat.icon}
        data={props.data[props.index].equipList[2].flat}
      />
      <Artifact
        imgPath={props.data[props.index].equipList[3].flat.icon}
        data={props.data[props.index].equipList[3].flat}
      />
      <Artifact
        imgPath={props.data[props.index].equipList[4].flat.icon}
        data={props.data[props.index].equipList[4].flat}
      />
    </div>
  );
}

export default ArtifactList;
