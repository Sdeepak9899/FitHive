import React from 'react'
import Heroui from '../component/Hero';
import Product from './Product';
import OurPolicy from '../component/OurPolicy';
import NewLetterBox from '../component/NewLetterBox';
import Footer from '../component/Footer';


function Home() {
  return (
    <div className='overflow-hidden'>
      <Heroui/>
      <Product/>
      <OurPolicy/>
      <NewLetterBox/>
      <Footer/>
    </div>
  )
}

export default Home;