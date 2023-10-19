import "./App.css";

import MyCart from "./component/MyCart"
import Home from "./screens/Home";
import Login from "./screens/Login";
import Singup from "./screens/Singup";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    
  

     <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Singup />} />
            <Route exact path="/mycart" element={<MyCart/>}/>
          </Routes>
        </div>
      </Router>


  
    
    
    
  );
}

export default App;
