
"use client";
import React, { useEffect, useState } from "react";
import Background from "../component/Background";

const Heroui = () => {
  const heroData = [
    {
      text1: "30% OFF Limited Offer",
      text2: "Style that",
    },
    {
      text1: "Discover the Best of Bold Fashion",
      text2: "Limited Time Only!",
    },
    {
      text1: "Explore Our Best Collection",
      text2: "Shop Now",
    },
    {
      text1: "Choose your Perfect Fashion Fit",
      text2: "Now on Sale!",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);

  // Auto change every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[95vh] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#0b1a1f] transition-all duration-700 ease-in-out">
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full mt-10 md:mt-0 flex flex-col justify-center items-start md:pl-[8%] px-6 text-[#88d9ee] text-center md:text-left">
        <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">
          {heroData[heroCount].text1}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          {heroData[heroCount].text2}
        </p>

        {/* dots below text */}
        <div className="flex justify-center md:justify-start gap-3 mt-6">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setHeroCount(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                heroCount === i
                  ? "bg-amber-400 scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Background collage */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative grid grid-cols-2 grid-rows-2 gap-2 p-3 md:p-4">
        <Background heroCount={heroCount} />
      </div>
    </div>
  );
};

export default Heroui;
