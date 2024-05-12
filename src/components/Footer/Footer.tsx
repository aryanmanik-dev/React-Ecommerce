import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Stay up to date with all fashion news and exclusive events.
          </h3>
          {/* <img
            className="mx-auto"
            src="https://www.zillidubai.com/cdn/shop/files/ZILLI_logo_1200x628_f6b25d06-89ec-4d79-b501-c9248bc93843.png?v=1629789247&width=360"
            alt=""
          /> */}
          <p>
            Luxury marked with passion and emotion. Cultivating quality,
            exceeding limitations, making customers’ dreams a reality. This is
            what our daily business is all about at ZILLI, where nothing is
            impossible.
          </p>
        
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">General Information</h3>
          <ul className="text-lg">
            <li>Terms of Use</li>
            <li>Anti-counterfeiting policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
          <ul className="text-lg">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Returns and Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-lg mb-2">
          Subscribe to our newsletter for exclusive offers:
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-700 text-white px-4 py-2 mr-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
        <p className="mt-4">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
