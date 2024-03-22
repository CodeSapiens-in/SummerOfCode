import React from 'react'
import { HoverEffect } from "./cardhover";
 

const Communities = () => {
 const projects = [
        {
          title: "GDSC Sairam",
          description:
            "Google developer Student Club from Sairam College of Engineering",
          link: "",
        },
        {
            title: "GDSC Rajalakshmi Engineering College",
            description:
              "Google developer Student Club from Rajalakshmi Engineering College",
            link: "",
        },
          {
            title: "GDSC St. Josephs College of Engineering and Technology",
            description:
              "Google developer Student Club from St. Josephs College of Engineering and Technology",
            link: "",
          },
          {
            title: "Trio Devs Trichy",
            description:
              "Trio Devs Trichy is a community of freelancers and students who work on projects and learn together new technologies",
            link: "",
          },
          {
            title: "Namma Flutter | Flutter Chennai",
            description:
              "Namma Flutter is our Flutter Chennai community focused on sharing the enthusiasm and geekiness of Namma Flutter Developers",
            link: "",
          },
        
      ];

  return (
    <div className='max-w-6xl mx-auto text-center flex items-center justify-center flex-col p-4 mt-32'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600  font-bold text-6xl'>Our Partner Communities</h1>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  )
}

export default Communities