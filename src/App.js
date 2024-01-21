import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import ServiceDisplay from "./Pages/ServiceDisplay";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import React from "react";
import TrainingInquire from "./Components/TrainingInquire/TrainingInquire";

// import Trainings from "./Components/Trainings/Trainings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/services" element={<ServiceDisplay category="services" />} />
          <Route path="/products" element={<ShopCategory category="products" />} />
      
          <Route path="/trainings" element={<><ShopCategory category="trainings" /><TrainingInquire /></>} />

          <Route path="/about" element={<ShopCategory category="about" />} />
          


          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
  };

export default App;
