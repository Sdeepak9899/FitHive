// import React, { useContext, useState, useEffect, useRef } from "react";
// import logo from "../assets/vcart logo.png";
// import { FaUserCircle } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { IoIosContact, IoMdCloseCircleOutline } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { userDataContext } from "../content/UserContext";
// import { authDataContext } from "../content/authContent";
// import { Link, useNavigate } from "react-router-dom";


// const Navigation = () => {
//   const { userData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);

//   const [showSearch, setShowSearch] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [query, setQuery] = useState("");

//   const dropdownRef = useRef(null);
//   const btnRef = useRef(null);
//    const navigate = useNavigate();

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target) &&
//         !btnRef.current.contains(e.target)
//       ) {
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ESC closes search
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && setShowSearch(false);
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, []);

// const handleLogout = async () => {
//   try {
//     const response = await axios.post(`${serverUrl}/auth/logout`, {}, { withCredentials: true });
//     console.log(response.data.message);

//     setShowProfile(false);
//     setUser(null);     
//     navigate("/login");
//   } catch (error) {
//     console.log(error);
//   }
// };




//   const mobileLinks = [
//     { name: "Home", icon: MdOutlineShoppingBag, href: "/" },
//     { name: "Collection", icon: FaArrowRightLong, href: "/collection" },
//     { name: "Contact", icon: IoIosContact, href: "/about" },
//     { name: "Cart", icon: MdOutlineShoppingBag, href: "/contact" },
//   ];

//   return (
//     <>
//       {/* Desktop Nav */}
//       <nav className="flex w-full h-20 fixed top-0 z-50 bg-white/70 backdrop-blur-md shadow-md items-center justify-between px-4 md:px-10">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 cursor-pointer">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-10 h-10 rounded-full"
//           />
//           <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
//             FitHive
//           </h1>
//         </Link>

//         {/* Nav Links */}
//         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//           {["Home", "Collection", "About", "Contact"].map((item, i) => (
//             <li
//               key={i}
//               className="relative cursor-pointer transition-all hover:text-black hover:font-semibold after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-6 text-gray-700 text-2xl relative">

//           {/* Search Btn */}
//           <IoSearchCircleOutline
//             className="cursor-pointer hover:text-black transition-all"
//             onClick={() => setShowSearch((prev) => !prev)}
//           />

//           {/* Profile */}
//           <div className="relative">
//             {userData?.name ? (
//               <div
//                 ref={btnRef}
//                 className="w-10 h-10 rounded-full bg-linear-to-r from-slate-500 to-slate-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//                 onClick={() => setShowProfile((prev) => !prev)}
//               >
//                 {userData.name.slice(0, 1).toUpperCase()}
//               </div>
//             ) : (
//               <FaUserCircle
//                 ref={btnRef}
//                 className="cursor-pointer text-black text-3xl"
//                 onClick={() => setShowProfile((prev) => !prev)}
//               />
//             )}

//             {/* Dropdown */}
//             <AnimatePresence>
//               {showProfile && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute right-0 top-12 w-56 z-50"
//                 >
//                   <div className="bg-black/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-800 overflow-hidden">
//                     <div className="px-5 py-3 border-b border-gray-700 text-gray-300 text-sm">
//                       {userData?.name ? (
//                         <>Logged in as <span className="font-semibold text-white">{userData.name}</span></>
//                       ) : (
//                         "Not logged in"
//                       )}
//                     </div>

//                     {userData?.name ? (
//                       <>
//                         <Link to="/profile">
//                           <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-md text-[18px]">
//                             👤 Profile
//                           </p>
//                         </Link>

//                         <Link to="/orders">
//                           <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-[18px]">
//                             📦 Orders
//                           </p>
//                         </Link>

//                         <div className="border-t border-gray-700 mx-2 my-1"></div>

