import React from 'react'
import { Meteors } from "./meteors";

const What = () => {
  return (
    <div className='max-w-6xl  mx-auto text-center flex items-center justify-center flex-col p-4 mt-32'>
    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600  font-bold text-6xl'>Whats in for you ?</h1>
<div className="max-w-5xl mx-auto px-8">

<div className='flex md:flex-row gap-8 flex-col'>
    <div className="mt-16">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl  border bg-zinc-900 border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Skill Enhancement
          </h1>

          <p className="font-normal text-base text-orange-200 mb-4 relative z-50  text-justify">
          Gain valuable experience and skills through workshops, mentorship, and hands-on open source development. These opportunities will not only enhance your technical abilities but also enrich your understanding of collaborative software development practices
          </p>

  

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>

    <div className="mt-16">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-500  transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-zinc-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-black-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Incentives and Recognition
          </h1>

          <p className="font-normal text-base text-orange-200 mb-4 relative z-50 justify-start text-justify">
          Earn certificates of participation, compete for prize money, and receive exclusive goodies. Your contributions will be acknowledged and rewarded, motivating you to excel and make a meaningful impact within the open source community.
          </p>

    

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>

    <div className="mt-16">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-500  transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-zinc-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Networking and Support
          </h1>

          <p className="font-normal text-base text-orange-200 mb-4 relative z-50  text-justify">
          Connect with like-minded individuals, industry experts, and community partners. Engage in networking opportunities, receive guidance from mentors, and build lasting relationships that can propel your career and personal development forward.
          </p>

      

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
</div>

</div>
</div>
  )
}

export default What