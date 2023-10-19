import React, { useEffect, useState } from "react";

import "./component.css";
import {
  Grid,
  Card,
  Button,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  TextField,
  Autocomplete,
} from "@mui/material";
import { CartState } from "../ContextFolder/Context";

// const data = [
//   {
//     unit: "$",
//     price: 100,
//     image:
//       "https://content-images.weber.com/content/Weber-Asia/Recipes/WHOLE-GRILLED-MASALA-FISH-3.jpg?auto=compress,format&w=750",
//     content:
//       "Pomfret Fry is a delicious fish fry recipe where the fish is marinated with a spicy paste made with a set of simple spices.",
//     title: "Pomfret fry",
//   },

//   {
//     unit: "$",
//     price: 150,
//     image:
//       "https://assets.epicurious.com/photos/63ef9f657c3e98834ec8645e/16:9/w_6526,h_3671,c_limit/Paella_RECIPE_021523_47427.jpg",
//     content:
//       "Prawn Curry is a simple delicious & flavorful dish made with fresh prawns, onions, tomatoes & ground spices.",
//     title: "Prawns curry",
//   },
//   {
//     unit: "$",
//     price: 90,
//     image:
//       "https://vaya.in/recipes/wp-content/uploads/2018/06/Bangda-Masala-Fry.jpg",
//     content:
//       "This spicy and tangy bangda fish fry is made with aromatic spices, onion, ginger, garlic, tamarind, and coconut",
//     title: "Spicy bangada fry",
//   },
//   {
//     unit: "$",
//     price: 95,
//     image:
//       "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2015/11/Surmai-Fry-01.jpg",
//     content:
//       "It is high in vitamins, minerals, and protein. Surmai Fish Curry is one of the most widely made recipes with this fish.",
//     title: "Delicious surmai fry",
//   },
//   {
//     unit: "$",
//     price: 80,
//     image: "https://i.ytimg.com/vi/HoKTgP11Z1E/maxresdefault.jpg",
//     content:
//       "It has a pinkish brilliant red exterior, light white meat with a delicate texture, and a distinct sweet flavour.",
//     title: "Pink perch fry",
//   },
//   {
//     unit: "$",
//     price: 50,
//     image:
//       "https://img-global.cpcdn.com/recipes/68984c45715aac7c/1200x630cq70/photo.jpg",
//     content:
//       "A delicious and lip-smacking fresh fish fry which is also known as Bombli fry or Bombay duck is very popular in Mumbai, Konkan",
//     title: "Bombay duck fry",
//   },
//   {
//     unit: "$",
//     price: 60,
//     image:
//       "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b309802c-be9e-f945-2fc5-59adfce18ac5/original/Indian_marinades-04.jpg",
//     content:
//       "Easy Rava Fish Fry. The fish is crispy from the exterior and succulent from within. The taste is tangy, spicy and the.",
//     title: "Rohu fish fry",
//   },
//   {
//     unit: "$",
//     price: 110,
//     image:
//       "https://thumbs.dreamstime.com/b/kerala-fish-fry-onions-45302641.jpg",
//     content:
//       "Fish pieces covered in a spicy and savoury marinade shallow-fried to perfection, this pan fried crispy fish recipe is worth the calories",
//     title: "Spicy amberjack fish fry",
//   },
// ];

export default function Body() {
  // const response=fetch("http://localhost:5000/api/seafoodData")
  // const [seaFood,setseaFood]=useState([]);

  // const loadData=async()=>{
  //   const response=await fetch("http://localhost:5000/api/seafoodData",{
  //   method:'POST',
  //   headers:{'Content-Type':'application/json'}});
  //   response=await response.json()
  //   // console.log(response[0])
  //   setseaFood(response[0])
  // }
  // useEffect(()=>{
  //   loadData()
  // },[])

  // const apiforData="http://localhost:5000/api/seafoodData"
  // const getdata=async()=>{
  //   const res=await fetch(apiforData,{method:'POST',headers:{'Content-Type':'application/json'}})
  //   const daa=await res.json();
  //   return daa
  // }

  // const display=async()=>{
  //   global.payload=await getdata()

  // }
  // display()

  // const apiUrl = "http://localhost:5000/api/seafoodData";

  // const [payload, setPayload] = useState([]);

  // const getData = async () => {
  //   const res = await fetch(apiUrl, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   return data;
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getData();
  //     setPayload(data);
  //   };

  //   fetchData();
  // }, []);

  // const {state:{products}}=CartState()
  // // console.log(products)

  // const {state:{cart},dispatch,}=CartState()
  const { state, dispatch } = CartState();
  const { products, cart } = state;


  console.log(Object.values(cart));

  // const [searchTerm, setSearchTerm] = useState('');
  // const filteredData = payload.filter((item) => {
  //   return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      <div className="spacing">
        {/* <TextField label="Search" variant="filled" type="search" sx={{marginBottom:"20px"}} value={searchTerm} fullWidth onChange={(e) => setSearchTerm(e.target.value)}/>
        <ul>
      {filteredData.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
      </ul> */}
        <Autocomplete
          sx={{ marginBottom: "20px" }}
          freeSolo
          options={products.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid item xs={12} md={3} sm={6} lg={3}>
              <Card>
                <CardMedia sx={{ height: 150 }} image={item.image} />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.content}</Typography>
                  <Typography variant="text" sx={{ fontSize: 30 }}>
                    {item.unit + item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* {
                    cart.some(p=>p.id===item.id)?(
                      <Button variant="contained" onClick={()=>{
                        dispatch({type:'REMOVE_FROM_CART',
                        payload:item})
                      }}>Remove from cart</Button>
                    ):(<Button variant="contained" onClick={()=>{
                      dispatch({type:'ADD_TO_CART',
                      payload:item})
                    }} >Add to cart</Button>)
                  }
                   */}
                   <Button variant="contained" onClick={()=>{
                      dispatch({type:'ADD_TO_CART',
                      payload:item})
                    }} >Add to cart</Button>
                </CardActions> 


              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
