
import { createContext } from "react";
import { authDataContext } from "./authContent";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import axois from "axios";
import { userDataContext } from "./UserContext";
export const shopDataContext = createContext();

export default function ShopContext({ children }) {


    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState("");
    let [showSearch, setShowSearch] = useState(false);
    let [cardItem, setCardItem] = useState({})
    let { serverUrl } =  useContext(authDataContext)
    let currency =" ₹";
    let delivery_fee =40;


    const getProducts = async () => {
        try {
            let result=await axois.get(`${serverUrl}/product/productlist`);
            console.log(result.data.products,"products");
            setProducts(result.data.products);
        } catch (error) {
            console.log(error ,"ukhsdbzxick")
        }
    }


    const addtoCart = async(itemId, size)=>{
        if(!size){
          console.log("selectRpoduct Size");
          return;
        }

        let carData = structuredClone(cardItem);

        if(carData[itemId]){
          if(carData[itemId][size]){
            carData[itemId][size] += 1;
          }else{
            carData[itemId][size] =1
          }
        }else{
          carData[itemId] ={};
          carData[itemId][size] = 1;
        }

          setCardItem(carData);
          console.log(carData,"carddata ")


          if(userData){
            try {
              await axois.post(`${serverUrl} + /cart/add`,{
                itemId, size 
              },{withCredentials: true})

              setLoading(false)
              
            } catch (error) {
              console.log(error,"addtocart else errror ")
              
            }
          }
    }

    const getCaertCount =()=>{
      let totalCount = 0;
      for (const items in cardItem){
        for (const item in cardItem[items]){
          try {
            if(cardItem[items][item] > 0){
              totalCount += cardItem[items][item]
            }
          } catch (error) {
            
          }
        }
      }
    }



    useEffect(()=>{
        getProducts();
    })


    

  const value = {
    products,
    currency,
    delivery_fee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cardItem,addtoCart,getCaertCount,setCardItem,
  
  };

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}
