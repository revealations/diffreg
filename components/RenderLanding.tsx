import React, { useEffect, useState } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";

function RenderLanding() {
  const [ScrollY, setScrollY] = useState(0);
  const animatedItem = useScrollFadeIn();

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY === 500) {
      console.log("hey");
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return <></>;
}

export default RenderLanding;
