// import React, { useContext, useEffect, useState } from 'react'
// import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
// import Title from '../component/Title';
// import { shopDataContext } from '../content/ShopContext';
// import Card from '../component/Card';

// function Collection() {

//   let [showFilters, setShowFilters] = useState(false);


//   let {products} = useContext(shopDataContext);

//   let [filterProducts, setFilterProducts] = useState([]);
//   let [categories, setCategories] = useState([]);
//   let [subCategories, setSubCategories] = useState([]);
//   let [sortType, setSortType] = useState("relavent");



//   const toggleCategory = (e) => {
//     let value = e.target.value;
//     if (categories.includes(value)) { 
//       setCategories(categories.filter((item) => item !== value));
//     }else{
//       setCategories([...categories, value]);
//     }
//   }


//    const toggleSubCategory = (e) => {
//     let value = e.target.value;
//     if (subCategories.includes(value)) { 
//       setSubCategories(subCategories.filter((item) => item !== value));
//     }else{
//       setSubCategories([...subCategories, value]);
//     }
//   }


//   const applyFilters = () => {
//     let ProductCopy = products.slice();
//     if (categories.length > 0) {
//       ProductCopy = ProductCopy.filter((item) => categories.includes(item.category));
//     }


//      if (subCategories.length > 0) {
//       ProductCopy = ProductCopy.filter((item) => subCategories.includes(item.subCategory));
//     }

//     setFilterProducts(ProductCopy);
//   }



//   useEffect(()=>{
// setFilterProducts(products);
//   },[products])


//   useEffect(()=>{
//     applyFilters();
//   },[categories, subCategories]);


//   return (
//     <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col md:flex-row overflow-hidden pt-[70px] py-5 gap-16 z-10'>

//       <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilters ? 'h-[45vh]' : 'h-[8vh]'} p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixes`}>
//         <p className='text-[25px] font-semibold flex gap-1 items-center justify-start cursor-pointer ' onClick={() => setShowFilters(prev => !prev)}>

//           FILTER
//           {!showFilters && <FaChevronRight className='text-[18px] md:hidden' />}
//           {showFilters && <FaChevronDown className='text-[18px] md:hidden' />}
//         </p>

//         <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilters ? '' : 'hidden'} md:block`}>

//           <p className='text-[18px] text-[#f8fafa] '>
//             CATEGORIES
//           </p>

//           <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>


//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={'Men'} className='w-[15px] h-[15px] accent-[#00ffff]' onChange={toggleCategory} />
//               Men
//             </p>
//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={' Women'} className='w-[15px] h-[15px] accent-[#00ffff]' />
//               Women
//             </p>
//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={'Kids'} className='w-[15px] h-[15px] accent-[#00ffff]' onClick={toggleCategory} />
//               Kids
//             </p>

//           </div>


//         </div>


//         <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilters ? '' : 'hidden'} md:block`}>

//           <p className='text-[18px] text-[#f8fafa] '>
//             Sub-CATEGORIES
//           </p>

//           <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>


//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={'TopWear'} className='w-[15px] h-[15px] accent-[#00ffff]' onClick={toggleSubCategory}/>
//               TopWear
//             </p>
//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={'BottomWear'} className='w-[15px] h-[15px] accent-[#00ffff]' onClick={toggleSubCategory}/>
//               BottomWear
//             </p>
//             <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//               <input type="checkbox" value={'WinterWear'} className='w-[15px] h-[15px] accent-[#00ffff]' onClick={toggleSubCategory} />
//               WinterWear
//             </p>

//           </div>


//         </div>

//       </div>


//       <div className='lg:pl-[20%] md:py-2.5'>
//         <div className='md:w-[80vw] w-[100vw] min-h-[80vh] flex  justify-bewtween flex-col lg:flow-row gap-5'>
//             <Title text1={"All"} text2={"Collection"}/>


