import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Tab, Tabs, Button } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useNavigate } from "react-router-dom";
import { CartState } from "../ContextFolder/Context";

const Navbar = () => {
  const {
    state: { cart },
  } = CartState();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <StoreIcon sx={{ fontSize: 30 }}></StoreIcon>
          {/* <Tabs sx={{marginLeft:2}} textColor="success">
                <Tab label="Products"></Tab>
                <Tab label="Products"></Tab>
                <Tab label="Products"></Tab>
            </Tabs> */}
          {localStorage.getItem("authToken") ? (
            <Tabs sx={{ marginLeft: 2 }} textColor="success">
              <Tab component={Link} to="/" label="Orders"></Tab>
            </Tabs>
          ) : (
            ""
          )}

          {/* before login */}

          {!localStorage.getItem("authToken") ? (
            <React.Fragment>
              <Button
                component={Link}
                to="/login"
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                sx={{ marginLeft: "10px" }}
                variant="contained"
              >
                Signup
              </Button>
            </React.Fragment>
          ) : (
            <>
            
              <Button
                component={Link}
                to="/mycart"
                sx={{ marginLeft: "auto" }}
                variant="outlined"
              >
                MyCart({cart.length})
              </Button>

              <Button
                component={Link}
                to="/"
                sx={{ marginLeft: "10px" }}
                variant="outlined"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
