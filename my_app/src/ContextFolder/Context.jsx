// import { createContext,useContext,useEffect,useReducer,useState } from "react";
// import {cartReducer} from './Reducer'
// const Cart=createContext()

// export const Context=({children})=>{
//     const apiUrl = "http://localhost:5000/api/seafoodData";

//     const [payload, setPayload] = useState([]);
    
//     const getData = async () => {
//       const res = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       return data;
//     };
    
//     useEffect(() => {
//       const fetchData = async () => {
//         const data = await getData();
//         setPayload(data);
//       };
    
//       fetchData();
//     }, []);
//     useEffect(()=>{
//     const [state, dispatch] = useReducer(cartReducer, {
//         products: [],
//         cart: []
//       });

//     const products=payload.map((item)=>({
//         id:item._id,
//         unit:item.unit,
//         price:item.price,
//         image:item.image,
//         content:item.content,
//         title:item.title

//     }));
// dispatch({type:'SET_PRODUCTS',payload:products})
// },[payload])

//     // const [state,dispatch]=useReducer(cartReducer,{
//     //     products:products,
//     //     cart:[]
//     // })
//     // console.log(products)

//     return(
//     <Cart.Provider value={{state,dispatch}}>
//         {children}
//     </Cart.Provider>
//     )
// }

// export const CartState=()=>{
//     return useContext(Cart)
// }


import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();

export const Context = ({ children }) => {
  const apiUrl = "http://localhost:5000/api/seafoodData";

  const [payload, setPayload] = useState([]);

  const getData = async () => {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setPayload(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const products = payload.map((item) => ({
      id: item._id,
      unit: item.unit,
      price: item.price,
      image: item.image,
      content: item.content,
      title: item.title,
    }));

    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [payload]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

 

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};