//                         <p
//                           className="px-5 py-3 text-red-400 hover:bg-red-600/20 cursor-pointer  text-[18px]"
//                           onClick={handleLogout}
//                         >
//                           🚪 Logout
//                         </p>
//                       </>
//                     ) : (
//                       <Link to="/login">
//                         <p className="px-5 py-3 text-green-400 hover:bg-green-600/20 cursor-pointer text-[18px]">
//                           🚪 Login
//                         </p>
//                       </Link>
//                     )}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Cart */}
//           <div className="relative hidden md:flex cursor-pointer">
//             <MdOutlineShoppingBag className="hover:text-black" />
//             <span className="absolute -top-1 -right-2 bg-slate-500 text-white text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center">
//               2
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Nav */}
//       <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-t md:hidden flex justify-around items-center py-2 z-50">
//         {mobileLinks.map((link, i) => (
//           <Link
//             key={i}
//             to={link.href}
//             className="flex flex-col items-center text-gray-700 hover:text-black transition-all"
//           >
//             <link.icon className="text-2xl mb-1" />
//             <span className="text-xs">{link.name}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Search Bar */}
//       <AnimatePresence>
//         {showSearch && (
//           <motion.div
//             initial={{ y: -80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-20 bg-[#d8f6f9dd] absolute top-0 left-0 flex items-center justify-center gap-3 md:px-6 z-50"
//           >
//             <div className="flex items-center gap-3 w-[90%] sm:w-3/4 md:w-1/2 bg-[#233533] rounded-xl px-4 py-3">
//               <input
//                 type="text"
//                 placeholder="Search Here..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
//               />

//               <FaArrowRightLong
//                 className="text-white text-xl cursor-pointer hover:scale-110 transition-transform"
//                 onClick={() => console.log("Searching:", query)}
//               />
//             </div>

//             <IoMdCloseCircleOutline
//               className="text-3xl text-[#233533] cursor-pointer hover:text-slate-500"
//               onClick={() => setShowSearch(false)}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navigation;




// import React, { useContext, useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/vcart logo.png";
// import { FaUserCircle } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { IoIosContact, IoMdCloseCircleOutline } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { userDataContext } from "../content/UserContext";
// import { authDataContext } from "../content/authContent";
// import { shopDataContext } from "../content/ShopContext";

// const Navigation = () => {
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const navigate = useNavigate();

//   // const [showSearch, setShowSearch] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [query, setQuery] = useState("");
//   const { search, setSearch, showSearch, setShowSearch } = useContext(shopDataContext);

//   const dropdownRef = useRef(null);
//   const btnRef = useRef(null);

//   const mobileLinks = [
//     { name: "Home", icon: MdOutlineShoppingBag, href: "/" },
//     { name: "Collection", icon: FaArrowRightLong, href: "/collection" },
//     { name: "Contact", icon: IoIosContact, href: "/contact" },
//     { name: "Cart", icon: MdOutlineShoppingBag, href: "/cart" },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target) &&
//         !btnRef.current.contains(e.target)
//       ) {
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ESC closes search
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && setShowSearch(false);
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         `${serverUrl}/auth/logout`,
//         {},
//         { withCredentials: true }
//       );
//       setUserData(null);
//       setShowProfile(false);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <>
//       {/* Desktop Nav */}
//       <nav className="flex w-full h-20 fixed top-0 z-50 bg-white/70 backdrop-blur-md shadow-md items-center justify-between px-4 md:px-10">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 cursor-pointer">
//           <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//           <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
//             FitHive
//           </h1>
//         </Link>

//         {/* Nav Links */}
//         <ul className="hidden md:flex items-center gap-12 text-gray-700 font-medium">

//           {[{
//             name: "Home",
//             href: "/"
//           }, { name: "Collection", href: "/collection" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }].map((item, i) => (

//             <li className="relative cursor-pointer transition-all text-lg hover:text-black hover:font-semibold after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all">
//               <a href={item.href}>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>



//         {/* Right Icons */}
//         <div className="flex items-center gap-6 text-gray-700 text-2xl relative">
//           {/* Search Btn */}
//           <IoSearchCircleOutline
//             className="cursor-pointer hover:text-black transition-all"
//             onClick={() => {setShowSearch((prev) => !prev); navigate("/collection")}}
//           />

