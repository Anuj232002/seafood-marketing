import React, { useState } from "react";
import { Avatar, Grid, Paper, Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
export default function Login() {
  const [crediantial, setcrediantial] = useState({ email: "", password: "" });
  let navigate=useNavigate()
  //use in thuder client
  //Using fetch api preventDefault is synthetic event
  const handleSubmit = async (e, res) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: crediantial.email,
        password: crediantial.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credential");
    }
    if (json.success) {
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");

    }

  };
  //we use onCjange event listener without the we can't type anything in textfield as we pass an emapty string in stringyfy
  const onChange = (event) => {
    setcrediantial({ ...crediantial, [event.target.name]: event.target.value });
  };
  const paperStyle = {
    padding: 20,
    height: "inherit",
    margin: "20px auto",
    width: 280,
    marginTop: "5rem",
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={5} style={paperStyle}>
            <Grid align="center">
              <Avatar sx={{ backgroundColor: "#00204a" }}>
                <LoginIcon />
              </Avatar>
              <Typography variant="h5">Login</Typography>
            </Grid>

            <TextField
              type="email"
              label="Email"
              variant="standard"
              name="email"
              value={crediantial.email}
              fullWidth
              required
              sx={{ marginBottom: "20px" }}
              onChange={onChange}
            />
            <TextField
              type="password"
              label="Password"
              variant="standard"
              name="password"
              value={crediantial.password}
              fullWidth
              required
              sx={{ marginBottom: "20px" }}
              onChange={onChange}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginBottom: "20px" }}
            >
              Login
            </Button>
            <Typography
              component={Link}
              to="/signup"
              variant="subtitle2"
              sx={{ textDecoration: "none" }}
            >
              Not user?
            </Typography>
          </Paper>
        </Grid>
      </form>
    </>
  );
}
