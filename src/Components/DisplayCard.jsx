import React from "react";
import Weapon from "./Weapon";
import ArtifactList from "./ArtifactList";
import SplashArt from "./SplashArt";

function DisplayCard(props) {
  const { data, avatars, index, displayLevels } = props;
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        className="displayCard"
        style={{
          backgroundColor: "rgba(240, 248, 255, 0.2)",
          borderRadius: "30px",
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
            justifyContent: "center",
            gap: "20px",
            width: "380px",
          }}
        >
          <Weapon
            data={avatars}
            index={index}
            avatars={data}
            displayLevel={displayLevels}
          />
        </div>
        <ArtifactList
          data={avatars}
          index={index}
          displayLevel={displayLevels[0]}
        />
      </div>
    </div>
  );
}

export default DisplayCard;
