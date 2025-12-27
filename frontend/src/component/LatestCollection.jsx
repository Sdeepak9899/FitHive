import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../content/ShopContext'
import Card from './Card';

function LatestCollection() {

    let {products} = useContext(shopDataContext)
    let [LatestProducts, setLatestProducts] = useState([]);


    useEffect(()=>{
        setLatestProducts(products.slice(0,8))
    },[products])

    return (
        <div>

            <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>
                <Title text1="Latest" text2="Collection" />

                <p className='w-[100%] m-auto text-xl md:text-2xl px-2.5 text-blue-100'>
                    Step Into Style - New Collection Dropping This Season!
                </p>


                <div className='w-full h-1/2 mt-7 flex itmes-center justify-center gap-12  flex-wrap'>
                {
                    LatestProducts.map((item,index)=>(
                        <Card key={index} name={item.name} image={item.Image1} id={item._id} price={item.price} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default LatestCollection