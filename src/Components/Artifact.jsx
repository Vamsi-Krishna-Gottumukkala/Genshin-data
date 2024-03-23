import React from "react";
import ArtifactStats from "./ArtifactStats";
import useHover from "../Hooks/useHover";
import DisplayMainStat from "./DisplayMainStat";
import stats from "../data/stats.json";

function Artifact(props) {
  const image = props.imgPath;
  const data = props.data;
  const mainStat = stats[data.flat.reliquaryMainstat.mainPropId];
  const [hover, mouseOver, mouseNotOver] = useHover();
  const [hover2, mouseOver2, mouseNotOver2] = useHover();
  return (
    <div style={{ display: "flex", gap: "20px", margin: "7px 0px" }}>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseNotOver}
        style={{
          display: "flex",
          width: "200px",
          position: "relative",
          borderRadius: "130px",
          backgroundColor: hover
            ? "rgba(0,248,255,0.5"
            : "rgba(240, 248, 255, 0.2)",
        }}
      >
        <div
          onMouseEnter={mouseOver2}
          onMouseLeave={mouseNotOver2}
          style={{
            width: "80px",
            height: "80px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`https://enka.network/ui/${image}.png`}
            alt="artifact"
            width="80px"
            height="80px"
          />
          {hover && (
            <div
              style={{
                display: "flex",
                position: "absolute",
                flexWrap: "wrap",
                color: "white",
                backgroundColor: "black",
                borderRadius: "30px",
                top: "54px",
              }}
            >
              {data.reliquary.level - 1}
            </div>
          )}
        </div>
        <DisplayMainStat
          mainStat={mainStat}
          statValue={data.flat.reliquaryMainstat.statValue}
        />
      </div>
      <ArtifactStats data={data.flat} />
    </div>
  );
}

export default Artifact;
