import React from "react";
import pattern1 from "../assets/images/bg-pattern-footer-desktop.svg";
import pattern2 from "../assets/images/bg-pattern-footer-mobile.svg";
import logo from "../assets/images/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { createElement } from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100 relative z-10">
      <div className="absolute left-0 top-0 w-[100%] h-[30%] lg:w-[50%] lg:h-[70%] z-[-1]">
        <img src={pattern1} className="w-full h-full hidden lg:block" alt="" />
        <img src={pattern2} className="w-full h-full block lg:hidden" alt="" />
      </div>
      <div className="md:container mx-auto px-5 py-3 md:px-8 lg:px-16">
        <div
          className="logo-part py-5 flex flex-col md:flex-row justify-between items-center
         border-b-2 border-darkGrayishViolet"
        >
          <div className="logoImg w-[130px] py-2">
            <img src={logo} className="w-full" alt="" />
          </div>
          <div className="social-icons mt-5 md:mt-0">
            <ul className="flex text-2xl text-darkGrayishViolet">
              <li className="mr-5 cursor-pointer hover:text-zinc-800">
                <a href="">{createElement(AiFillFacebook)}</a>
              </li>
              <li className="mr-5 cursor-pointer hover:text-zinc-800">
                <a href="">{createElement(BsTwitter)}</a>
              </li>
              <li className="mr-5 cursor-pointer hover:text-zinc-800">
                <a href="">{createElement(GrPinterest)}</a>
              </li>
              <li className=" cursor-pointer hover:text-zinc-800">
                <a href="">{createElement(SlSocialInstagram)}</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="links-part py-10 text-center lg:text-left flex flex-col lg:flex-row justify-center
         lg:justify-start items-center lg:items-start"
        >
          <div className="menu-col flex-1">
            <h6 className="uppercase text-base text-darkGrayishViolet font-semibold tracking-[2px]">
              Our company
            </h6>
            <ul className="text-[18px] text-darkViolet font-semibold mt-5 flex flex-col gap-y-3">
              <li>
                <a href="">How we work</a>
              </li>
              <li>
                <a href="">Why Insure?</a>
              </li>
              <li>
                <a href="">View plans</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="menu-col flex-1 mt-10 lg:mt-0">
            <h6 className="uppercase text-base text-darkGrayishViolet font-semibold  tracking-[2px]">
              Help me
            </h6>
            <ul className="text-[18px] text-darkViolet font-bold mt-5 flex flex-col gap-y-3">
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="menu-col flex-1 mt-10 lg:mt-0">
            <h6 className="uppercase text-base text-darkGrayishViolet font-semibold tracking-[2px]">
              Contact
            </h6>
            <ul className="text-[18px] text-darkViolet font-semibold mt-5 flex flex-col gap-y-3">
              <li>
                <a href="">Sales</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Live chat</a>
              </li>
            </ul>
          </div>
          <div className="menu-col flex-1 mt-10 lg:mt-0">
            <h6 className="uppercase text-base text-darkGrayishViolet font-semibold tracking-[2px]">
              Others
            </h6>
            <ul className="text-[18px] text-darkViolet font-semibold mt-5 flex flex-col gap-y-3">
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
