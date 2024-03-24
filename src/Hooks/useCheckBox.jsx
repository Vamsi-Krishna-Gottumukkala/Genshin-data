import { useState } from "react";

function useCheckBox() {
  const message = [
    "Display Artifact Levels only while hovering",
    "Display Character Level only while hovering",
    "Display Weapon Level only while hovering",
    "Display Talent level only while hovering",
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
