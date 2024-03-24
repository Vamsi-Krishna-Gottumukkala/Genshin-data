import FetchingData from "./Components/FetchingData";
import { useState } from "react";
import Settings from "./Components/Settings";
import useCheckBox from "./Hooks/useCheckBox";

function App() {
  const [displaySettings, setDisplaySettings] = useState(false);
  const [checkedItems, data] = useCheckBox();

  return (
    <>
      <button
        style={{
          position: "absolute",
          background: "none",
          border: "none",
          cursor: "pointer",
          left: "90vw",
          top: "27vh",
          zIndex: "3",
        }}
        onClick={() => setDisplaySettings(!displaySettings)}
      >
        <img
          src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png"
          alt="settings"
          width="30px"
          height="30px"
        />
      </button>
      {displaySettings && <Settings data={data} />}
      <FetchingData checkedItems={checkedItems} />
    </>
  );
}

export default App;
