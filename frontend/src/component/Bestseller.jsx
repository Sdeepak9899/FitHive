import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../content/ShopContext'
import Card from './Card';

function Bestseller() {
   let {products} = useContext(shopDataContext)

   let [BestSellerProducts, setBestSellerProducts] = useState([]);


   useEffect(()=>{
let filtered= products.filter((item)=>item.bestSeller===true)
setBestSellerProducts(filtered.slice(0,4))
   },[products])


    return (
        <div>
            <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>
                <Title text1="BEST" text2="SELLER" />
                <p className='w-[100%] m-auto text-xl md:text-2xl px-2.5 text-blue-100'>
                    Tried, Tested, Loved Discover Our All-Time Best Sellers,
                </p>



                <div className='w-full h-1/2 mt-7 flex items-center justify-center gap-12  flex-wrap'>
                    {
                        BestSellerProducts.map((item,index)=>(
                            <Card key={index} name={item.name} image={item.Image1} id={item._id} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Bestseller