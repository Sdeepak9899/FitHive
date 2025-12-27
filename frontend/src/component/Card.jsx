// import React, { useContext } from 'react'
// import { shopDataContext } from '../content/ShopContext'

// function Card({name, image, price, id}) {
//     let {currency} = useContext(shopDataContext)
//   return (
//     <div className='w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounde-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049]'>
//         <img src={image} alt={name} className='w-[100%] h-[80%] object-contain rounded-sm' />
//         <div className='w-[100%] h-[30%] flex items-start  px-2.5 flex-col'>
//             <div className='text-[#c3f6fa] text-[18px] py-[10px]'>{name}</div>
//             <div className='text-[#c3f6fa] text-[18px]'>{currency}{price}</div>
//         </div>
//     </div>
//   )
// }

// export default Card





import React, { useContext } from "react";
import { motion } from "framer-motion";
import { shopDataContext } from "../content/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, price, id }) {
  const { currency } = useContext(shopDataContext);
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-xl cursor-pointer border border-[#80808049]" 
      onClick={()=>navigate(`/productdetail/${id}`)}
    >
      {/* Image */}
      <motion.div
        className="w-full h-[75%] flex items-center justify-center p-3"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text */}
      <div className="w-full h-[25%] flex flex-col justify-start items-start px-3">
        <h3 className="text-[#c3f6fa] text-[17px] font-medium truncate">
          {name}
        </h3>

        <p className="text-[#fdfdfd] text-[18px] font-semibold mt-1">
          {currency}{price}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
