import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front end developer",
          "Back end developer",
          "MERN MEVN MEAN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        showSpeed: 20,
      }}
    />
  );
}

export default Type;
