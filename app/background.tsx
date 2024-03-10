"use client"

// import React from "react";
import { TypewriterEffectSmooth } from "./typewriter";


import React, { useState, useEffect } from 'react';

export function GridBackgroundDemo() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


    const words = [
        {
          text: "Code",
        },
        {
          text: "Sapiens",
        },
        {
          text: "Summer",
        },
        {
          text: "of",
        },
        {
          text: "Code.",
          className: "text-blue-500 ",
        },
      ];


  useEffect(() => {
    const updateCursorPosition = (e: { clientX: any; clientY: any; }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const maskImageStyle = {
    maskImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 5%, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 60%)`,

  };

  return (

    <div
      className="h-[40rem] w-full   bg-grid-white/[0.2] relative flex items-center justify-center"
      style={maskImageStyle}
    >
      <div className="bg-black">
    <TypewriterEffectSmooth words={words} />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  "  >

   </div>
   </div>
    </div>

  );
}