// import { useState, useEffect } from "react";
// import Sidebar from "../component/Sidebar";
// import Navigation from "../component/Nav";
// import axios from "axios";

// const Add = () => {
//   const [images, setImages] = useState([null, null, null, null]);
//   const [previews, setPreviews] = useState([null, null, null, null]);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("TopWear");
//   const [price, setPrice] = useState("");
//   const [subPrice, setSubPrice] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [sizes, setSizes] = useState([]);
//   const [bestSeller, setBestSeller] = useState(false);

//   const serverUrl = import.meta.env.VITE_SERVER_URL;

//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       alert("Only image files are allowed");
//       return;
//     }

//     const newImages = [...images];
//     const newPreviews = [...previews];

//     if (newPreviews[index]) URL.revokeObjectURL(newPreviews[index]);

//     newImages[index] = file;
//     newPreviews[index] = URL.createObjectURL(file);

//     setImages(newImages);
//     setPreviews(newPreviews);
//   };

//   useEffect(() => {
//     return () => {
//       previews.forEach((url) => url && URL.revokeObjectURL(url));
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!images.some(Boolean)) {
//       alert("Upload at least one image");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       images.forEach((img, i) => img && formData.append(`image${i + 1}`, img));

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("price", price);
//       formData.append("subPrice", subPrice);

//       const res = await axios.post(`${serverUrl}/product/addProduct`, formData, {
//         withCredentials: true,
//       });

//       console.log("Response:", res.data);
//       alert("Product added successfully!");

//       // Reset form
//       setImages([null, null, null, null]);
//       setPreviews([null, null, null, null]);
//       setName("");
//       setDescription("");
//       setCategory("Men");
//       setSubCategory("TopWear");
//       setPrice("");
//       setSubPrice("");
//     } catch (err) {
//       console.error("Add product error:", err);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <div className="w-full flex min-h-screen overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] text-white relative">
//       <Navigation />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div
//         className={`pt-20 px-3 transition-all duration-500 min-h-screen w-full ${isSidebarOpen ? "ml-4" : "ml-0"
//           }`}
//       >
//         <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 py-14">
//           <h1 className="text-2xl md:text-4xl font-bold">Add Product Page</h1>

//           {/* Upload Images */}
//           <div className="flex flex-col gap-6">
//             <p className="text-xl md:text-2xl font-semibold">Upload Images</p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-2/4">
//               {images.map((_, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <input
//                     type="file"
//                     id={`image${i}`}
//                     hidden
//                     accept="image/*"
//                     onChange={(e) => handleImageChange(e, i)}
//                   />
//                   <label
//                     htmlFor={`image${i}`}
//                     className="w-[120px] h-[120px] flex items-center justify-center cursor-pointer border-2 border-[#333] rounded-xl hover:border-[#46d1f7]"
//                   >
//                     <img
//                       src={previews[i] || "/upload.png"}
//                       alt="upload"
//                       className="w-[90%] h-[90%] object-cover rounded-lg"
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Name */}
//           <div className="w-full flex flex-col gap-3">
//             <p className="text-xl font-semibold">Product Name</p>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Type here"
//               className="w-[600px] max-w-full h-12 px-4 rounded-lg border-2 bg-slate-600 placeholder:text-white/70"
//               required
//             />
//           </div>

//           {/* Product Description */}
//           <div className="w-full flex flex-col gap-3">
//             <p className="text-xl font-semibold">Product Description</p>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Description"
//               className="w-[600px] max-w-full h-40 px-4 py-2 rounded-lg border-2 bg-slate-600 placeholder:text-white/70"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div className="flex gap-6 flex-wrap">
//             <div className="flex flex-col gap-2">
//               <p className="text-xl font-semibold">Category</p>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="bg-slate-600 px-4 py-2 rounded-lg border-2"
//               >
//                 <option>Men</option>
//                 <option>Women</option>
//                 <option>Kids</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <p className="text-xl font-semibold">Sub Category</p>
//               <select
//                 value={subCategory}
//                 onChange={(e) => setSubCategory(e.target.value)}
//                 className="bg-slate-600 px-4 py-2 rounded-lg border-2"
//               >
//                 <option>TopWear</option>
//                 <option>BottomWear</option>
//                 <option>WinterWear</option>
//               </select>
//             </div>
//           </div>

