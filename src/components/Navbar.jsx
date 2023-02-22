import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import burger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import shape from "../assets/images/bg-pattern-mobile-nav.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full bg-white">
      <div className="md:container mx-auto  pt-7 pb-5 md:px-8 lg:px-16">
        <div className="flex">
          <div className="logo mt-2 md:mt-4 lg:mt-2 pl-5">
            <img src={logo} alt="" className="md:w-32" />
          </div>
          <ul className="flex-1 md:flex justify-end items-center text-darkViolet/60 hidden">
            <li
              className="mr-5 font-semibold text-[16px] hover:text-bold
              duration-500 cursor-pointer hover:text-veryDarkViolet uppercase"
            >
              How we work
            </li>
            <li
              className="mr-5 font-semibold text-[16px] hover:text-bold
              duration-500  cursor-pointer hover:text-veryDarkViolet  uppercase"
            >
              {" "}
              Blog
            </li>
            <li
              className="mr-5 font-semibold text-[16px] hover:text-bold
              duration-500 cursor-pointer hover:text-veryDarkViolet uppercase"
            >
              {" "}
              Account
            </li>
            <button
              className="py-2 px-3 border-4 border-darkViolet cursor-pointer mr-0 font-semibold 
             hidden md:block hover:bg-darkViolet hover:text-white uppercase leading-9"
            >
              veiw plans
            </button>
          </ul>
          <div
            className="mob-menu md:hidden w-full flex-1 flex flex-col justify-end items-end
           relative"
          >
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="icon mb-1 w-[22px] h-[22px] mr-4 sm:mr-5"
            >
              <img
                src={toggle ? close : burger}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            {/* menu-wrapper */}
            <div
              className={`absolute top-10 z-[100] overflow-hidden ${
                toggle ? "flex justify-center items-start" : "hidden"
              } duration-500  bg-veryDarkViolet w-[100vw] h-[100vh]`}
            >
              <div className="shape w-[100vw] absolute -right-5 bottom-0">
                <img src={shape} alt="" />
              </div>
              <ul
                className="flex flex-col w-[80%] min-w-[250px] 
                text-white mt-10"
              >
                <li
                  className="p-5 text-center w-full cursor-pointer hover:text-slate-200 
              font-normal"
                >
                  How we work
                </li>
                <li
                  className="p-5 text-center w-full cursor-pointer hover:text-slate-200
               font-normal "
                >
                  {" "}
                  Blog
                </li>
                <li
                  className="p-5 text-center w-full cursor-pointer hover:text-slate-200 
              font-normal"
                >
                  {" "}
                  Account
                </li>
                <button
                  className=" py-2 px-3 border-2 cursor-pointer 
                 hover:text-veryDarkViolet hover:bg-white"
                >
                  veiw plans
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
