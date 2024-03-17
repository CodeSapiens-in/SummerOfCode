"use client";
import React ,{useState} from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export const useClient = true;

const CommandLine =  (props = {}) => {
    const [terminalLineData, setTerminalLineData] = useState([
      <TerminalOutput key='welcome-message'>Welcome</TerminalOutput>
    ]);
    // Terminal has 100% width by default so it should usually be wrapped in a container div
    return (
      
      <div className="max-w-6xl mx-auto  flex items-center justify-center flex-col p-4  w-3/4  h-screen">
        <Terminal name='CodeSapiens Summer of Code' colorMode={ ColorMode.Dark }  
        onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }>
          { terminalLineData }
        </Terminal>
      </div>
      
    )
  };

export default CommandLine