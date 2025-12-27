// import React from "react";
// import hero1 from "../assets/hero1.jpg";
// import hero2 from "../assets/hero2.jpg";
// import hero3 from "../assets/hero3.jpg";
// import hero4 from "../assets/hero4.jpg";

// function Background({ heroCount }) {
//   const images = [hero1, hero2, hero3, hero4];

//   return (
//     <img
//       src={images[heroCount]}
//       alt=""
//       className="w-full float-left overflow-auto object-cover'"
//     />
//   );
// }

// export default Background;

import React from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

function Background({ heroCount }) {
  const images = [hero1, hero2, hero3, hero4];

  return (
    <div
      key={heroCount}
      className="absolute top-0 left-0 w-full h-full overflow-hidden transition-all duration-700 ease-in-out"
    >
      <img
        src={images[heroCount]}
        alt="hero"
        className="w-full h-full object-center object-cover opacity-70"
      />
    </div>
  );
}

export default Background;
