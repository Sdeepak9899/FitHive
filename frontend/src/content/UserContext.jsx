"use client";

import axios from "axios";
import  { createContext, useEffect, useState, useContext } from "react";
import { authDataContext } from "./authContent";

export const userDataContext = createContext();

export default function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      const result = await axios.post(`${serverUrl}/user/getCurrentUser`, {}, { withCredentials: true });
      setUserData(result.data);
      console.log(result.data, "(result.data)");
    } catch (error) {
      setUserData(null);
      console.log("Error fetching current user:", error);
    }
  };

  useEffect(() => { 
    getCurrentUser();
  }, []);

  const value = { userData, setUserData, getCurrentUser };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}
