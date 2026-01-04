import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import Sidepanel from "./Sidepanel"

const Header = () => {
  const [toggle, setToggle] = useState(false); // Track side slide open/close state

  // Toggle the side slide visibility
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handlehiddenToggle = () => {
    setToggle(false);
  };

  // Links array (corrected syntax)
  const links = [
    {
      icon: <FaSearch className="text-xl" />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer className="text-xl" />,
      name: "Offer",
    },
    {
      icon: <IoHelpBuoyOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <SiGnuprivacyguard className="text-xl" />,
      name: "SignUp",
    },
    {
      icon: <FiShoppingBag className="text-xl" />,
      name: "Cart",
      sup : 2

    },
  ];

  return (
    <>
      <header className="bg-[#FF5200] shadow-md p-6 gap-5">
        <div className="flex justify-between items-center container mx-auto gap-5">
          <h1 className="flex items-center gap-8">
            <img
              src="/image/Swiggy_logo_bml6he.png"
              alt="Swiggy Logo"
              className="h-10"
            />
            <div className="text-white flex gap-1 text-[0.9rem] items-center mt-3">
              <span className="font-light border-b-[1px] border-[white]">
                Mp Nagar,
              </span>
              <span className="font-light">Bhopal,</span>
              <span className="font-light">Madhya Pradesh, India</span>
              <span
                className="font-bold cursor-pointer"
                onClick={handleToggle} // Trigger toggle on click
              >
                <SlArrowDown />
              </span>
            </div>
          </h1>

          <nav className="space-x-6 text-bold text-7sm flex items-center mx-auto gap-6">
            {links.map((link, index) => (
              <a
                href="/about"
                key={index}
                className="text-white hover:text-gray-300 flex items-center gap-3"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Side Slide */}
      <div
        className="black-overlay w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 duration-500"
        onClick={handlehiddenToggle}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:999999999
        }}
      >
        <div
          className="w-[350px] bg-[#FFFFFF] h-full absolute duration-700"
          onClick={(e) => e.stopPropagation()} // Prevents closing the slide when clicked inside
          style={{
            left: toggle ? "0%" : "-120%",
            transition: "left 0.7s ease-in-out", // Smooth transition for sliding
          }}
        >
          {/* Side Panel Content */}
         <Sidepanel/>
        </div>
      </div>
    </>
  );
};

export default Header;