//           {/* Profile */}
          // <div className="relative">
          //   {userData?.name ? (
          //     <div
          //       ref={btnRef}
          //       className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
          //       onClick={() => setShowProfile((prev) => !prev)}
          //     >
          //       {userData.name.slice(0, 1).toUpperCase()}
          //     </div>
          //   ) : (
          //     <FaUserCircle
          //       ref={btnRef}
          //       className="cursor-pointer text-black text-3xl"
          //       onClick={() => setShowProfile((prev) => !prev)}
          //     />
          //   )}

          //   {/* Dropdown */}
          //   <AnimatePresence>
          //     {showProfile && (
          //       <motion.div
          //         ref={dropdownRef}
          //         initial={{ opacity: 0, y: -10 }}
          //         animate={{ opacity: 1, y: 0 }}
          //         exit={{ opacity: 0, y: -10 }}
          //         transition={{ duration: 0.2 }}
          //         className="absolute right-0 top-12 w-56 z-50"
          //       >
          //         <div className="bg-black/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-800 overflow-hidden">
          //           <div className="px-5 py-3 border-b border-gray-700 text-gray-300 text-sm">
          //             {userData?.name ? (
          //               <>Logged in as <span className="font-semibold text-white">{userData.name}</span></>
          //             ) : (
          //               "Not logged in"
          //             )}
          //           </div>

          //           {userData?.name ? (
          //             <>
          //               <Link to="/profile">
          //                 <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-[18px]">
          //                   👤 Profile
          //                 </p>
          //               </Link>

          //               <Link to="/orders">
          //                 <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-[18px]">
          //                   📦 Orders
          //                 </p>
          //               </Link>

          //               <div className="border-t border-gray-700 mx-2 my-1"></div>

          //               <p
          //                 className="px-5 py-3 text-red-400 hover:bg-red-600/20 cursor-pointer text-[18px]"
          //                 onClick={handleLogout}
          //               >
          //                 🚪 Logout
          //               </p>
          //             </>
          //           ) : (
          //             <Link to="/login">
          //               <p className="px-5 py-3 text-green-400 hover:bg-green-600/20 cursor-pointer text-[18px]">
          //                 🚪 Login
          //               </p>
          //             </Link>
          //           )}
          //         </div>
          //       </motion.div>
          //     )}
          //   </AnimatePresence>
          // </div>

//           {/* Cart */}
//           <div className="relative hidden md:flex cursor-pointer">
//             <MdOutlineShoppingBag className="hover:text-black" />
//             <span className="absolute -top-1 -right-2 bg-slate-500 text-white text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center">
//               2
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Nav */}
//       <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-t md:hidden flex justify-around items-center py-2 z-50">
//         {mobileLinks.map((link, i) => (
//           <Link
//             key={i}
//             to={link.href}
//             className="flex flex-col items-center text-gray-700 hover:text-black transition-all"
//           >
//             <link.icon className="text-2xl mb-1" />
//             <span className="text-xs">{link.name}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Search Bar */}
//       <AnimatePresence>
//         {showSearch && (
//           <motion.div
//             initial={{ y: -80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-20 bg-[#d8f6f9dd] absolute top-0 left-0 flex items-center justify-center gap-3 md:px-6 z-50"
//           >
//             <div className="flex items-center gap-3 w-[90%] sm:w-3/4 md:w-1/2 bg-[#233533] rounded-xl px-4 py-3">
//               <input
//                 type="text"
//                 placeholder="Search Here..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none" onClick={(e)=>{setSearch(e.target.value)}} value={search}
//               />

//               <FaArrowRightLong
//                 className="text-white text-xl cursor-pointer hover:scale-110 transition-transform"
//                 onClick={() => console.log("Searching:", query)}
//               />
//             </div>

