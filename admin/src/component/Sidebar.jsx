// import React from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
// import { CiBoxList } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-80 border-r py-8 fixed left-0 top-0 bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364] text-white mt-20 ">
//       <div className="justify-right flex items-right ">

//       <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto cursor-pointer transform hover:rotate-180  transition-transform duration-500 ">
//         <FaArrowRight className="text-black  "/>
//       </div>
//       </div>
//       <div className="flex flex-col gap-4 pt-8 pl-10 text-xl">
        
//         {/* Add Items */}
//         <div
//           className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
//           onClick={() => navigate("/add")}
//         >
//           <IoIosAddCircleOutline className="w-7 h-7" />
//           <p className="hidden md:block">Add Items</p>
//         </div>

//         {/* List Items */}
//         <div
//           className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
//           onClick={() => navigate("/list")}
//         >
//           <CiBoxList className="w-7 h-7" />
//           <p className="hidden md:block">List Items</p>
//         </div>

//         {/* View Orders */}
//         <div
//           className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
//           onClick={() => navigate("/orders")}
//         >
//           <FaCheckCircle className="w-7 h-7" />
//           <p className="hidden md:block">View Orders</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`
        min-h-screen block top-20 bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364]
        text-white py-8 transition-all duration-500
        ${isOpen ? "w-80 left-0" : "w-20 -left-1"}
      `}
    >
      {/* Arrow button — RIGHT side */}
      <div className="flex justify-end pr-4 mb-2  mt-14">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-transform duration-500"
        >
          <FaArrowRight
            className={`text-black transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

     
      <div className="flex flex-col gap-4 pl-6 text-xl">

        <div
          onClick={() => navigate("/add")}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
        >
          <IoIosAddCircleOutline className="w-7 h-7" />
          {isOpen && <span>Add Items</span>}
        </div>

        <div
          onClick={() => navigate("/lists")}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
        >
          <CiBoxList className="w-7 h-7" />
          {isOpen && <span>List Items</span>}
        </div>

        <div
          onClick={() => navigate("/orders")}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
        >
          <FaCheckCircle className="w-7 h-7" />
          {isOpen && <span>View Orders</span>}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
