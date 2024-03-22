// "use client"
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import React from 'react'

// const Timeline = () => {

//  const experiencesData = [
//     {
//       title: `Computer Science`,
//       location: "Don Bosco Egmore",
//       description:
//         "Marks: 94.5% (12th) Class Topper",
//       icon: React.createElement(LuGraduationCap),
//       date: "2008-2022",
//     },
//     {
//       title: `Electronics and Communication Engineering`,
//       location: "RMK Engineering College",
//       description:
//         "GPA: 8.83 (First Year) Class Topper",
//       icon: React.createElement(LuGraduationCap),
//       date: "2022-2023",
//     },
//     {
//       title: `Electronics and Communication Engineering`,
//       location: "SSN College of Engineering",
//       description:
//         "SSN Coding Club - Software Develpoment Team \n SSN Tech Club - Content Team Member",
//       icon: React.createElement(LuGraduationCap),
//       date: "2023-2026",
//     },
//     {
//       title: "Project Developer and Video Creator",
//       location: "Locofy.ai",
//       description:
//         "Responsible for coming up with note worthy project ideas, and developing them using Locofy's Figma plugin and Creating a quick build video explaining the entire process.",
//       icon: React.createElement(CgWorkAlt),
//       date: "Oct 2022 - Present",
//     },
//     {
//       title: "News Letter and Social Media Admin",
//       location: "Inno CareerTech",
//       description:
//         "Involved in developing and managing email newsletter Website and Creating content for all Social Media Handles",
//         icon: React.createElement(CgWorkAlt),
//       date: "June 2023 - Present",
//     },
//     {
//       title: "Founder",
//       location: "The Tanglish Press",
//       description:
//         "The Tanglish Press is a content driven Edu Tech Startup, focused on bringing FUN back to Learning",
//         icon: React.createElement(CgWorkAlt),
//       date: "Nov 2023 - Present",
//     },
//     {
//       title: "Intern",
//       location: "IIT Madras Research Park",
//       description:
//         "Bagged a highly competitive internship from IIT Madras Research Park from Prof. Ashok Jhunjhunwala ( Founder of IITMRP ), developed a Hidden Markov Model for Single Syllable Speech Recognition and developed a VAD ( Voice Activity Detection ) script to accurately detect and perform operations on the incoming live stream of voice data ",
//         icon: React.createElement(CgWorkAlt),
//       date: "Feb 2024 - Present",
//     },
//     {
//       title: "Microsoft Learn Student Ambassador",
//       location: "Microsoft",
//       description:
//         " Got Selected to be part of a vibrant community of students and mentors ",
//         icon: React.createElement(CgWorkAlt),
//       date: "March 2024 - Present",
//     },
//   ]


//   return (
//     <div>

// <VerticalTimeline lineColor="gray">
//         {
//             experiencesData.map((exp,index)=>(
//                 <React.Fragment key={index} >
//                 <VerticalTimelineElement
//                 contentStyle={{
//                     background: "#f3f4f6",
//                     boxShadow: "none",
//                     border: "1px solid rgba(0,0,0,0.05)",
//                     textAlign:"left",
//                     padding: "1.3rem"
//                 }}
//                 date={exp.date}
//                 icon={exp.icon}
//                 iconStyle={{
//                     background: "white",
//                     fontSize: "1.5rem",
//                 }}
//                 contentArrowStyle={{
//                     borderRight: "0.4rem solid #9ca3af"
//                 }}
//                 >
//                     <h3 className="font-semibold capitalize text-lg">{exp.title}</h3>
//                     <p className="font-normal !mt-0 text-md">{exp.location}</p>
//                     <p className="!mt-0 text-sm text-slate-600">{exp.description}</p>
//                 </VerticalTimelineElement>
//                 </React.Fragment>
//             ))
//         }
//     </VerticalTimeline>

//     </div>
//   )
// }

// export default Timeline

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function OutlinedTimeline() {
  return (

    <Timeline position="alternate">
      <h1 className='mt-8 mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-center  font-bold text-6xl'>Timeline</h1>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#FF891A"}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#ffffff"}} className="font-bold">Open Source Maintainers Registration Opened - April 1</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#ffffff"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#FF6A00"}}>Participants Registration Starts - April 7</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#FF891A"}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#ffffff"}} className="font-bold">Finalising Maintainers - April 24</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#ffffff"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#FF6A00"}}>Summer of Code begins - May 1</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#FF891A"}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#ffffff"}} className="font-bold">Final 1 Week ( Ready to Conclusion ) - July 1</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" style={{borderColor: "#ffffff"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{color: "#FF6A00"}}>Top participants are rewarded - July 8</TimelineContent>
      </TimelineItem>
    </Timeline>
  
  );
}
