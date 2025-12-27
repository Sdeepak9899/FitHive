import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router"
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navigation from "./component/Nav";
import { userDataContext } from "./content/UserContext";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const location = useLocation();


  const hideNav = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>


    {!hideNav &&     <Navigation />}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="collection" element={<Collection />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="productdetail/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App;