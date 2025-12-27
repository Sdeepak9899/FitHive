// import React from "react";
// import { createContext } from "react";


// export const authDataContext = createContext();

// export default function AuthContext({ children }) {
// const  serverUrl = process.env.VITE_PUBLIC_URL;


//     const value = {
//         serverUrl
//     };


//     return (
// <div>

//             <authDataContext.Provider value={value}>
//                 {children}
//             </authDataContext.Provider>
       
// </div>
//     )

// }




import { createContext } from "react";

export const authDataContext = createContext();

export default function AuthContext({ children }) {

  const serverUrl = import.meta.env.VITE_PUBLIC_URL; 

  const value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}
