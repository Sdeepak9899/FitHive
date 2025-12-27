// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { shopDataContext } from '../content/ShopContext'
// import { useEffect } from 'react'

// function ProductDetails() {
//     const { productId } = useParams()
//     const { products, currency } = useContext(shopDataContext)

//     const [productData, setProductData] = useState(false)

//     const [image, setImage] = useState('')
//     const [image1, setImage1] = useState('')
//     const [image2, setImage2] = useState('')
//     const [image3, setImage3] = useState('')
//     const [image4, setImage4] = useState('')
//     const [size, setSize] = useState('')

//     const fetchProductData = async () => {
//         products.map((item) => {
//             if (item._id === productId) {
//                 setProductData(item)
//                 console.log(productData, "productdata hjbsdkhf")

//                 setImage1(item.image1)
//                 setImage2(item.image2)
//                 setImage3(item.image3)
//                 setImage4(item.image4)
//                 setImage(item.image1)

//                 return null;

//             }
//         })
//     }


//     useEffect(() => {

//         fetchProductData()
//     }, [productId, products])


//     return productData ? (
//         <div>

//             <div className='[100vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex-col lg:flex-row gap-5 '>

//                 <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-16 flex items-center justify-center md:gap-2.5 flex-col-reverse lg:flex-row'>
//                         <div className='lg:w-[20%] md:w-[80%] lg:h-[80%] h-[10%]  flex items-center justify-center gap-12 lg:flex-col flex-wrap'>



//                         </div>
//                 </div>


//             </div>

//         </div>
//     ) : <div className='opacit'>

//     </div>
// }

// export default ProductDetails





// import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { shopDataContext } from '../content/ShopContext'

// function ProductDetails() {
//   const { productId } = useParams()
//   const { products, currency } = useContext(shopDataContext)

//   const [product, setProduct] = useState(null)
//   const [activeImage, setActiveImage] = useState('')
//   const [size, setSize] = useState('')

//   useEffect(() => {
//     if (!products || products.length === 0) return

//     const foundProduct = products.find(
//       (item) => item._id === productId
//     )

//     console.log(foundProduct,"kuhsdbkcibsd")

//     if (foundProduct) {
//       setProduct(foundProduct)
//       setActiveImage(foundProduct.image1)
//     }
//   }, [productId, products])

//   if (!product) return null // or loader

//   const images = [
//     product.image1,
//     product.image2,
//     product.image3,
//     product.image4,
//   ].filter(Boolean)

//   console.log(images,"uhsdbikhbdskhzxj")

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
//       <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">

//         {/* LEFT : IMAGE SECTION */}
//         <div className="flex gap-4 lg:w-1/2">
//           <div className="flex lg:flex-col gap-3">
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt=""
//                 onClick={() => setActiveImage(img)}
//                 className={`w-20 h-20 object-cover cursor-pointer border 
//                   ${activeImage === img ? 'border-white' : 'border-transparent'}`}
//               />
//             ))}
//           </div>

//           <div className="flex-1 flex items-center justify-center">
//             <img
//               src={activeImage}
//               alt={product.name}
//               className="max-h-[500px] object-contain"
//             />
//           </div>
//         </div>

//         {/* RIGHT : DETAILS */}
//         <div className="lg:w-1/2 space-y-5">
//           <h1 className="text-3xl font-semibold">{product.name}</h1>
//           <p className="text-xl">
//             {currency}{product.price}
//           </p>

//           <p className="text-gray-300">{product.description}</p>

//           {/* SIZE SELECT */}
//           {product.sizes?.length > 0 && (
//             <div className="flex gap-3 mt-4">
//               {product.sizes.map((s, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSize(s)}
//                   className={`px-4 py-2 border 
//                     ${size === s ? 'bg-white text-black' : 'border-gray-400'}`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           )}

//           <button className="mt-6 px-6 py-3 bg-white text-black font-semibold">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails




// import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { shopDataContext } from '../content/ShopContext';

// function ProductDetails() {
//   const { productId } = useParams();
//   const { products, currency } = useContext(shopDataContext);

//   const [product, setProduct] = useState(null);
//   const [activeImage, setActiveImage] = useState('');
//   const [size, setSize] = useState('');

//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     const foundProduct = products.find((item) => item._id === productId);

//     console.log(foundProduct,"foundProduct iojsdhfoiujs")

//     if (foundProduct) {
//       setProduct(foundProduct);
//       setActiveImage(foundProduct.image1);
//       window.scrollTo();
//     }
//   }, [productId, products]);

//   if (!product) {
//     return (
//       <div className="w-full h-screen bg-[#0c2025] flex items-center justify-center">
//         <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   const images = [
//     product.Image1,
//     product.Image2,
//     product.Image3,
//     product.Image4,
//   ].filter(Boolean);

//   console.log(activeImage,"kjsdnfijnsd")

//   console.log(images,"khjbdskjc images")


//   return (
//     <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white pt-24 pb-20">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

