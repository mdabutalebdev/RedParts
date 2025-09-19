import React from "react";

const Navbar = () => {
  return (
    <div className="flex  ">
      <div className="flex items-center justify-end container mx-auto gap-4 bg-red-600 text-white px-6   clip-left -ml-px">
        <span>
          <strong>Call Us:</strong> (800) 060-0730
        </span>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          Contacts
        </a>
        <a href="#" className="hover:underline">
          Track Order
        </a>
      </div>

      <div className="text-center ">
        <h3 className="w-[390px] text-[14px] py-1 font-normal text-gray-600">
          AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES
        </h3>
      </div>

      <div className="flex items-center container mx-auto  bg-gray-800 text-gray-400 px-6   clip-right -ml-px gap-4">
        <p>
          Compare: <span className="text-white ">0</span>
        </p>
        <p>
          Currency: <span className="text-white">USD</span>
        </p>
        <p>
          Language: <span className="text-white">EN</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