//           {/* Price Inputs */}
//           <div className="flex flex-col gap-3 flex-wrap">
//             <p className="text-xl font-semibold">Price</p>
//             <input
//               value={price}
//               onChange={(e) => setPrice(Number(e.target.value))}
//               type="number"
//               placeholder="Price"
//               className="w-[200px] h-12 px-4 rounded-lg border-2 bg-slate-600 placeholder:text-white/70"
//               min="0"
//               required
//             />

//           </div>


//           <div className="flex flex-col gap-3 flex-wrap">
//             <p className="text-xl font-semibold">Size</p>

//             <div className="flex gap-3 flex-wrap items-center justify-start">



//               <div
//                 className={` p-4 rounded-lg border-2 bg-slate-600  cursor-pointer ${sizes.includes("S") ? "border-blue-500" : ""}`} onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(size => size !== "S") : [...prev, "S"])}
//               >S
//               </div>

//               <div
//                 className={` p-4 rounded-lg border-2 bg-slate-600  cursor-pointer ${sizes.includes("M") ? "border-blue-500" : ""}`} onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(size => size !== "M") : [...prev, "M"])}
//               >M
//               </div>

//               <div
//                 className={` p-4 rounded-lg border-2 bg-slate-600  cursor-pointer ${sizes.includes("L") ? "border-blue-500" : ""}`} onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(size => size !== "L") : [...prev, "L"])}
//               >L
//               </div>

//               <div className={` p-4 rounded-lg border-2 bg-slate-600  cursor-pointer ${sizes.includes("XL") ? "border-blue-500" : ""}`} onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(size => size !== "XL") : [...prev, "XL"])}
//               >
//                 XL
//               </div>

//               <div
//                 className={` p-4 rounded-lg border-2 bg-slate-600  cursor-pointer ${sizes.includes("XXL") ? "border-blue-500" : ""}`} onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(size => size !== "XXL") : [...prev, "XXL"])}
//               >XXL
//               </div>

//             </div>

//           </div>


//           <div className="w-3/4 flex items-center justify-start gap-4 ">

//           <input type="checkout" id="checkout" className="bg-amber-200 cursor-pointer "/>

//           <label htmlFor="checkout" className="text-lg cursor-pointer ">Mark as Best Seller</label>

//           </div>


//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-4 bg-[#46d1f7] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#2bbbe0] w-full sm:w-80"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;





// import { useState, useEffect, useContext } from "react";
// import Sidebar from "../component/Sidebar";
// import Navigation from "../component/Nav";
// import axios from "axios";
// import { authDataContext } from "../context/Authcontext";

// const Add = () => {
//   const [images, setImages] = useState([null, null, null, null]);
//   const [previews, setPreviews] = useState([null, null, null, null]);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("TopWear");
//   const [price, setPrice] = useState("");
//   const [sizes, setSizes] = useState([]);
//   const [bestSeller, setBestSeller] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   let serverUrl = useContext(authDataContext)

//   // const serverUrl = import.meta.env.VITE_SERVER_URL;

//   // ---------- IMAGE HANDLER ----------
//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       alert("Only image files allowed");
//       return;
//     }

//     const newImages = [...images];
//     const newPreviews = [...previews];

//     if (newPreviews[index]) {
//       URL.revokeObjectURL(newPreviews[index]);
//     }

//     newImages[index] = file;
//     newPreviews[index] = URL.createObjectURL(file);

//     setImages(newImages);
//     setPreviews(newPreviews);
//   };

//   // ---------- CLEANUP ----------
//   useEffect(() => {
//     return () => {
//       previews.forEach((url) => url && URL.revokeObjectURL(url));
//     };
//   }, [previews]);

