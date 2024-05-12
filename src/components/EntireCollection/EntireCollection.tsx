import React from "react";

const EntireCollection = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen p-10">
      <div className="relative w-full md:w-1/2 bg-gray-200 flex">
      <img
          className="min-w-full object-cover rounded-md"
          src="https://www.zillidubai.com/cdn/shop/files/230919_PUKOWIEC_ZILLI_11_122_1.png?v=1709799113&width=940"
          alt="Model Image"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-lg font-semibold">Polo Collection</h2>
          <p>This is the description for the Polo Collection.</p>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 bg-gray-300 flex items-center justify-center rounded-md">
        <div className="animate-text text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Luxury, marked with passion and emotion
          </h2>
          <p className="text-lg mb-4">
            This is the description for the Footwear Collection. It exemplifies
            the finest craftsmanship and the highest quality materials. Our
            footwear is designed to provide unparalleled comfort and style,
            making every step a statement.
          </p>
          <p className="text-sm text-gray-600">
            Explore our latest collection today and experience luxury like never
            before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntireCollection;
