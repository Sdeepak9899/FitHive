// import React from 'react'
// import Navigation from '../component/Nav'
// import Sidebar from '../component/Sidebar'
// import { useState } from 'react';
// import { useContext } from 'react';
// import { authDataContext } from '../context/Authcontext';
// import axios from 'axios';
// import { useEffect } from 'react';

// export default function Lists() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [lists, setLists] = useState([]);
//   const { serverUrl } = useContext(authDataContext);


//   const fetchLists = async () => {
//     try {
//       const response = await axios.get(`${serverUrl}/product/productlist`);
//       console.log(response, "jkasdnfkjnasdkzxj")
//     } catch (error) {

//     }
//   }


//   useEffect(() => {
//     fetchLists();
//   }, [])


//   return (
//     <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
//       <Navigation />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div className="mt-24 ml-8">
//         <h1 className="text-3xl font-semibold">All Listed Product</h1>


//         <div>
//           {
//             lists ? lists.length > 0 ? (
//               lists.map((item, index) => (
//                 <div className='w-11/12 md:h-120px] h-[90px] bg-slate-600 rounded-lg flex items-center justify-start gap-1.5 md:gap-8 p-2.5 md:px-8 ' key={index}>

//                   <img src={item.image1} alt={item.name} className='md:w-32 md:h-32 w-20 h-20 object-cover rounded-md ' />

//                 </div>
//               ))
//             )

//               : (<div className='text-white text-lg'>No products found.</div>
//               )
//   }


//         </div>


//       </div>



//     </div>
//   )
// }






// import React, { useEffect, useState, useContext } from "react";
// import Navigation from "../component/Nav";
// import Sidebar from "../component/Sidebar";
// import axios from "axios";
// import { authDataContext } from "../context/Authcontext";
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";
// import { RxCross2 } from "react-icons/rx";

// export default function Lists() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [lists, setLists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limit = 10;

//   const { serverUrl } = useContext(authDataContext);

//   const fetchLists = async (currentPage) => {
//     try {
//       setLoading(true);
//       setError("");

//       const res = await axios.get(
//         `${serverUrl}/product/productlist?page=${currentPage}&limit=${limit}`
//       );

//       setLists(res.data.products || []);
//       setTotalPages(res.data.pages || 1);

//     } catch (err) {
//       setError("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLists(page);
//   }, [page]);

//   return (
//     <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
//       <Navigation />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div className="mt-24 ml-8 mb-8 w-full ">
//         <h1 className="text-3xl font-semibold mb-6 ">
//           All Listed Products
//         </h1>

//         {/* LOADING */}
//         {loading && <p>Loading products...</p>}

//         {/* ERROR */}
//         {error && <p className="text-red-400">{error}</p>}

//         {/* PRODUCT LIST */}
//         {!loading && !error && (
//           <>
//             <div className="flex flex-col gap-4">
//               {lists.length > 0 ? (
//                 lists.map((item) => (
//                   <div
//                     key={item._id}
//                     className="w-11/12 h-[100px] bg-slate-600 rounded-lg flex items-center gap-6 p-3"
//                   >
//                     <img
//                       src={item.Image1}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-md"
//                     />

//                     <div className="flex flex-col">
//                       <h2 className="text-lg font-semibold">
//                         {item.name}
//                       </h2>
//                       <p className="text-sm text-gray-300">
//                         ₹{item.price}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         {item.catagrory} / {item.subCategory}
//                       </p>
//                     </div>
//                     <div className="flex justify-end items-end">
//     <div className=" bg-slate-400 shadow-2xl shadow-black  p-1 cursor-pointer">
//                       <RxCross2 size={20}/>
//                     </div>
//                     </div>
                
//                   </div>
//                 ))
//               ) : (
//                 <p>No products found.</p>
//               )}
//             </div>

//             {/* PAGINATION */}
//             <div className="flex items-center gap-4 mt-8 justify-center">
//               <button
//                 disabled={page === 1}
//                 onClick={() => setPage((p) => p - 1)}
//                 className={`px-4 py-2 rounded cursor-pointer ${page === 1
//                     ? "bg-gray-500 cursor-not-allowed"
//                     : "bg-cyan-400 text-black"
//                   }`}
//               >
//                 <GrPrevious />
//               </button>

//               <span className="text-sm">
//                 Page {page} of {totalPages}
//               </span>

//               <button
//                 disabled={page === totalPages}
//                 onClick={() => setPage((p) => p + 1)}
//                 className={`px-4 py-2 rounded cursor-pointer ${page === totalPages
//                     ? "bg-gray-500 cursor-not-allowed"
//                     : "bg-cyan-400 text-black"
//                   }`}
//               >
//                 <GrNext />
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState, useContext } from "react";
import Navigation from "../component/Nav";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

export default function Lists() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const { serverUrl } = useContext(authDataContext);

  // FETCH PRODUCTS
  const fetchLists = async (currentPage) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `${serverUrl}/product/productlist?page=${currentPage}&limit=${limit}`
      );

      console.log(res,"iodsnoi")
      setLists(res.data.products || []);
      setTotalPages(res.data.pages || 1);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists(page);
  }, [page]);

  // DELETE PRODUCT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${serverUrl}/product/delete/${id}`, {
        withCredentials: true,
      });

      // If last item on page deleted → go back one page safely
      if (lists.length === 1 && page > 1) {
        setPage((p) => p - 1);
      } else {
        fetchLists(page);
      }
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      <Navigation />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="mt-24 ml-8 mb-8 w-full">
        <h1 className="text-3xl font-semibold mb-6">All Listed Products</h1>

        {/* LOADING */}
        {loading && <p>Loading products...</p>}

        {/* ERROR */}
        {error && <p className="text-red-400">{error}</p>}

        {/* PRODUCT LIST */}
        {!loading && !error && (
          <>
            <div className="flex flex-col gap-4">
              {lists.length > 0 ? (
                lists.map((item) => (
                  <div
                    key={item._id}
                    className="w-11/12 h-[100px] bg-slate-600 rounded-lg flex items-center justify-between gap-6 p-3"
                  >
                    <div className="flex items-center gap-6">
                      <img
                        src={item.Image1}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-300">₹{item.price}</p>
                        <p className="text-xs text-gray-400">
                          {item.catagrory} / {item.subCategory}
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => handleDelete(item._id)}
                      className="bg-slate-800 hover:bg-slate-900 p-2 rounded cursor-pointer"
                      title="Delete product"
                    >
                      <RxCross2 size={18} />
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center gap-4 mt-8 justify-center">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`px-4 py-2 rounded cursor-pointer ${
                  page === 1
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-cyan-400 text-black"
                }`}
              >
                <GrPrevious />
              </button>

              <span className="text-sm">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className={`px-4 py-2 rounded cursor-pointer ${
                  page === totalPages
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-cyan-400 text-black"
                }`}
              >
                <GrNext />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