//           {/* LEFT: IMAGE GALLERY */}
//           <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
//             {/* Thumbnails */}
//             <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:w-24">
//               {images.map((img, index) => (
//                 <div 
//                   key={index}
//                   onClick={() => setActiveImage(img)}
//                   className={`relative flex-shrink-0 w-20 h-24 md:w-full cursor-pointer transition-all duration-300 border-2 overflow-hidden
//                     ${activeImage === img ? 'border-cyan-400' : 'border-white'}`}
//                 >
//                   <img src={img} alt="" className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>

//             {/* Main Display */}
//             <div className="flex-1 bg-white/5 border border-white/10 rounded-sm overflow-hidden">
//               <img
//                 src={activeImage}
//                 alt={product.name}
//                 className="w-full h-auto max-h-[700px] object-cover animate-fade-in"
//               />
//             </div>
//           </div>

//           {/* RIGHT: PRODUCT INFO */}
//           <div className="w-full lg:w-[40%] flex flex-col space-y-8 lg:sticky lg:top-24 h-fit">
//             <div className="space-y-2">
//               <p className="text-cyan-400 text-sm tracking-[0.3em] font-bold uppercase">LIVN </p>
//               <h1 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
//                 {product.name}
//               </h1>
//               <p className="text-3xl font-medium mt-4">
//                 {currency}{product.price}
//               </p>
//             </div>

//             <div className="h-[1px] w-full bg-white/10" />

//             <div className="space-y-4">
//               <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Description</h3>
//               <p className="text-gray-300 leading-relaxed font-light">
//                 {product.description}
//               </p>
//             </div>

//             {/* SIZE SELECTION */}
//             {product.sizes?.length > 0 && (
//               <div className="space-y-4">
//                 <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Select Size</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {product.sizes.map((s, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setSize(s)}
//                       className={`min-w-[50px] h-[50px] px-4 border transition-all duration-300 flex items-center justify-center font-medium
//                         ${size === s 
//                           ? 'bg-white text-black border-white' 
//                           : 'border-white/20 text-white hover:border-white'}`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* ACTION BUTTONS */}
//             <div className="pt-6 space-y-4">
//               <button 
//                 disabled={!size && product.sizes?.length > 0}
//                 className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
//               >
//                 {size || product.sizes?.length === 0 ? 'Add to Bag' : 'Select a Size'}
//               </button>

//               <div className="flex items-center justify-center gap-8 py-4 border-t border-white/10">
//                 <div className="flex flex-col items-center gap-1">
//                   <span className="text-[10px] text-gray-500 uppercase tracking-widest">Free Shipping</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-1">
//                   <span className="text-[10px] text-gray-500 uppercase tracking-widest">Secure Payment</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;





// import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { shopDataContext } from '../content/ShopContext';

// function ProductDetails() {
//     const { productId } = useParams();
//     const { products, currency } = useContext(shopDataContext);

//     const [product, setProduct] = useState(null);
//     const [activeImage, setActiveImage] = useState('');
//     const [size, setSize] = useState('');

//     useEffect(() => {
//         if (!products || products.length === 0) return;

//         const foundProduct = products.find((item) => item._id === productId);
//         console.log(foundProduct, "foundProduct");

//         if (foundProduct) {
//             setProduct(foundProduct);
//             setActiveImage(foundProduct.Image1 || '');

//         }
//     }, [productId, products]);

//     if (!product) {
//         return (
//             <div className="w-full h-screen bg-[#0c2025] flex items-center justify-center">
//                 <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//         );
//     }

//     // Safe images array with lowercase keys
//     const images = [
//         product.Image1,
//         product.Image2,
//         product.Image3,
//         product.Image4,
//     ].filter(Boolean);

//     const mainImage = activeImage || images[0];

//     return (
//         <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white pt-24 pb-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

//                     {/* LEFT: IMAGE GALLERY */}
//                     <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
//                         {/* Thumbnails */}
//                         <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:w-24">
//                             {images.map((img, index) => (
//                                 <div
//                                     key={index}
//                                     onClick={() => setActiveImage(img)} // <-- THIS is the magic
//                                     className={`relative flex-shrink-0 w-20 h-24 md:w-full cursor-pointer transition-all duration-300 border-2 overflow-hidden
//         ${activeImage === img ? 'border-cyan-400' : 'border-white/30'}`}
//                                 >
//                                     <img
//                                         src={img}
//                                         alt={`${product.name} thumbnail ${index + 1}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* main display */}
//                         <div className="flex-1 bg-white/5 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
//                             <img
//                                 src={mainImage}
//                                 alt={product.name}
//                                 className="w-full h-auto max-h-[700px] object-contain animate-fade-in"
//                             />
//                         </div>
//                     </div>

//                     {/* RIGHT: PRODUCT INFO */}
//                     <div className="w-full lg:w-[40%] flex flex-col space-y-8 lg:sticky lg:top-24 h-fit">
//                         <div className="space-y-2">
//                             <p className="text-cyan-400 text-sm tracking-[0.3em] font-bold uppercase">LIVN</p>
//                             <h1 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
//                                 {product.name}
//                             </h1>
//                             <p className="text-3xl font-medium mt-4">
//                                 {currency}{product.price}
//                             </p>
//                         </div>

