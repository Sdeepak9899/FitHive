import React from 'react'
import LatestCollection from '../component/LatestCollection'
import Bestseller from '../component/Bestseller'

function Product() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col py-5 gap-16'>

      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-5 flex-col'>


        <LatestCollection />
      </div>


 <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-2.5 flex-col'>


        <Bestseller />
      </div>


    </div>
  )
}

export default Product