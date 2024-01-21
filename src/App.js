import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Timeline from "./Components/About/Timeline";
// import Contact from "./Components/About/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/services"
            element={<ShopCategory category="services" />}
          />
          <Route
            path="/products"
            element={<ShopCategory category="products" />}
          />
          <Route
            path="/trainings"
            element={<ShopCategory category="trainings" />}
          />
          <Route
            path="/about"
            element={
              <React.Fragment>
                <ShopCategory category="about" />
                <About />
                <Timeline />
                {/* <Contact /> */}
              </React.Fragment>
            }
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
