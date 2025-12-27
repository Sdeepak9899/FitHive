import React from 'react'

export default function Title({text1,text2}) {
  return (
    <div className='inline-flex gap-1 items-center text-center mb-3 text-[35px] md:text-[40px]'>
        

<p className='text-blue-100 font-semibold'>
    {text1} <span className='text-[#11ba11]'>{text2}</span>
</p>

    </div>
  )
}
