import React from "react";
import Weapon from "./Weapon";
import ArtifactList from "./ArtifactList";
import SplashArt from "./SplashArt";

function DisplayCard(props) {
  const { data, avatars, index } = props;
  return (
    <div
      className="displayCard"
      style={{
        background: "url('https://enka.network/ui/UI_NameCardPic_0_P.png')",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
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
  );
}

export default DisplayCard;
