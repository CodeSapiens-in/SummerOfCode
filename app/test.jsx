import React from 'react';
import Apple from '../public/Apple_logo_grey.svg.png'
const ElegantComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className='mr-8'>
          <div className="mb-4">
            <h1 className="text-6xl md:text-6xl font-bold text-black">Lorem ipsum dolor, sit amet </h1>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et, quasi id necessitatibus reprehenderit ipsum ea minus</p>
          </div>
          <div className="flex mb-4 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 border border-gray-300 rounded-md bg-gray-50 focus:outline-none w-full"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Subscribe </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden ml-8">
          {/* You can embed your YouTube video here */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/iLJf16DlzyM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {/* List of trusted brand images */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-9">
          
          <img src={Apple} alt="Brand 2" className="w-full" />
          <img src={Apple} alt="Brand 3" className="w-full" />
          {/* You can replace the placeholder URLs with actual URLs of images from Unsplash */}
        </div>
      </div>
    </div>
  );
};

export default ElegantComponent;
