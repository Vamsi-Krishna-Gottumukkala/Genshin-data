import React from "react";
import useProfilePictures from "../Hooks/useProfilePictures";

function Navbar(props) {
  const data = props.data;
  const [img] = useProfilePictures({ data });
  return (
    <div className="nav">
      <div className="imageBox">
        <div>
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
      <div>
        <h3>Total Achievements : {data.finishAchievementNum}</h3>
        <h3>
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
        <input type="text" value={props.uid} onChange={props.onChangingId} />
      </div>
    </div>
  );
}

export default Navbar;