//                         <div className="h-[1px] w-full bg-white/10" />

//                         <div className="space-y-4">
//                             <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Description</h3>
//                             <p className="text-gray-300 leading-relaxed font-light">
//                                 {product.description}
//                             </p>
//                         </div>

//                         {/* SIZE SELECTION */}
//                         {product.sizes?.length > 0 && (
//                             <div className="space-y-4">
//                                 <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Select Size</h3>
//                                 <div className="flex flex-wrap gap-3">
//                                     {product.sizes.map((s, i) => (
//                                         <button
//                                             key={i}
//                                             onClick={() => setSize(s)}
//                                             className={`min-w-[50px] h-[50px] px-4 border transition-all duration-300 flex items-center justify-center font-medium
//                         ${size === s
//                                                     ? 'bg-white text-black border-white'
//                                                     : 'border-white/20 text-white hover:border-white'}`}
//                                         >
//                                             {s}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         {/* ACTION BUTTONS */}
//                         <div className="pt-6 space-y-4">
//                             <button
//                                 disabled={!size && product.sizes?.length > 0}
//                                 className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
//                             >
//                                 {size || product.sizes?.length === 0 ? 'Add to Bag' : 'Select a Size'}
//                             </button>

//                             <div className="flex items-center justify-center gap-8 py-4 border-t border-white/10">
//                                 <div className="flex flex-col items-center gap-1">
//                                     <span className="text-[10px] text-gray-500 uppercase tracking-widest">Free Shipping</span>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-1">
//                                     <span className="text-[10px] text-gray-500 uppercase tracking-widest">Secure Payment</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductDetails;








import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopDataContext } from '../content/ShopContext';
import RelatedProduct from '../component/RelatedProduct';

function ProductDetails() {
    const { productId } = useParams();
    const { products, currency, addtoCart } = useContext(shopDataContext);

    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        if (!products || products.length === 0) return;

        const foundProduct = products.find((item) => item._id === productId);
        console.log(foundProduct, "foundProduct");

        if (foundProduct) {
            setProduct(foundProduct);
            setActiveImage(foundProduct.Image1 || '');  // Default to the first image
        }
    }, [productId, products]);

    if (!product) {
        return (
            <div className="w-full h-screen bg-[#0c2025] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Safe images array with lowercase keys
    const images = [
        product.Image1,
        product.Image2,
        product.Image3,
        product.Image4,
    ].filter(Boolean);

    const mainImage = activeImage || images;  // Default to the first image if no activeImage

    return (
        <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* LEFT: IMAGE GALLERY */}
                    <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:w-24">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveImage(img)} // Set active image on click
                                    className={`relative flex-shrink-0 w-20 h-24 md:w-full cursor-pointer transition-all duration-300 border-2 overflow-hidden
                                    ${activeImage === img ? 'border-cyan-400' : 'border-white/30'}`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main display */}
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="w-full h-auto max-h-[700px] object-contain animate-fade-in"
                            />
                        </div>
                    </div>

                    {/* RIGHT: PRODUCT INFO */}
                    <div className="w-full lg:w-[40%] flex flex-col space-y-8 lg:sticky lg:top-24 h-fit">
                        <div className="space-y-2">
                            <p className="text-cyan-400 text-sm tracking-[0.3em] font-bold uppercase">LIVN</p>
                            <h1 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-3xl font-medium mt-4">
                                {currency}{product.price}
                            </p>
                        </div>

                        <div className="h-[1px] w-full bg-white/10" />

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Description</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                {product.description}
                            </p>
                        </div>

                        {/* SIZE SELECTION */}
                        {product.sizes?.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Select Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSize(s)}
                                            className={`min-w-[50px] h-[50px] px-4 border transition-all duration-300 flex items-center justify-center font-medium
                                            ${size === s
                                                    ? 'bg-white text-black border-white'
                                                    : 'border-white/20 text-white hover:border-white'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ACTION BUTTONS */}
                        <div className="pt-6 space-y-4">
                            <button
                                disabled={!size && product.sizes?.length > 0}
                                className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"   
                            onClick={() => addtoCart(product._id, size)}
                            >
                                {size || product.sizes?.length === 0 ? 'Add to Bag' : 'Select a Size'}
                            </button>

                            <div className="flex items-center justify-center gap-8 py-4 border-t border-white/10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Free Shipping</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white pt-4 pb-20'>
                <div className='flex px-5 mt- lg:ml-20 '>


                    <div className='flex px-4 py-3 text-sm text-white border border-slate-500'>
                        Description
                    </div>

                    <div className='flex px-4 py-3 text-sm text-white border border-slate-500'>
                        Review {"124"}
                    </div>
                </div>

                <div className='w-[50%] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white py-4  px-4 mt-0 lg:ml-24 border border-slate-500 '>
                    <p className=' flex items-center justify-center'>
                        upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on LIVIN. Crafted from brathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essentails for those who value both fastion and funtion
                    </p>
                </div>




            </div>

            <div>
               <RelatedProduct
          category={product.category}
          subcategory={product.subcategory}
          currentProductId={product._id}
        />
            </div>
        </div>
    );
}

export default ProductDetails;
