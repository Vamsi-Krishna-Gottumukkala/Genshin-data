import React from "react";
import useProfilePictures from "../Hooks/useProfilePictures";

function SplashArt(props) {
  const data = props.data;
  const requireSquare = true;
  const [img] = useProfilePictures({ data, requireSquare });
  return (
    <div
      style={{
        zIndex: "1",
        height: "400px",
        width: "400px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={img} alt="splashArt" height="300px" width="300px"></img>
    </div>
  );
}

export default SplashArt;
