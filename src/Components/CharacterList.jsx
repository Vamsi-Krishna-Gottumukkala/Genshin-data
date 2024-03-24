import React from "react";
import Button from "./Button";

function CharacterList(props) {
  const data = props.data.map((val, index) => {
    return (
      <Button
        key={val.avatarId}
        characterId={val}
        index={props.index}
        level={props.level}
        onButtonClick={() => props.setIndex(index)}
        displayLevels={props.displayLevels}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "15px",
      }}
    >
      {data}
    </div>
  );
}

export default CharacterList;