//             <IoMdCloseCircleOutline
//               className="text-3xl text-[#233533] cursor-pointer hover:text-slate-500"
//               onClick={() => setShowSearch(false)}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navigation;







import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/vcart logo.png";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoIosContact, IoMdCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { userDataContext } from "../content/UserContext";
import { authDataContext } from "../content/authContent";
import { shopDataContext } from "../content/ShopContext";

const Navigation = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopDataContext);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  const mobileLinks = [
    { name: "Home", icon: MdOutlineShoppingBag, href: "/" },
    { name: "Collection", icon: FaArrowRightLong, href: "/collection" },
    { name: "Contact", icon: IoIosContact, href: "/contact" },
    { name: "Cart", icon: MdOutlineShoppingBag, href: "/cart" },
  ];

  /* ---------------- CLOSE DROPDOWN ---------------- */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- ESC CLOSE SEARCH ---------------- */

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setShowSearch(false);
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const [showProfile, setShowProfile] = useState(false);

  /* ---------------- LOGOUT ---------------- */

  const handleLogout = async () => {
    try {
      await axios.post(
        `${serverUrl}/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUserData(null);
      setShowProfile(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="fixed top-0 z-50 w-full h-20 bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between px-4 md:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-semibold text-gray-800">FitHive</h1>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-12 text-lg text-gray-700">
          {[
            { name: "Home", href: "/" },
            { name: "Collection", href: "/collection" },
            { name: "About", href: "/about-us" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.href}
                className="hover:text-black transition"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-2xl text-gray-700">

          {/* Search */}
          <IoSearchCircleOutline
            className="cursor-pointer hover:text-black"
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
          />

          {/* Profile */}
        <div className="relative">
            {userData?.name ? (
              <div
                ref={btnRef}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
                onClick={() => setShowProfile((prev) => !prev)}
              >
                {userData.name.slice(0, 1).toUpperCase()}
              </div>
            ) : (
              <FaUserCircle
                ref={btnRef}
                className="cursor-pointer text-black text-3xl"
                onClick={() => setShowProfile((prev) => !prev)}
              />
            )}

            {/* Dropdown */}
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-56 z-50"
                >
                  <div className="bg-black/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-800 overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-700 text-gray-300 text-sm">
                      {userData?.name ? (
                        <>Logged in as <span className="font-semibold text-white">{userData.name}</span></>
                      ) : (
                        "Not logged in"
                      )}
                    </div>

                    {userData?.name ? (
                      <>
                        <Link to="/profile">
                          <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-[18px]">
                            👤 Profile
                          </p>
                        </Link>

                        <Link to="/orders">
                          <p className="px-5 py-3 text-gray-200 hover:bg-gray-800 cursor-pointer text-[18px]">
                            📦 Orders
                          </p>
                        </Link>

                        <div className="border-t border-gray-700 mx-2 my-1"></div>

                        <p
                          className="px-5 py-3 text-red-400 hover:bg-red-600/20 cursor-pointer text-[18px]"
                          onClick={handleLogout}
                        >
                          🚪 Logout
                        </p>
                      </>
                    ) : (
                      <Link to="/login">
                        <p className="px-5 py-3 text-green-400 hover:bg-green-600/20 cursor-pointer text-[18px]">
                          🚪 Login
                        </p>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <MdOutlineShoppingBag className="hidden md:block cursor-pointer hover:text-black" />
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md md:hidden flex justify-around py-2 z-50">
        {mobileLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="flex flex-col items-center text-gray-700"
          >
            <link.icon className="text-2xl" />
            <span className="text-xs">{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* ================= SEARCH BAR ================= */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-0 left-0 w-full h-20 bg-[#d8f6f9dd] z-50 flex items-center justify-center gap-4 px-4"
          >
            <div className="flex items-center gap-3 w-full sm:w-3/4 md:w-1/2 bg-[#233533] rounded-xl px-4 py-3">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                autoFocus
              />
              <FaArrowRightLong className="text-white" />
            </div>

            <IoMdCloseCircleOutline
              className="text-3xl cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
