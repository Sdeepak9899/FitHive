import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./Authcontext";

export const adminDataContext = createContext();

export default function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      const result = await axios.post(
        `${serverUrl}/user/getAdmin`,
        {},
        { withCredentials: true }
      );
      setAdminData(result.data);
      console.log("✅ Admin login success:", result.data);

      // Optional: persist admin data
      localStorage.setItem("adminData", JSON.stringify(result.data));
    } catch (error) {
      setAdminData(null);
      console.log("❌ Login Error:", error.response?.data || error.message);
      localStorage.removeItem("adminData");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("adminData");
    if (saved) {
      setAdminData(JSON.parse(saved));
    }
    getAdmin();
  }, []);

  const value = {
    adminData,
    setAdminData,
    getAdmin,
  };

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}
