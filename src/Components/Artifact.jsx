import React from "react";
import ArtifactStats from "./ArtifactStats";
import useHover from "../Hooks/useHover";
import DisplayMainStat from "./DisplayMainStat";
import stats from "../data/stats.json";

function Artifact(props) {
  const image = props.imgPath;
  const data = props.data;
  const mainStat = stats[data.reliquaryMainstat.mainPropId];
  const [hover, mouseOver, mouseNotOver] = useHover();
  return (
    <div style={{display:'flex', gap:'20px', margin:'7px 0px'}}>
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseNotOver}
      style={{
        display: "flex",
        width: "200px",
        position:'relative',
        borderRadius: "130px",
        backgroundColor: hover
          ? "rgba(0,248,255,0.5"
          : "rgba(240, 248, 255, 0.2)",
      }}
    >
      <img
        src={`https://enka.network/ui/${image}.png`}
        alt="artifact"
        width="80px"
        height="80px"
      />
      <DisplayMainStat
        mainStat={mainStat}
        statValue={data.reliquaryMainstat.statValue}
      />
      </div>
      <ArtifactStats data={data} />
    </div>
    
  );
}

export default Artifact;
