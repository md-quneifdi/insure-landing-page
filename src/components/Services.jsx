import React from "react";
import { Container } from "../components";
import shape1 from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import shape2 from "../assets/images/bg-pattern-how-we-work-mobile.svg";

const Services = () => {
  return (
    <section className="bg-veryLightGray py-10">
      <Container>
        <div
          className="w-full bg-darkViolet flex flex-col md:flex-row py-10 px-16 items-center
         relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 md:-right-10 lg:-right-16 w-[45%] md:w-[55%]  z-0">
            <img src={shape1} className="w-full hidden md:block" alt="" />
            <img src={shape2} className="w-full block md:hidden" alt="" />
          </div>
          <div className="flex justify-center items-center pr-5">
            <h1
              className="text-4xl lg:text-6xl
          text-center md:text-left max-w-[480px] z-10 mb-3 md:mb-0"
            >
              Find out more about how we work
            </h1>
          </div>
          <div className="flex-1 flex justify-end items-center mt-5 md:mt-0">
            <button
              className="w-44 px-6 py-2 border-2 border-white h-10 
            cursor-pointer hover:bg-white hover:text-darkViolet z-10"
            >
              How we work
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
