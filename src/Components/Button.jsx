import React, { useEffect, useState } from "react";
import characters from "../data/characters.json";

function Button(props) {
  useEffect(() => setData(characters), []);

  const [data, setData] = useState();
  const [hovered, setHovered] = useState();
  const characterDetails = props.characterId.avatarId.toString();
  if (!data)
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  const image = data[characterDetails].SideIconName;
  return (
    <button
      className="characters"
      onClick={props.onButtonClick}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{
        padding: "0px",
        margin: "0px",
        backgroundColor: hovered ? 'rgba(0, 248, 255, 0.5)' : 'rgba(240, 248, 255, 0.2)',
        border: "none",
        cursor: "pointer"
      }}
    >
      <div style={{height:'60px', width:'60px', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <img
        src={`https://enka.network/ui/${image}.png`}
        alt="sideicon"
        height="60px"
        width="60px"
      />
      {hovered && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              flexWrap: "wrap",
              color: "white",
              backgroundColor: "black",
              borderRadius: "30px",
              top: "174px",
            }}
          >
            {props.level.showAvatarInfoList[props.index].level}
          </div>
        )}
        </div>
    </button>
  );
}

export default Button;
