import React from "react";
import stats from "../data/stats.json";
import DisplayMainStat from "./DisplayMainStat";

function ArtifactStats(props) {
  const { data } = props;
  const mainStat = stats[data.reliquaryMainstat.mainPropId];
  const subStats =  data.reliquarySubstats.map((val, index) => {
    if(!val.appendPropId) return <></>
    if(index % 2 === 1) return <>{stats[val.appendPropId]} - {val.statValue} <br/></>
    return <>{stats[val.appendPropId]} - {val.statValue } , </>
  })

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <DisplayMainStat
        mainStat={mainStat}
        statValue={data.reliquaryMainstat.statValue}
      />
      <div style={{ position: "fixed", left: "1150px" }}>
        {subStats}
      </div>
    </div>
  );
}

export default ArtifactStats;
