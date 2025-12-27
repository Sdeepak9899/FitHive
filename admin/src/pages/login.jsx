import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";
import { adminDataContext } from "../context/Admincontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { serverUrl } = useContext(authDataContext);
  const { setAdminData } = useContext(adminDataContext);
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${serverUrl}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      // save admin in context
      setAdminData(res.data.admin);

      console.log("Admin login success:", res.data);
      navigate("/"); // redirect
    } catch (error) {
      console.error(
        "Admin login error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[420px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Admin Login</h1>

        <form onSubmit={handleAdminLogin} className="flex flex-col gap-4 relative">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full h-11 bg-transparent border border-white/30 rounded-lg px-3 outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!show ? (
              <MdOutlineRemoveRedEye
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShow(true)}
              />
            ) : (
              <LuEyeOff
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShow(false)}
              />
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg py-3 mt-4 font-semibold"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
