import React from "react";
import { Container } from "../components";
import snappy from "../assets/images/icon-snappy-process.svg";
import people from "../assets/images/icon-people-first.svg";
import affordable from "../assets/images/icon-affordable-prices.svg";

const AboutUs = () => {
  return (
    <section className="bg-veryLightGray pt-48 pb-10">
      <Container>
        <div className="mb-5 pb-8 flex flex-col relative">
          <h1
            className="mb-5 mt-9 text-darkViolet text-5xl lg:text-6xl w-full
          text-center lg:text-left after:content-[''] after:w-44 after:absolute 
            after:h-[1px] after:bg-darkGrayishViolet after:left-[26%] 
            md:after:left-[36%]  lg:after:left-0 after:-top-10 lg:after:-top-14"
          >
            We’re different
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-16">
          <div
            className="box-1 p-5 text-darkViolet flex-1 flex flex-col justify-center items-center
          lg:justify-start lg:items-start"
          >
            <img
              src={snappy}
              className="w-20 h-20 self-center lg:self-start"
              alt=""
            />
            <h2 className="mt-5 text-2xl font-bold text-center lg:text-left">
              Snappy Process
            </h2>
            <p className="mt-4 text-lg text-center lg:text-left max-w-[500px]">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div
            className="box-2 p-5 text-darkViolet flex-1 flex flex-col justify-center items-center
          lg:justify-start lg:items-start"
          >
            <img src={affordable} className="w-20 h-20" alt="" />
            <h2 className="mt-5 text-2xl font-bold text-center lg:text-left">
              Affordable Prices
            </h2>
            <p className="mt-4 text-lg text-center lg:text-left max-w-[500px]">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div
            className="box-3 p-5 text-darkViolet flex-1 flex flex-col
             justify-center items-center lg:justify-start lg:items-start"
          >
            <img
              src={people}
              className="w-20 h-20 self-center lg:self-start"
              alt=""
            />
            <h2 className="mt-5 text-2xl font-bold text-center lg:text-left">
              People First
            </h2>
            <p className="mt-4 text-lg text-center lg:text-left max-w-[500px]">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
