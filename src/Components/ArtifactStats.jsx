import React from "react";
import stats from "../data/stats.json";
import DisplayMainStat from "./DisplayMainStat";

function ArtifactStats(props) {
  const { data } = props;
  console.log();
  const mainStat = stats[data.reliquaryMainstat.mainPropId];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <DisplayMainStat
        mainStat={mainStat}
        statValue={data.reliquaryMainstat.statValue}
      />
      <div style={{ position: "fixed", left: "1150px" }}>
        {stats[data.reliquarySubstats[0].appendPropId]} -{" "}
        {data.reliquarySubstats[0].statValue},{" "}
        {stats[data.reliquarySubstats[1].appendPropId]} -{" "}
        {data.reliquarySubstats[1].statValue}
        <br></br>
        {stats[data.reliquarySubstats[2].appendPropId]} -{" "}
        {data.reliquarySubstats[2].statValue},{" "}
        {stats[data.reliquarySubstats[3].appendPropId]} -{" "}
        {data.reliquarySubstats[3].statValue}
      </div>
    </div>
  );
}

export default ArtifactStats;
