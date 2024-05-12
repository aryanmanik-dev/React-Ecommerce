import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full"
          src="https://www.zillidubai.com/cdn/shop/files/ZILLI-01.png?v=1687503384&width=250"
          alt="Placeholder"
        />
        <span className="ml-2">John Doe</span>
      </div>

    
    </div>
  );
};

export default Header;
