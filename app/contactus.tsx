"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "./utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="">
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600  font-bold text-6xl text-center mt-32'>Contact Us</h1>
    <div className="max-w-md border mt-16  border-white/[0.2] group-hover:border-slate-700 w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-sm  bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        For Sponsorships and Partnerships
      </h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </p>

   
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row  md:space-x-2 mb-4 ">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Leo" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Das" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="leodas@vanakkam.com" type="email" />
        </LabelInputContainer>
     

        <LabelInputContainer className="mb-8">
          <Label htmlFor="query">Message</Label>
          <textarea  id="query"
            placeholder="Vanakkam..." 
            className="flex p-2 h-20 w-full border-none bg-zinc-800 text-white  rounded-md  text-sm  
            file:text-sm file:font-medium placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400"
            >
           
            </textarea>
        </LabelInputContainer>


        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Us &rarr;
          <BottomGradient />
        </button>

       
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
