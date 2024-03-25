import { useState } from "react";

function useCheckBox() {
  const message = [
    "Display Artifact Levels only when hovering",
    "Display Character Level only when hovering",
    "Display Weapon Level only when hovering",
    "Display Talent level only when hovering",
    "Show all substats of artifacts only when hovering"
  ];
  const [checkedItems, setCheckedItems] = useState(message.map(() => true));

  const handleChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const data = message.map((element, index) => (
    <div key={index} style={{ display: "flex", gap: "10px" }}>
      <input
        type="checkbox"
        name=""
        value="abc"
        checked={checkedItems[index]}
        onChange={() => handleChange(index)}
      />
      {element}
    </div>
  ));

  return [checkedItems, data];
}

export default useCheckBox;
