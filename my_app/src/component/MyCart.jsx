import React, { useEffect, useState } from "react";
import { CartState } from "../ContextFolder/Context";
import "./component.css";
import {
  Grid,
  Card,
  Button,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function MyCart() {
  const {
    state: { cart },
  } = CartState();
  const { dispatch } = CartState();
  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])
  return (
    <>
      {localStorage.getItem("authToken") ? (
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <Grid container spacing={2}>
              {cart.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <Grid container sx={{ height: 150 }}>
                      <Grid item xs={4}>
                        {/* Image */}
                        <CardMedia sx={{ height: "100%" }} image={card.image} />
                      </Grid>

                      <Grid item xs={4}>
                        {/* Card content */}
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            {card.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            component="p"
                          >
                            {card.unit + card.price}
                           {/* <Formcontrol as='select' value={card.qty}>
                            {[...Array(card).keys()].map((x)=>(<option key={x+1}>{x+1}</option>))}
                           </Formcontrol> */}
                          </Typography>
                          <DeleteIcon
                            sx={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: card,
                              });
                            }}
                          />
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{}}>
            {/* Additional grid */}
            <Card>
              {/* Additional card content */}
              <CardContent>
                <Typography variant="h5" component="h2">
                  Additional Card
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Subtotal ({cart.length})items
                </Typography>
                <Typography variant="body1">
                Total:${total}
                </Typography>
                <Button variant="contained" >Proceed to Checkout</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}
