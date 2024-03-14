import React from "react";

function Navbar(props) {
  return (
    <div className="nav">
      <div className="imageBox">
        <div><img src="https://enka.network/ui/UI_AvatarIcon_BarbaraCostumeSummertime_Circle.png" alt='pp' width='100px' height='100px'></img></div>
        <div>
          Name<br></br>
          AR 60<br></br>
          WL 8<br></br>
          Status
        </div>
      </div>
      <div>
        <h3>Total Achievements : 123</h3>
        <h3>Spiral Abyss : 12-3</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input type="text" value={props.uid} onChange={props.onChangingId}/>
      </div>
    </div>
  );
}

export default Navbar;
