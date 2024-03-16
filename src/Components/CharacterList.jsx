import React from "react";
import Button from "./Button";

function CharacterList(props) {
  const data = props.data.map((val, index) => {
    return <Button characterId={val.avatarId} index={props.index} onButtonClick={()=>props.setIndex(index)}/>
  })
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {data}
    </div>
  );
}

export default CharacterList;
