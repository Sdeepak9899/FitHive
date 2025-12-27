// import { useContext, useEffect, useState } from 'react';
// import { shopDataContext } from '../content/ShopContext';
// import Card from './Card';
// import Title from './Title';

// function RelatedProduct({ category, subcategory, currentProductId }) {
//   const { products } = useContext(shopDataContext);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     const filtered = products.filter(
//       (item) =>
//         item._id !== currentProductId &&
//         item.category === category &&
//         item.subcategory === subcategory
//     );

//     setRelated(filtered.slice(0, 4));
//   }, [products, category, subcategory, currentProductId]);

//   if (related.length === 0) return null;

//   return (
//     <div className="mt-16">
//       <Title text1="Related" text2="Products" />

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//         {related.map((item) => (
//           <Card
//             key={item._id}
//             id={item._id}
//             name={item.name}
//             price={item.price}
//             image={item.Image1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RelatedProduct;



import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { shopDataContext } from '../content/ShopContext';
import Card from './Card';
import Title from './Title';

function RelatedProduct({ category, subcategory, currentProductId }) {
  const { products } = useContext(shopDataContext);
  const [related, setRelated] = useState([]);
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const filtered = products.filter(
      (item) =>
        item._id !== currentProductId &&
        item.category === category &&
        item.subcategory === subcategory
    );

    setRelated(filtered.slice(0, 4));
  }, [products, category, subcategory, currentProductId]);

  useEffect(() => {
    if (!sliderRef.current) return;

    setWidth(
      sliderRef.current.scrollWidth -
      sliderRef.current.offsetWidth
    );
  }, [related]);

  if (related.length === 0) return null;

  return (
    <div className="pb-4 overflow-hidden">
      <Title text1="Related" text2="Products" />

      <motion.div
        ref={sliderRef}
        className="cursor-grab mt-8 overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {related.map((item) => (
            <motion.div
              key={item._id}
              className="min-w-[260px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.Image1}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default RelatedProduct;