//   // ---------- SIZE TOGGLE ----------
//   const toggleSize = (size) => {
//     setSizes((prev) =>
//       prev.includes(size)
//         ? prev.filter((s) => s !== size)
//         : [...prev, size]
//     );
//   };

//   // ---------- SUBMIT ----------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!images.some(Boolean)) {
//       alert("Upload at least one image");
//       return;
//     }

//     if (sizes.length === 0) {
//       alert("Select at least one size");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       images.forEach((img, i) => {
//         if (img) formData.append(`image${i + 1}`, img);
//       });

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("price", price);
//       formData.append("sizes", JSON.stringify(sizes));
//       formData.append("bestSeller", bestSeller);

//       const res = await axios.post(
//         `${serverUrl}/product/addProduct`,
//         formData,
//         { withCredentials: true }
//       );

//       console.log(res.data);
//       alert("Product added successfully");

//       // RESET
//       if(res.data){
//       setImages([null, null, null, null]);
//       setPreviews([null, null, null, null]);
//       setName("");
//       setDescription("");
//       setCategory("Men");
//       setSubCategory("TopWear");
//       setPrice("");
//       setSizes([]);
//       setBestSeller(false);


//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
//       <Navigation />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div
//         className={`pt-20 px-4 w-full transition-all ${
//           isSidebarOpen ? "ml-4" : "ml-0"
//         }`}
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-10 py-10 w-full max-w-5xl"
//         >
//           <h1 className="text-3xl font-bold">Add Product</h1>

//           {/* IMAGES */}
//           <div>
//             <p className="text-xl font-semibold mb-4">Upload Images</p>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//               {images.map((_, i) => (
//                 <div key={i}>
//                   <input
//                     type="file"
//                     hidden
//                     id={`image${i}`}
//                     accept="image/*"
//                     onChange={(e) => handleImageChange(e, i)}
//                   />
//                   <label
//                     htmlFor={`image${i}`}
//                     className="w-28 h-28 border-2 border-gray-600 rounded-xl flex items-center justify-center cursor-pointer hover:border-cyan-400"
//                   >
//                     <img
//                       src={previews[i] || "/upload.png"}
//                       alt="upload"
//                       className="w-full h-full object-cover rounded-xl"
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* NAME */}
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Product name"
//             className="w-full max-w-md h-12 px-4 bg-slate-600 rounded-lg"
//             required
//           />

//           {/* DESCRIPTION */}
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             className="w-full max-w-md h-36 px-4 py-2 bg-slate-600 rounded-lg"
//             required
//           />

//           {/* CATEGORY */}
//           <div className="flex gap-4 flex-wrap">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="bg-slate-600 px-4 py-2 rounded-lg"
//             >
//               <option>Men</option>
//               <option>Women</option>
//               <option>Kids</option>
//             </select>

//             <select
//               value={subCategory}
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="bg-slate-600 px-4 py-2 rounded-lg"
//             >
//               <option>TopWear</option>
//               <option>BottomWear</option>
//               <option>WinterWear</option>
//             </select>
//           </div>

//           {/* PRICE */}
//           <input
//             type="number"
//             min="0"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Price"
//             className="w-40 h-12 px-4 bg-slate-600 rounded-lg"
//             required
//           />

//           {/* SIZES */}
//           <div>
//             <p className="text-lg mb-2">Sizes</p>
//             <div className="flex gap-3 flex-wrap">
//               {["S", "M", "L", "XL", "XXL"].map((size) => (
//                 <div
//                   key={size}
//                   onClick={() => toggleSize(size)}
//                   className={`px-4 py-2 rounded-lg cursor-pointer border-2 ${
//                     sizes.includes(size)
//                       ? "border-cyan-400"
//                       : "border-gray-600"
//                   } bg-slate-600`}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* BEST SELLER */}
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={bestSeller}
//               onChange={(e) => setBestSeller(e.target.checked)}
//             />
//             Mark as Best Seller
//           </label>

//           {/* SUBMIT */}
//           <button
//             type="submit"
//             className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg w-full max-w-xs"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;




