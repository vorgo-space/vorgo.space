import { useState, MouseEvent, PropsWithChildren } from "react";

interface SpotlightProps {
  styleClasses: string;
}

export default function Spotlight({children, styleClasses}: PropsWithChildren<SpotlightProps>) {
  let [cursorX, setCursorX] = useState<number>(0);
  let [cursorY, setCursorY] = useState<number>(0);
  let [showSpotlight, setShowSpotlight] = useState<boolean>(false);

  function moveSpotlight ({currentTarget, clientX, clientY}: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    setShowSpotlight(true);
    setCursorX(clientX - left);
    setCursorY(clientY - top);
  }

  function removeSpotlight() {
    setShowSpotlight(false);
  }

  return (
    <div onMouseMove={moveSpotlight} onMouseLeave={removeSpotlight} className={styleClasses} style={showSpotlight ? {"background": `radial-gradient(300px circle at ${cursorX}px ${cursorY}px, rgba(255, 148, 49, 0.16), transparent 80%)`} : {}}>         
      {children}
    </div>
  )
}