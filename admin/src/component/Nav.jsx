import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/vcart logo.png";

import { adminDataContext } from "../context/Admincontext";
import { authDataContext } from "../context/Authcontext";

const Navigation = () => {
  const { adminData, setAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [query, setQuery] = useState("");

  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  // close profile dropdown on outside click
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC closes search
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // logout
  const handleLogout = async () => {
    try {
      const res =await axios.post(
        `${serverUrl}/auth/logout`,
        {},
        { withCredentials: true }
      );

      console.log(res,"oskndfojlsdn")

      setAdminData(null);
      setShowProfile(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  // console.log(handleLogout,"asidkjbcxoikjasdx")

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364] text-white backdrop-blur-md shadow-md flex items-center justify-between px-6 md:px-12">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-2xl font-semibold tracking-wide">FitHive</h1>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {adminData && (
          <span className="text-sm opacity-80">
            {adminData.email}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-slate-500 to-slate-600 px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