// import { useState, useEffect, useContext } from "react";
// import Sidebar from "../component/Sidebar";
// import Navigation from "../component/Nav";
// import axios from "axios";
// import { authDataContext } from "../context/Authcontext";

// const Add = () => {
//   const { serverUrl } = useContext(authDataContext); // ✅ FIX
//   const [images, setImages] = useState([null, null, null, null]);
//   const [previews, setPreviews] = useState([null, null, null, null]);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("TopWear");
//   const [price, setPrice] = useState("");
//   const [sizes, setSizes] = useState([]);
//   const [bestSeller, setBestSeller] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // ---------- IMAGE HANDLER ----------
//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.startsWith("image/")) return;

//     const imgs = [...images];
//     const prevs = [...previews];

//     if (prevs[index]) URL.revokeObjectURL(prevs[index]);

//     imgs[index] = file;
//     prevs[index] = URL.createObjectURL(file);

//     setImages(imgs);
//     setPreviews(prevs);
//   };

//   useEffect(() => {
//     return () => previews.forEach((url) => url && URL.revokeObjectURL(url));
//   }, [previews]);

//   const toggleSize = (size) => {
//     setSizes((prev) =>
//       prev.includes(size)
//         ? prev.filter((s) => s !== size)
//         : [...prev, size]
//     );
//   };

//   // ---------- SUBMIT ----------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!images.some(Boolean)) {
//       alert("Upload at least one image");
//       return;
//     }

//     if (!sizes.length) {
//       alert("Select at least one size");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       images.forEach((img, i) => {
//         if (img) formData.append(`image${i + 1}`, img);
//       });

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("catagrory", category); // backend spelling
//       formData.append("subCategory", subCategory);
//       formData.append("price", price);
//       formData.append("sizes", JSON.stringify(sizes));
//       formData.append("bestSeller", bestSeller);

//       const res = await axios.post(
//         `${serverUrl}/product/addProduct`,
//         formData,
//         { withCredentials: true }
//       );

//       alert("Product added successfully");

//       // RESET
//       setImages([null, null, null, null]);
//       setPreviews([null, null, null, null]);
//       setName("");
//       setDescription("");
//       setCategory("Men");
//       setSubCategory("TopWear");
//       setPrice("");
//       setSizes([]);
//       setBestSeller(false);
//     } catch (err) {
//       console.error("ADD PRODUCT ERROR:", err);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
//       <Navigation />
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div className={`pt-20 px-4 w-full ${isSidebarOpen ? "ml-4" : "ml-0"}`}>
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-5xl flex flex-col gap-8 py-10"
//         >
//           <h1 className="text-3xl font-bold">Add Product</h1>

//           {/* IMAGES */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {images.map((_, i) => (
//               <div key={i}>
//                 <input
//                   type="file"
//                   hidden
//                   id={`image${i}`}
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e, i)}
//                 />
//                 <label
//                   htmlFor={`image${i}`}
//                   className="w-28 h-28 border-2 border-gray-600 rounded-xl flex items-center justify-center cursor-pointer"
//                 >
//                   <img
//                     src={previews[i] || "/upload.png"}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                 </label>
//               </div>
//             ))}
//           </div>

//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Product Name"
//             className="bg-slate-600 p-3 rounded"
//             required
//           />

//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             className="bg-slate-600 p-3 rounded h-32"
//             required
//           />

//           <div className="flex gap-4">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="bg-slate-600 p-2 rounded"
//             >
//               <option>Men</option>
//               <option>Women</option>
//               <option>Kids</option>
//             </select>

//             <select
//               value={subCategory}
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="bg-slate-600 p-2 rounded"
//             >
//               <option>TopWear</option>
//               <option>BottomWear</option>
//               <option>WinterWear</option>
//             </select>
//           </div>

//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Price"
//             className="bg-slate-600 p-3 rounded w-40"
//             required
//           />

