import React from "react";
import Weapon from "./Weapon";
import ArtifactList from "./ArtifactList";
import SplashArt from "./SplashArt";

function DisplayCard(props) {
  const { data, avatars, index } = props;
  return (
    <div style={{width:'100vw', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
    <div
      className="displayCard"
      style={{
        backgroundColor:'rgba(240, 248, 255, 0.2)',
        borderRadius:'30px'
      }}
    >
      <SplashArt data={data} index={index} />
      <div
        style={{
          position: "relative",
          left: "20px ",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <Weapon data={avatars} index={index} />
      </div>
      <ArtifactList data={avatars} index={index} />
    </div>
    </div>
  );
}

export default DisplayCard;
