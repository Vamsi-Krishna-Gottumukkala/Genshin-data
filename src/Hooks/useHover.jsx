import { useState } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const mouseOver = () => setHovered(true);
  const mouseNotOver = () => setHovered(false);

  return [hovered, mouseOver, mouseNotOver];
}

export default useHover;
