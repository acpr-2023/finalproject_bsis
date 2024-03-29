import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import ServiceDisplay from "./Pages/ServiceDisplay";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Timeline from "./Components/About/Timeline";
import Contact from "./Components/Contact/Contact";
import TrainingInquire from "./Components/TrainingInquire/TrainingInquire";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/services"
            element={<ServiceDisplay category="services" />}
          />
          <Route
            path="/products"
            element={<ShopCategory category="products" />}
          />
          <Route
            path="/about"
            element={
              <React.Fragment>
                <ShopCategory category="about" />
                <About />
                <Timeline />
                <Contact />
              </React.Fragment>
            }
          />

          <Route
            path="/trainings"
            element={
              <>
                <ShopCategory category="trainings" />
                <TrainingInquire />
              </>
            }
          />

          <Route
            path="/services"
            element={<ServiceDisplay category="services" />}
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
