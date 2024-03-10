
"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal";
 

const About = () => {
  return (
    <div className='max-w-6xl mx-auto text-center flex items-center justify-center flex-col p-4 '>

        <TextRevealCard
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae aliquid iste excepturi erspiciatis harum libero rem ven"
        revealText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae aliquid iste excepturi perspiciatis harum libero rem veniam temporibus voluptatum. Odio nisi error aperiam corporis! At eum eligendi incidunt fugit? "
      className="text-lg w-full"
      >
        <TextRevealCardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600  font-bold text-6xl">
          What is CSSOC ? 
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the text to reveal info
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  )
}

export default About