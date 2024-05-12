import React from "react";

const ExploreCollection = () => {
  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <div className="group">
          <img
            className="min-w-full object-cover md:h-screen rounded-md transition-transform duration-300 transform scale-100 group-hover:scale-110"
            src="https://www.zillidubai.com/cdn/shop/files/SS_Polo_Collection_1.jpg?v=1709734685"
            alt="Model Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Polo Collection</h2>
              <p>This is the description for the Polo Collection.</p>
            </div>
            <a href="#" className="mt-4 text-sm font-semibold underline">
              View Full Image
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <div className="group">
          <img
            className="min-w-full object-cover md:h-screen rounded-md transition-transform duration-300 transform scale-100 group-hover:scale-110"
            src="https://www.zillidubai.com/cdn/shop/files/SS_Footwear_Collection.jpg?v=1709734685"
            alt="Model Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Footwear Collection</h2>
              <p>This is the description for the Footwear Collection.</p>
            </div>
            <a href="#" className="mt-4 text-sm font-semibold underline">
              View Full Image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollection;
