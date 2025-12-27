// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/vcart logo.png';
// import { LuEyeOff } from "react-icons/lu";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
// import google from '../assets/Google.svg';
// import axois from 'axios';
// import { authDataContext } from '../content/authContent.jsx';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../../utils/Firebasic.js';

// function Registration() {

//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [show, setShow] = useState(false);
//     const { serverUrl } = useContext(authDataContext);


//     let navigation = useNavigate();


//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const result = await axois.post(serverUrl + "/auth/register", {
//                 name,
//                 email,
//                 password
//             }, { withCredentials: true });

//             console.log(result);
//         } catch (error) {
//             console.log("signup error", error)
//         }
//     }
//     // console.log(serverUrl);


//   const handleGoogleLogin = async () => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);

//     const user = result.user;

//     const payload = {
//       name: user.displayName,
//       email: user.email,
//       picture: user.photoURL,
//     };

//     const res = await axios.post(
//       "http://localhost:8000/api/v1/auth/googleLogin",
//       payload,
//       { withCredentials: true }
//     );

//     console.log("LOGIN SUCCESS:", res.data);
//   } catch (error) {
//     console.log("google sign in error:", error);
//   }
// };



//     return (
//         <div className="min-h-screen w-full bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col p-6">

//             <div
//                 className='w-[20%] h-17 flex items-center justify-start px-2 gap-2 cursor-pointer'
//                 onClick={() => navigate("/")}
//             >
//                 <img className='w-[45px]' src={logo} alt='logo' />
//                 <h1 className='text-xl'> Fithive</h1>
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center mb-6"
//             >
//                 <h1 className="text-5xl font-bold tracking-wide mt-6">Create Account</h1>
//                 <p className="text-gray-300 mt-2 text-sm">
//                     Welcome to <span className="text-blue-400 font-medium">Fithive</span> — your next-gen shopping hub
//                 </p>
//             </motion.div>
//             <div className='items-center justify-center flex'>

//                 <motion.form
//                     onSubmit={handleSignup}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full max-w-[420px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col items-center justify-center"
//                 >
//                     <button
//                         type="button"
//                         className="w-full flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
//                         onClick={handleGoogleLogin}
//                     >
//                         <img src={google} alt="Google" width={20} height={20} />
//                         Continue with Google
//                     </button>

//                     <div className="flex items-center w-full my-6 text-gray-400 text-sm">
//                         <div className="flex-grow h-px bg-gray-600"></div>
//                         <span className="px-3">OR</span>
//                         <div className="flex-grow h-px bg-gray-600"></div>
//                     </div>

//                     <div className="w-full flex flex-col gap-4 relative">

//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"

//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                         />

//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                         />

//                         <input
//                             type={show ? "text" : "password"}
//                             placeholder="Password"
//                             className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"
//                             onChange={(e) => setPassword(e.target.value)}
//                             value={password}
//                         />

//                         {show ? (
//                             <LuEyeOff
//                                 className="absolute bottom-3 right-[5%] text-lg cursor-pointer"
//                                 onClick={() => setShow(false)}
//                             />
//                         ) : (
//                             <MdOutlineRemoveRedEye
//                                 className="absolute bottom-3 right-[5%] text-lg cursor-pointer"
//                                 onClick={() => setShow(true)}
//                             />
//                         )}
//                     </div>

//                     <motion.button
//                         type="submit"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg py-3 mt-6 font-semibold shadow-md cursor-pointer"
//                     >
//                         Create Account
//                     </motion.button>

//                     <p className="text-sm mt-4 text-gray-300">
//                         Already have an account?{" "}
//                         <Link to="/login" className="text-blue-400 hover:underline cursor-pointer">
//                             Login
//                         </Link>
//                     </p>
//                 </motion.form>

//             </div>
//         </div>
//     )
// }

// export default Registration;





import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/vcart logo.png";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import google from "../assets/Google.svg";
import axios from "axios";   // FIXED
import { authDataContext } from "../content/authContent.jsx";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { auth } from "../../utils/Firebasic.js";
// import { getCurrentUser } from "../content/UserContext.jsx"; 

function Registration() {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/auth/register",
        { name, email, password },
        { withCredentials: true }
      );
        // getCurrentUser();
      navigate("/login");
      console.log(result.data);
    } catch (error) {
      console.log("signup error", error);
    }
  };

  // GOOGLE LOGIN FIXED
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const payload = {
        name: user.displayName,
        email: user.email,
        picture: user.photoURL,
      };

      const res = await axios.post(
           serverUrl + "/auth/googleLogin",
        payload,
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
      console.log("LOGIN SUCCESS:", res.data);
    } catch (error) {
      console.log("google sign in error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col p-6">
      <div
        className="w-[20%] h-17 flex items-center justify-start px-2 gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[45px]" src={logo} alt="logo" />
        <h1 className="text-xl"> Fithive</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="text-5xl font-bold tracking-wide mt-6">Create Account</h1>
        <p className="text-gray-300 mt-2 text-sm">
          Welcome to <span className="text-blue-400 font-medium">Fithive</span> — your next-gen shopping hub
        </p>
      </motion.div>

      <div className="items-center justify-center flex">
        <motion.form
          onSubmit={handleSignup}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col items-center justify-center"
        >
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <img src={google} alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          <div className="flex items-center w-full my-6 text-gray-400 text-sm">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="px-3">OR</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          <div className="w-full flex flex-col gap-4 relative">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400 transition-all duration-300"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {show ? (
              <LuEyeOff
                className="absolute bottom-3 right-[5%] text-lg cursor-pointer"
                onClick={() => setShow(false)}
              />
            ) : (
              <MdOutlineRemoveRedEye
                className="absolute bottom-3 right-[5%] text-lg cursor-pointer"
                onClick={() => setShow(true)}
              />
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg py-3 mt-6 font-semibold shadow-md cursor-pointer"
          >
            Create Account
          </motion.button>

          <p className="text-sm mt-4 text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline cursor-pointer">
              Login
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
}

export default Registration;