//           <div className="flex gap-3 flex-wrap">
//             {["S", "M", "L", "XL", "XXL"].map((s) => (
//               <div
//                 key={s}
//                 onClick={() => toggleSize(s)}
//                 className={`px-4 py-2 border-2 rounded cursor-pointer ${
//                   sizes.includes(s)
//                     ? "border-cyan-400"
//                     : "border-gray-600"
//                 }`}
//               >
//                 {s}
//               </div>
//             ))}
//           </div>

//           <label className="flex gap-2 items-center">
//             <input
//               type="checkbox"
//               checked={bestSeller}
//               onChange={(e) => setBestSeller(e.target.checked)}
//             />
//             Best Seller
//           </label>

//           <button className="bg-cyan-400 text-black px-6 py-3 rounded font-bold w-64">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;









import { useState, useEffect, useContext } from "react";
import Sidebar from "../component/Sidebar";
import Navigation from "../component/Nav";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";

const Add = () => {
  const { serverUrl } = useContext(authDataContext);

  const [images, setImages] = useState([null, null, null, null]);
  const [previews, setPreviews] = useState([null, null, null, null]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // ---------------- IMAGE HANDLER ----------------
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    const imgs = [...images];
    const prevs = [...previews];

    if (prevs[index]) URL.revokeObjectURL(prevs[index]);

    imgs[index] = file;
    prevs[index] = URL.createObjectURL(file);

    setImages(imgs);
    setPreviews(prevs);
  };

  useEffect(() => {
    return () => previews.forEach((url) => url && URL.revokeObjectURL(url));
  }, [previews]);

  // ---------------- SIZE HANDLER ----------------
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❗ Backend requires ALL 4 images
    if (images.some((img) => !img)) {
      alert("All 4 images are required");
      return;
    }

    if (!sizes.length) {
      alert("Select at least one size");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      images.forEach((img, i) => {
        formData.append(`image${i + 1}`, img);
      });

      formData.append("name", name.trim());
      formData.append("description", description);
      formData.append("catagrory", category); // backend spelling
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);

      await axios.post(`${serverUrl}/product/addProduct`, formData, {
        withCredentials: true,
      });

      alert("Product added successfully");

      // RESET
      setImages([null, null, null, null]);
      setPreviews([null, null, null, null]);
      setName("");
      setDescription("");
      setCategory("Men");
      setSubCategory("TopWear");
      setPrice("");
      setSizes([]);
      setBestSeller(false);

    } catch (err) {
      if (err.response?.status === 409) {
        alert("Product already exists");
      } else {
        alert("Failed to add product");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      <Navigation />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className={`pt-20 px-4 w-full ${isSidebarOpen ? "ml-4" : "ml-0"}`}>
        <form
          onSubmit={handleSubmit}
          className="max-w-5xl flex flex-col gap-8 py-10"
        >
          <h1 className="text-3xl font-bold">Add Product</h1>

          {/* IMAGES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((_, i) => (
              <div key={i}>
                <input
                  type="file"
                  hidden
                  id={`image${i}`}
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, i)}
                />
                <label
                  htmlFor={`image${i}`}
                  className="w-28 h-28 border-2 border-gray-600 rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={previews[i] || "/upload.png"}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </label>
              </div>
            ))}
          </div>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            className="bg-slate-600 p-3 rounded"
            required
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="bg-slate-600 p-3 rounded h-32"
            required
          />

          <div className="flex gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-slate-600 p-2 rounded"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>

            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="bg-slate-600 p-2 rounded"
            >
              <option>TopWear</option>
              <option>BottomWear</option>
              <option>WinterWear</option>
            </select>
          </div>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="bg-slate-600 p-3 rounded w-40"
            required
          />

          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <div
                key={s}
                onClick={() => toggleSize(s)}
                className={`px-4 py-2 border-2 rounded cursor-pointer ${
                  sizes.includes(s)
                    ? "border-cyan-400"
                    : "border-gray-600"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={bestSeller}
              onChange={(e) => setBestSeller(e.target.checked)}
            />
            Best Seller
          </label>

          <button
            disabled={loading}
            className={`px-6 py-3 rounded font-bold w-64 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-cyan-400 text-black"
            }`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