//             <select name='' id='' className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-white rounded-lg  hover:border-[2px] hover:border-[#46d7f7] '>
//                 <option value="relavent" className='w-[100%] h-[100%]'>Sort By: Relavent</option>
//                 <option value="low-high" className='w-[100%] h-[100%]'>Sort By: Low to High</option>
//                 <option value="high-low" className='w-[100%] h-[100%]'>Sort By: High to Low</option>
//             </select>
//         </div>


// <div className='lg:w-[80vw] md:w-[w-60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-8'>


// {/* {
//   filterProducts.map((item,index)=>{
//     <Card key={item.index} id={item._id} name={item.name} price={item.price} image={item.Image1} />
//   })
// } */}



// {
//   filterProducts.map((item) => (
//     <Card
//       key={item._id}
//       id={item._id}
//       name={item.name}
//       price={item.price}
//       image={item.Image1}
//     />
//   ))
// }



// </div>



//       </div>


//     </div>
//   )
// }

// export default Collection;





import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import Title from "../component/Title";
import { shopDataContext } from "../content/ShopContext";
import Card from "../component/Card";

function Collection() {
  const { products, search, showSearch } = useContext(shopDataContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  /* ---------------- TOGGLE HANDLERS ---------------- */

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  /* ---------------- FILTER + SORT (DEFENSIVE) ---------------- */

  const applyFilters = () => {
    let result = [...products];

    if( showSearch && search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase().trim())
      );
      console.log(result,"searchfilter")
    }

    // CATEGORY FILTER (case + space safe)
    if (categories.length) {
      result = result.filter((p) =>
        categories.some(
          (c) =>
            p.category &&
            p.category.toLowerCase().trim() === c.toLowerCase().trim()
        )
      );

      console.log(result,"dijskxncikc")
    }

    // SUB-CATEGORY FILTER
    if (subCategories.length) {
      result = result.filter((p) =>
        subCategories.some(
          (s) =>
            p.subCategory &&
            p.subCategory.toLowerCase().trim() === s.toLowerCase().trim()
        )
      );
      console.log(result,"subcatfilter")
    }

    // SORT
    if (sortType === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortType === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(result);
  };

  /* ---------------- EFFECTS ---------------- */

  useEffect(() => {
    applyFilters();
  }, [products, categories, subCategories, sortType, search, showSearch]);

  /* ---------------- UI ---------------- */

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row pt-[70px] text-white py-26 px-4 md:p-8 ">

      {/* FILTER SIDEBAR */}
      <div
        className={`w-full md:w-[260px] p-4 border-r border-gray-600 transition-all duration-300
        ${showFilters ? "max-h-[500px]" : "max-h-[60px]"} md:max-h-full overflow-hidden`}
      >
        <div
          className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          FILTER
          {!showFilters ? (
            <FaChevronRight className="md:hidden" />
          ) : (
            <FaChevronDown className="md:hidden" />
          )}
        </div>

        {/* Categories */}
        <div className="mt-6 bg-slate-700 rounded-lg p-4">
          <p className="text-lg mb-3">Categories</p>

          {["Men", "woman", "Kids"].map((cat) => (
            <label key={cat} className="flex gap-2 mb-2 cursor-pointer">
              <input
                type="checkbox"
                value={cat}
                onChange={toggleCategory}
                className="accent-cyan-400"
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Sub Categories */}
        <div className="mt-6 bg-slate-700 rounded-lg p-4">
          <p className="text-lg mb-3">Sub Categories</p>

          {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
            <label key={sub} className="flex gap-2 mb-2 cursor-pointer">
              <input
                type="checkbox"
                value={sub}
                onChange={toggleSubCategory}
                className="accent-cyan-400"
              />
              {sub}
            </label>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <Title text1="All" text2="Collection" />

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-slate-700 px-4 py-2 rounded-lg border hover:border-cyan-400"
          >
            <option value="relevant">Sort: Relevant</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterProducts.length ? (
            filterProducts.map((item) => (
              <div
                key={item._id}
                className="transition-transform duration-300 hover:scale-[1.03]"
              >
                <Card
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.Image1}
                />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
