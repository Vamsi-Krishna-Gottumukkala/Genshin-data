import React from "react";
import stats from "../data/stats.json";
import useHover from "../Hooks/useHover";

function ArtifactStats(props) {
  const { data, displayLevel} = props;
  const [hover, mouseOver, mouseNotOver] = useHover();
  const subStats = data.reliquarySubstats.map((val, index) => {
    if (!val.appendPropId) return <></>;
    return (
      <div
        style={{
          fontSize: "large",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80px",
          flexShrink:0
        }}
        key={index}
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
        borderRadius: "30px",
        height: "80px",
        display: "flex",
        flexWrap: "nowrap",
        width: !displayLevel[4] ? '380px' : hover ? "380px" : "280px",
        transition: "width 1s",
        gap: "16px",
        paddingLeft: "16px",
        alignItems:'center',
        overflow:'hidden'
      }}
    >
      {subStats}
    </div>
  );
}

export default ArtifactStats;
