import React from 'react';

const ElegantComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-black">Title</h1>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">Subheading</p>
          </div>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md">Subscribe</button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
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
          <img src="https://source.unsplash.com/random/300x200" alt="Brand 1" className="w-full" />
          <img src="https://source.unsplash.com/random/300x200" alt="Brand 2" className="w-full" />
          <img src="https://source.unsplash.com/random/300x200" alt="Brand 3" className="w-full" />
          {/* You can replace the placeholder URLs with actual URLs of images from Unsplash */}
        </div>
      </div>
    </div>
  );
};

export default ElegantComponent;
