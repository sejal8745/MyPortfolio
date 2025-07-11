import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer - SDE",
          "Full Stack Developer",
          "UI/UX Developer",
          "Turning Ideas Into Code",
          "Building the Web, One Line at a Time",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
