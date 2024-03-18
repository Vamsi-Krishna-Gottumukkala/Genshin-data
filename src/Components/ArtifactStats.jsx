import React from "react";
import stats from "../data/stats.json";
import useHover from "../Hooks/useHover";

function ArtifactStats(props) {
  const { data } = props;
  const [hover, mouseOver, mouseNotOver] = useHover();
  const subStats = data.reliquarySubstats.map((val) => {
    if (!val.appendPropId) return <></>;
    return (
      <div
        style={{
          fontSize: "large",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:'80px'
        }}
      >
        <div>{stats[val.appendPropId]}</div>
        <div>{val.statValue}</div>
      </div>
    );
  });

  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseNotOver}
      style={{
        backgroundColor: hover
          ? "rgba(0,248,255,0.5"
          : "rgba(240, 248, 255, 0.2)",
        justifyContent: "space-around",
        borderRadius: "130px",
        height: "80px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        width: "400px",
      }}
    >
      {subStats}
    </div>
  );
}

export default ArtifactStats;
