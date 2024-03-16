import React from "react";
import Artifact from "./Artifact";

function ArtifactList(props) {
  const artifactData = props.data[props.index].equipList.map((val, index) => {
    if(index === 5) return null
    return <Artifact imgPath = {val.flat.icon} data = {val.flat} key={val.itemId}/>
  })
  console.log(props.data[props.index].equipList);
  return (
    <div
      style={{
        position: "fixed",
        left: "820px",
        height: "400px",
        width: "600px",
      }}
    >
      {artifactData}
    </div>
  );
}

export default ArtifactList;
