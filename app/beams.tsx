"use client";
import React from "react";
import { BackgroundBeams } from "./beam";
import { TypewriterEffectSmooth } from "./typewriter";

import { TextGenerateEffect } from "./text-generate";
 
const word = `Tamil Nadus first and largest Open Source Event
`;


export function BackgroundBeamsDemo() {

    const words = [

        {
          text: "<Summer",
          className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-4xl lg:text-6xl",
        },
        {
          text: "of",
          className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-4xl lg:text-6xl",
        },
        {
          text: "Code />",
          className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-4xl lg:text-6xl",

        },
      ];

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-6xl mx-auto text-center flex items-center justify-center flex-col p-4">
        <h1 className="animate-pulse relative z-10  text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          CodeSapiens
        </h1>
        <TypewriterEffectSmooth words={words} />
      <div className="text-white text-center">
      <TextGenerateEffect words={word} />
      </div>
        </div>
      <BackgroundBeams />
    </div>
  );
}
