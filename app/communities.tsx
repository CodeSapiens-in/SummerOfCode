import React from 'react'
import { HoverEffect } from "./cardhover";
 

const Communities = () => {
 const projects = [
        {
          title: "GDSC SSN",
          description:
            "Google developer Student Club from SSN College of Engineering",
          link: "https://ssn.edu.in",
        },
        {
            title: "GDSC RMKEC",
            description:
              "Google developer Student Club from RMK Engineering College",
            link: "https://ssn.edu.in",
        },
          {
            title: "GDSC Sai Ram",
            description:
              "Google developer Student Club from Sai Ram Institue of Technology",
            link: "https://ssn.edu.in",
          },
          {
            title: "Namma Flutter",
            description:
              "Namma Flutter is Chennai's own Flutter Community",
            link: "https://ssn.edu.in",
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