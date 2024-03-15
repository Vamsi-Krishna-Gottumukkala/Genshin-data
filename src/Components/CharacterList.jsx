import React from "react";
import Button from "./Button";

function CharacterList(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Button
        characterId={props.data[0].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(0)}
      />
      <Button
        characterId={props.data[1].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(1)}
      />
      <Button
        characterId={props.data[2].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(2)}
      />
      <Button
        characterId={props.data[3].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(3)}
      />
      <Button
        characterId={props.data[4].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(4)}
      />
      <Button
        characterId={props.data[5].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(5)}
      />
      <Button
        characterId={props.data[6].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(6)}
      />
      <Button
        characterId={props.data[7].avatarId}
        index={props.index}
        onButtonClick={() => props.setIndex(7)}
      />
    </div>
  );
}

export default CharacterList;
