import React from "react";
import useProfilePictures from "../Hooks/useProfilePictures";
import useHover from "../Hooks/useHover";

function Navbar(props) {
  const data = props.data;
  const [img] = useProfilePictures({ data });
  const [hover, mouseOver, mouseNotOver] = useHover();
  const [hover2, mouseOver2, mouseNotOver2] = useHover();

  return (
    <>
      <div className="nav">
        <div
          className="imageBox"
          onMouseEnter={mouseOver2}
          onMouseLeave={mouseNotOver2}
          style={{
            backgroundColor: hover2
              ? "rgb(205, 250, 219, 0.6)"
              : "rgba(240, 248, 255, 0.2)",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={img} alt="pp" width="100px" height="100px"></img>
          </div>
          <div>
            {data.nickname}
            <br></br>
            AR {data.level}
            <br></br>
            WL {data.worldLevel}
            <br></br>
            {data.signature}
          </div>
        </div>
        <div
          onMouseEnter={mouseOver}
          onMouseLeave={mouseNotOver}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "10px",
            backgroundColor: hover
              ? "rgb(205, 250, 219, 0.6)"
              : "rgba(240, 248, 255, 0.2)",
            borderRadius: "30px",
            justifyContent: "center",
            width:"300px"
          }}
        >
          <h3 style={{ padding: "0px", margin: "0px" }}>
            Total Achievements : {data.finishAchievementNum}
          </h3>
          <h3 style={{ margin: "8px" }}>
            Spiral Abyss : {data.towerFloorIndex}-{data.towerLevelIndex}
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            value={props.uid}
            onChange={props.onChangingId}
            style={{
              backgroundColor: "rgba(240, 248, 255, 0.2)",
              height: "30px",
              borderRadius: "30px",
              fontSize: "15px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
