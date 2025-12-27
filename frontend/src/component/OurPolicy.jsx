import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const policies = [
  {
    icons: <RiExchangeFundsLine className="w-10 h-10 md:w-16 md:h-16 text-[#90b9ff]"/>,
    title: "Easy Exchange Policy",
    desc: "Exchange Made Easy - Quick, Simple and Customer-Friendly Process",
  },
   {
    icons: <TbRosetteDiscountCheckFilled className="w-10 h-10 md:w-16 md:h-16 text-[#90b9ff]"/>,
    title: "7 Days Exchange Policy",
    desc: "Shop with Confidence - 7-Day Easy Return Guarantee.",
  },
  {
    icons: <BiSupport className="w-10 h-10 md:w-16 md:h-16 text-[#90b9ff]"/>,
    title: "Best Customer Support",
    desc: "Trusted Customer Support - Your Satisfaction Is Our Priority.",
  },
 
];

function OurPolicy() {
  return (
    <section className="w-full min-h-screen md:min-h-[70vh] flex flex-col items-center bg-gradient-to-l from-[#141414] to-[#0c2025] py-20 gap-16">
      
      {/* Heading */}
      <div className="text-center px-4">
        <Title text1="OUR" text2="POLICY" />
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-100 mt-3">
          Customer-Friendly Policies – Committed to your Satisfaction and Safety.
        </p>
      </div>

      {/* Policies */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-12 px-4">
        {policies.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center text-center gap-3"
          >
          <p  className="w-10 h-10 md:w-16 md:h-16 text-[#90b9ff]">
                {item.icons}
          </p>
            <p className="font-semibold text-lg md:text-xl text-[#a5e8f7]">
              {item.title}
            </p>

            <p className="text-sm md:text-base text-[aliceblue]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPolicy;
