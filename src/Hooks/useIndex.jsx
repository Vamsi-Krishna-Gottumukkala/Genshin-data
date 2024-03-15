import { useState } from "react";

function useIndex() {
  const [index, setIndex] = useState(0);
  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };
  return [index, changeIndex];
}

export default useIndex;
