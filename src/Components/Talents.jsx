import React from "react";
import useHover from "../Hooks/useHover";

function Talents(props) {
  const [hover, mouseOver, mouseNotOver] = useHover();
  const { talentImageSource, val, level, displayLevel } = props;
  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseNotOver}
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: hover
          ? "rgba(0,248,255,0.5"
          : "rgba(240, 248, 255, 0.3)",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={`https://enka.network/ui/${talentImageSource}.png`}
        alt="talent"
        key={val}
        width="50px"
        height="50px"
      />
      {(!displayLevel || hover) && (
        <div
          style={{
            position: "absolute",
            top: "348px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "300px",
            width: "20.8px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {level}
        </div>
      )}
    </div>
  );
}

export default Talents;
