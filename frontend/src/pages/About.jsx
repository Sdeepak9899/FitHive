import React from "react";
import about from "../assets/about.png";
import Title from "../component/Title";
import NewLetterBox from "../component/NewLetterBox"
import { FaShippingFast, FaCheckCircle, FaUndoAlt, FaHeadset } from "react-icons/fa";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-l from-[#141414] to-[#0c2025] gap-16 pt-24 overflow-hidden py-10">

      <Title text1="About" text2="Us" />

      {/* ABOUT SECTION */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={about}
            alt="about"
            className="lg:w-[65%] w-[80%] shadow-lg shadow-black rounded-sm"
          />
        </div>

        <div className="lg:w-1/2 w-[85%] flex flex-col gap-5 mt-8 lg:mt-0">
          <p className="text-white text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">LIVN</span> was created for smart, seamless shopping. 
            We bring quality products, trending styles, and everyday essentials together — all in one place.
          </p>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            Built for modern shoppers, LIVN blends style, convenience, and affordability. 
            From fashion to essentials, we focus on speed, simplicity, and trust.
          </p>

          <p className="text-white text-xl font-bold mt-4">Our Mission</p>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            Our mission is to redefine online shopping by delivering quality, value, and convenience.
            LIVN connects customers with trusted products through a seamless, customer-first experience
            that fits every lifestyle.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full flex flex-col items-center gap-12">
        <Title text1="Why" text2="Choose Us" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[85%]">
          <Feature
            icon={<FaCheckCircle />}
            title="Quality First"
            desc="Carefully selected products that meet our quality standards."
          />
          <Feature
            icon={<FaShippingFast />}
            title="Fast Delivery"
            desc="Quick and reliable shipping, every single time."
          />
          <Feature
            icon={<FaUndoAlt />}
            title="Easy Returns"
            desc="Hassle-free returns with a customer-first approach."
          />
          <Feature
            icon={<FaHeadset />}
            title="24/7 Support"
            desc="Always here to help whenever you need us."
          />
        </div>
      </div>

          <NewLetterBox/>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-[#ffffff0a] backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition">
      <div className="text-3xl text-white">{icon}</div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}

export default About;
