import React from "react";
import deskHero from "../assets/images/image-intro-desktop.jpg";
import mobHero from "../assets/images/image-intro-mobile.jpg";
import pdeskLeft from "../assets/images/bg-pattern-intro-left-desktop.svg";
import pdeskRight from "../assets/images/bg-pattern-intro-right-desktop.svg";
import pmobLeft from "../assets/images/bg-pattern-intro-left-mobile.svg";
import pmobRight from "../assets/images/bg-pattern-intro-right-mobile.svg";

const Hero = () => {
  return (
    <section className="bg-darkViolet relative">
      <div className="md:container md:px-8 md:py-16 lg:px-16 lg:py-24 mx-auto">
        <div
          className="flex flex-col-reverse justify-center md:justify-start md:items-start
         md:flex-row "
        >
          <div className="absolute w-[16%] top-[88%] md:top-[70%] left-0 z-0 hidden md:block">
            <img src={pdeskLeft} className="w-full" alt="" />
          </div>
          <div className="absolute w-[32%] top-[71%] md:top-0 right-0 z-10 hidden md:block">
            <img src={pdeskRight} className="w-full hidden md:block" alt="" />
          </div>
          <div className="absolute w-[20%] right-0 top-[88%] z-0  block md:hidden">
            <img src={pmobRight} className="w-full" alt="" />
          </div>
          <div className="absolute w-[32%] top-[50%] left-0 z-0 block md:hidden">
            <img src={pmobLeft} className="w-full" alt="" />
          </div>
          <div
            className="left z-10 flex-1 flex flex-col justify-center items-center
           md:justify-start md:items-start p-5 pb-8 md:pb-5 md:p-0"
          >
            <h1
              className="mb-5 mt-9 text-5xl lg:text-6xl text-center md:text-left relative
            after:content-[''] after:w-44 md:after:absolute 
            after:h-[1px] after:bg-darkGrayishViolet after:left-0 after:-top-14 "
            >
              Humanizing your insurance.
            </h1>
            <p className="mb-5 text-lg text-center md:text-left text-darkGrayishViolet pr-5">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button
              className="w-40 py-2 px-3 border-2 cursor-pointer
              hover:text-veryDarkViolet hover:bg-white"
            >
              veiw plans
            </button>
          </div>
          <div className="right flex-1 w-[100vw] md:w-auto relative md:ml-6 mb-11 md:mb-0">
            <div className="w-full md:absolute -top-[30%]">
              <img src={deskHero} className="w-full " alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
